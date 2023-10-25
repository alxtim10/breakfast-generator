"use client";
import React, { useEffect, useState } from "react";
import BreakfastList from "../components/BreakfastList";
import AddBreakfast from "../components/AddBreakfast";

export default function Home() {
  const [data, setData] = useState<any>([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/");
    const res = await response.json();
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center pt-20">
      <a href="/" className="text-xl">
        Breakfast Generator
      </a>
      <AddBreakfast fetchData={fetchData} />
      <BreakfastList data={data} fetchData={fetchData} />
    </main>
  );
}
