"use client";
import { useFormik } from "formik";
import React from "react";
import "./AddBreakfast.css";
import { useRouter } from "next/navigation";

const AddBreakfast = ({ fetchData }: any) => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    onSubmit: async () => {
      const { name, description } = formik.values;
      const reqBody = {
        name,
        description,
      };
      submitHandler(reqBody);

      router.refresh();
      formik.setFieldValue("name", "");
      formik.setFieldValue("description", "");
    },
  });

  const submitHandler = async (body: any) => {
    const response = await fetch("http://localhost:8080/", {
      method: "POST",
      body: JSON.stringify(body),
    });
    await fetchData();
  };

  const handleFormInput = (event: any) => {
    formik.setFieldValue(event.target.name, event.target.value);
  };

  return (
    <div className="w-72">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex justify-center items-center mt-10">
          <div className="flex flex-col gap-5  justify-center items-center">
            <div className="input-container">
              <input
                name="name"
                placeholder="Name"
                className="input-field md:w-[40rem]"
                type="text"
                onChange={handleFormInput}
                value={formik.values.name}
              />
              <label className="input-label">Name</label>
              <span className="input-highlight"></span>
            </div>
            <div className="input-container">
              <input
                name="description"
                placeholder="Description"
                className="input-field md:w-[40rem]"
                type="text"
                onChange={handleFormInput}
                value={formik.values.description}
              />
              <label className="input-label">Description</label>
              <span className="input-highlight"></span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <button
            type="submit"
            className="px-4 py-2 border bg-white text-black border-black rounded-md shadow-lg hover:border-[#049910] hover:bg-[#049910] hover:text-white transition-all"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBreakfast;
