import type { Component } from "solid-js";
import tag from "../../assets/tags.png";
import sobcsLogo from "../../assets/sobcs.png";
import caldwellMainLogo from "../../assets/caldwellMainLogo.png";

export const Hero: Component = () => {
  return (
    <>
      <section class="min-h-4/5 lg:bg-gradient-to-r from-rose-100 to-teal-100">
        <div class="px-4 min-h-screen py-20 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 grid items-center justify-center ">
          <div class="flex flex-col w-full mb-12 text-center mt-20">
            <div class="inline-flex  flex-shrink-0 w-20 h-20 mx-auto mb-5 text-blue-600 ">
              <img
                src={tag}
                alt="HTML Tags"
                draggable={false}
                class="w-20 h-20 icon icon-tabler icon-tabler-aperture"
              />
            </div>
            <h1 class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-7xl lg:max-w-7xl">
              Welcome to <br class="hidden lg:block" />
              <span class="text-transparent bg-clip-text bg-gradient-to-b from-sky-400 to-cyan-300 active:from-sky-300">
                Caldwell Computer Science Club.
              </span>
            </h1>

            <p class="max-w-xl mx-auto mt-8 text-base leading-relaxed text-center text-gray-500">
              We are the Caldwell University's tech related student
              organization. We hope to create an engaging and positive space for
              University's tech enthusiasts and position Caldwell University
              within a global community of student leaders in tech.
            </p>

            <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
              <div class="mt-3 rounded-lg sm:mt-0">
                <button class="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-gradient-to-b from-sky-400 to-cyan-300 active:from-sky-300 hover:from-sky-400 focus:from-cyan-400 lg:px-10 rounded-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                  Join Today
                </button>
              </div>
              <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                <a href="/#blogs">
                  <button class="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    Read Blogs
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-neutral-50 max-h-fit">
        <div class=" px-5 py-12 mx-auto lg:px-16">
          <div class="flex flex-col w-full mb-8 text-center">
            <span class="mb-4 text-sm font-medium tracking-wide text-gray-500 uppercase">
              Afilliated with
              {/* <a
                href="https://www.wickedtemplates.com/expo.html"
                class="font-semibold text-blue-600 lg:mb-0 hover:text-blue-500">
                Our customers »
              </a> */}
            </span>
          </div>
          <div class="mx-auto text-center">
            <div class="grid grid-cols-2 mx-auto items-center justify-center lg:grid-cols-2">
              <div>
                <img
                  class="h-10 mx-auto lg:h-20 grayscale"
                  src={caldwellMainLogo}
                  alt="Caldwell University"
                  draggable={false}
                />
              </div>
              <div>
                <img
                  class="h-10 mx-auto lg:h-28 grayscale"
                  src={sobcsLogo}
                  alt="Caldwell University"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
