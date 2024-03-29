"use client";
import { FaCheck } from "react-icons/fa";
import { FaExclamation } from "react-icons/fa";
import { handleChangeProductOrderStatus } from "./action";

export default function TableData({
  order,
}: {
  order: {
    _id: string;
    userId: string;
    productId: string;
    product: { name: string };
    province: string;
    address: string;
    status: string;
    createdAt: string;
  }[];
}) {
  return (
    <>
      {order.map((ord, idx) => {
        return (
          <tr className="h-12 min-[320px]:text-sm" key={idx}>
            <td className=" overflow-auto px-4">
              <span>{ord._id}</span>
            </td>
            <td>{ord.province}</td>
            <td>{ord.address}</td>
            <td>{new Date(Number(ord.createdAt)).toDateString()}</td>
            <td>
              {ord.status === "Complete" ? (
                <span className="flex items-center gap-2 p-2 bg-green-400 w-28 h-8 rounded-2xl mx-auto text-sm min-[320px]:w-10 min-[320px]:bg-white min-[320px]:h-6 min-[320px]:text-[10px]">
                  <div className="p-1 bg-green-600 rounded-[50%] text-white">
                    <FaCheck size={12} />
                  </div>
                  <span className="min-[320px]:hidden">Accepted</span>
                </span>
              ) : (
                <span className="flex items-center gap-2 p-2 bg-yellow-300 w-28 h-8 rounded-2xl mx-auto text-sm min-[320px]:w-10 min-[320px]:bg-white min-[320px]:h-6 min-[320px]:text-[10px]">
                  <div
                    className="p-1 bg-yellow-600 rounded-[50%] text-white cursor-pointer"
                    onClick={() => handleChangeProductOrderStatus(ord._id)}
                  >
                    <FaExclamation size={12} />
                  </div>
                  <span className="min-[320px]:hidden">Pending</span>
                </span>
              )}
            </td>
          </tr>
        );
      })}
    </>
  );
}
