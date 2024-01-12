"use client";
import { useState, useEffect } from "react";
import data from "@/app/data";
import Detailheader from "@/app/components/Detailheader";

export default function BlogPage({ params }) {
  const [blog, setBlog] = useState("");

  useEffect(() => {
    setBlog(data[params.id - 1]);
  }, []);

  return (
    <>
      {blog && (
        <div>
          <Detailheader />
          <main class="pt-8 pb-16 bg-white dark:bg-gray-900 antialiased">
            <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
              <article class="mx-auto dark:text-white w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                <header class="mb-4 lg:mb-6 not-format">
                  <p class="mb-4 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-6  dark:text-white">
                    Embark On a captivating exploration through times as we
                    Unveil the rich narrative of gypsm, a mineral with roots
                    reaching millions of years into the past. This blog post
                    delves into the past. This blog post delves into its
                    geological Genesis, traces its historical eminence, and
                    illuminates its transformative impact on the tapestry of
                    modern architecture.
                  </p>
                </header>

                <figure>
                  <img src="/img2.jpeg" alt="" style={{ marginLeft: "25%" }} />
                  {/* <figcaption>Digital art by Anonymous</figcaption> */}
                </figure>
                <div className="p-5">
                  <h1 className="text-2xl p-5 font-extrabold">
                    Geological Marvel and Mining Exploration
                  </h1>
                  <p>
                    Gypsum, a mineral of extraordinary prevalence, traces its
                    origins to ancient saltwater layers that have undergone a
                    mesmerizing transformation over epochs. As water gradually
                    retreated, it left behind intricate crystal formations,
                    transforming gypsum into a geological marvel. Today, this
                    mineral is mined from sedimentary rock formations around the
                    world, revealing its fascinating crystal projections, aptly
                    earning it the moniker—the Spear Stone. The mining
                    exploration of gypsum unveils the breathtaking journey of
                    this mineral, from its humble beginnings in ancient seabeds
                    to the walls and ceilings of modern constructions.
                  </p>
                </div>
                <div className="p-5">
                  <h1 className="text-2xl p-5 font-extrabold">
                    Echoes from Antiquity
                  </h1>
                  <p>
                    The historical resonance of gypsum reverberates through
                    time. This mineral was a silent yet integral contributor to
                    the architectural grandeur of ancient civilizations. In
                    ancient Israel (circa 7000 BC), gypsum was used for floor
                    screeds, indicating its early use in construction. Moving to
                    Egypt circa 3000 BC, gypsum played a crucial role in the
                    construction of the Cheops Pyramid, showcasing its early
                    importance. These historical uses highlight gypsum's
                    versatility and durability, qualities that have been
                    recognized and utilized for thousands of years.
                  </p>
                </div>

                <div className="p-5">
                  <h1 className="text-2xl p-5 font-extrabold">
                    Gypsum's Modern-day Embrace
                  </h1>
                  <p>
                    In contemporary architecture, gypsum's enduring relevance
                    and adaptability are unmistakable. It's a cornerstone
                    material, used in homes, offices, factories, and airports.
                    Gypsum's aesthetic appeal is just the tip of the iceberg; it
                    also provides acoustic comfort, thermal insulation, and
                    inherent strength. These qualities make it indispensable in
                    modern architectural design, blending beauty with
                    functionality in the spaces we inhabit every day.
                  </p>
                </div>

                <div className="p-5">
                  <h1 className="text-2xl p-5 font-extrabold">
                    Versatility Beyond Aesthetics
                  </h1>
                  <p>
                    Gypsum's influence in modern construction is profound.
                    Annually, an impressive 5 million tonnes of gypsum-based
                    plaster are used in European interiors. Its versatility is
                    evident in everything from intricate residential designs to
                    practical everyday items. Gypsum's ability to adapt to
                    various construction needs while maintaining its functional
                    and aesthetic qualities makes it a dynamic force in the
                    construction industry.
                  </p>
                </div>

                <div className="p-5">
                  <h1 className="text-2xl p-5 font-extrabold">
                    Gypsum's Enduring Virtues
                  </h1>
                  <p>
                    The true allure of gypsum lies in its remarkable qualities
                    that make it a staple in contemporary construction. It is
                    non-combustible, with crystal water that provides up to 4
                    hours of fire protection. Gypsum's sound insulation
                    properties and low thermal conductivity are essential in
                    crafting safe, energy-efficient, and sustainable spaces.
                    These qualities position gypsum not just as a building
                    material but as a key component in creating environments
                    that prioritize safety and comfort.
                  </p>
                </div>

                <div className="p-5">
                  <h1 className="text-2xl p-5 font-extrabold">Conclusion</h1>
                  <p>
                    Navigating through gypsum's legacy, it's clear that this
                    mineral is more than a construction material; it's an
                    architectural maestro. From its ancient origins to its
                    modern mastery, gypsum's journey intertwines with human
                    civilization, leaving a lasting impact on architectural
                    innovation and design. Its story is a testament to the
                    enduring qualities that have made it an integral part of our
                    built environment throughout history and into the present
                    day.
                  </p>
                </div>
              </article>
            </div>
          </main>
        </div>
      )}
    </>
  );
}
