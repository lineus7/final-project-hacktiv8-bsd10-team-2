"use server";

import { getProductById, getProducts } from "@/utils/queries";
import { ProductsModel } from "@/utils/type";

export const fetchProducts = async ({
  search,
  filter,
}: {
  search?: string | undefined;
  filter?: string | undefined;
}) => {
  const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
  if (!search) {
    search = "";
  }
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: getProducts,
      variables: {
        search: search,
        filter,
      },
    }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Error in server..");
  }
  return data.data.getProducts as ProductsModel[];
};

export const fetchProductsById = async (id: string) => {
  const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: getProductById,
      variables: {
        getProductByIdId: `${id}`,
      },
    }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Error in server..");
  }

  return data.data.getProductById as ProductsModel;
};
