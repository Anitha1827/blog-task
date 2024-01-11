"use client";
import { useState, useEffect } from "react";
import data from "@/app/data";

export default function BlogPage({ params }) {
  const [blog, setBlog] = useState("");

  useEffect(() => {
    setBlog(data[params.id - 1]);
  }, []);

  return (
    <>
      {blog && (
        <div>
          <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
            <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
              <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                <header class="mb-4 lg:mb-6 not-format">
                  <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                    {blog.title}
                  </h1>
                </header>

                <figure>
                  <img src={blog.img} alt="" />
                  {/* <figcaption>Digital art by Anonymous</figcaption> */}
                </figure>
                <h2>{blog.author}</h2>
                <p>{blog.body}</p>
              </article>
            </div>
          </main>
        </div>
      )}
    </>
  );
}
