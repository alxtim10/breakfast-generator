"use client";
import Link from "next/link";
import Generator from "./components/Generator";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:8080/");
      const res = await response.json();
      setData(res.data);
    }
    getData();
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10">
        <Generator data={data} />
        <div className="">
          <Link href="/breakfasts">
            <p className="hover:underline">View Breakfast List</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
