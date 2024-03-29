"use server";

import {
  addPoinUser,
  changePickupOrderStatus,
  changeProductOrderStatus,
} from "@/utils/queries";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const url = process.env.NEXT_PUBLIC_API_URL as string;
export const addPickupOrder = async (
  lat: number | undefined,
  lng: number | undefined
) => {
  const token = cookies().get("token");
  if (!token?.value) redirect("/login");

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.value}`,
    },
    body: JSON.stringify({
      query: `mutation CreatePickupOrder($lat: String!, $lng: String!) {
        createPickupOrder(lat: $lat, lng: $lng) {
          _id
          userId
          lat
          lng
          status
          createdAt
        }
      }`,
      variables: {
        lat: lat?.toString(),
        lng: lng?.toString(),
      },
    }),
  });
  redirect("/order");
};

export const handleChangeProductOrderStatus = async (id: string) => {
  const token = cookies().get("tokenAdmin");
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.value}`,
    },
    body: JSON.stringify({
      query: changeProductOrderStatus,
      variables: {
        productOrderId: id,
      },
    }),
  });
  revalidatePath("/admin");
  redirect("/admin?success=Order Completed");
};

export const handleChangePickupOrderStatus = async (id: string) => {
  const token = cookies().get("tokenAdmin");
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.value}`,
    },
    body: JSON.stringify({
      query: changePickupOrderStatus,
      variables: {
        pickupOrderId: id,
      },
    }),
  });
  revalidatePath("/admin");
  redirect("/admin?success=Order Completed");
};

export const handleAddPoin = async (id: string, poin: number) => {
  const token = cookies().get("tokenAdmin");
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.value}`,
    },
    body: JSON.stringify({
      query: addPoinUser,
      variables: {
        poin,
        userId: id,
      },
    }),
  });

  const responseJson = await response.json();
  if ("errors" in responseJson)
    redirect(`/admin?error=${responseJson.errors[0].message}`);
  console.log(responseJson);
  redirect("/admin?success=Success Add Poin");
};
