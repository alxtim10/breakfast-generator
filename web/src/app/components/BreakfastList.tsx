"use client";
import Link from "next/link";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const BreakfastList = ({ data, fetchData }: any) => {
  const deleteHandler = async (foodId: number) => {
    await fetch(`http://localhost:8080/${foodId}`, {
      method: "DELETE",
    });
    await fetchData();
  };

  return (
    <div className="mt-20 flex flex-col items-center justify-center">
      {data &&
        data.map((food: any, i: number) => {
          return (
            <div
              key={i}
              className="rounded-md text-center mb-5 bg-white text-black p-5 w-72"
            >
              <p>{food.name}</p>
              <p>{food.description}</p>
              <div className="mt-5 flex gap-5 justify-between">
                <Link
                  href={{
                    pathname: "/breakfasts/edit",
                    query: { id: food.id },
                  }}
                >
                  <FaEdit />
                </Link>
                <div
                  onClick={() => deleteHandler(food.id)}
                  className="cursor-pointer"
                >
                  <FaTrash />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BreakfastList;
