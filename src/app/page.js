"use client";
import { useEffect, useState } from "react";
import data from "./data.js";
import Link from "next/link.js";

export default function Home() {
  let [blog, setBlog] = useState("");
  useEffect(() => {
    setBlog(data);
  }, []);

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {blog && blog.map((val, index) => <Card data={val} key={index} />)}
    </div>
  );
}

function Card({ data }) {
  return (
    <>
      <div class="rounded overflow-hidden shadow-lg">
        <img
          class="w-full"
          src={data.img}
          alt="Mountain"
          style={{ width: "400px", height: "300px", padding: "5px" }}
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{data.title}</div>
          <p class="text-gray-700 text-base">{data.body}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Author Name: {data.author}
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            date: {data.date}
          </span> */}
          <Link
            href={`/blogpage/${data.id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
          </Link>
        </div>
      </div>
    </>
  );
}
