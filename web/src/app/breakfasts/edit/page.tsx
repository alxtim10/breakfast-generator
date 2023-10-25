"use client";
import React, { useState } from "react";
import Link from "next/link";
import EditBreakfast from "@/app/components/EditBreakfast";

export default function Home() {
  const [data, setData] = useState<any>([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/");
    const res = await response.json();
    setData(res.data);
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center pt-20">
      <Link href="/">
        <h1 className="text-xl">Breakfast Generator</h1>
      </Link>
      <EditBreakfast />

      <div className="text-center pt-10">
        <Link href="/breakfasts">
          <p className="hover:underline">View Breakfast List</p>
        </Link>
      </div>
    </main>
  );
}
