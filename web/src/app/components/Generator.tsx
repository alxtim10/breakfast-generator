"use client";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface Breakfast {
  name: String;
  description: String;
}

const Generator = ({ data }: any) => {
  const [breakfast, setBreakfast] = useState<Breakfast>();

  const generateHandler = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const item = data[randomIndex];
    setBreakfast(item);
  };

  return (
    <>
      <div className="flex flex-col gap-10 items-center justify-center">
        <h1 className="text-4xl">Breakfast Generator</h1>
        <Button
          onClick={() => generateHandler()}
          rightIcon={<FaArrowRight />}
          colorScheme="whatsapp"
          variant="outline"
        >
          Generate
        </Button>
        {breakfast && (
          <div className="rounded-md text-center bg-white text-black p-5 w-72">
            <p>{breakfast.name}</p>
            <p>{breakfast.description}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Generator;
