import { Component } from "solid-js";

export const Navbar: Component = () => {
  return (
    <header class=" sticky top-0 z-50">
      <input
        type="checkbox"
        name="hbr"
        id="hbr"
        class="hbr peer"
        hidden
        aria-hidden="true"
      />
      <nav class="fixed z-10 w-full border-b  backdrop-blur-xl navbar peer-checked:navbar-active md:absolute   ">
        <div class="container m-auto px-2 md:px-12 lg:px-7">
          <div class="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
            <div class="w-full px-6 flex justify-between lg:w-max md:px-0">
              <a href="#" aria-label="logo" class="flex space-x-2 items-center">
                <div aria-hidden="true" class="flex space-x-1">
                  <div class="h-4 w-4 rounded-full bg-gray-900"></div>
                  <div class="h-6 w-2 bg-sky-500"></div>
                </div>
                <span class="text-base font-bold text-gray-400">SASS</span>
              </a>
              <label
                for="hbr"
                class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                <div
                  aria-hidden="true"
                  class="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                <div
                  aria-hidden="true"
                  class="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
              </label>
            </div>
            <div class="navmenu hidden w-full flex-wrap justify-end items-center mb-16 mx-6 space-y-20 p-6 rounded-xl shadow-lg bg-white lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none">
              <div class="text-gray-600 lg:pr-4">
                <ul class="space-y-6 tracking-wide font-medium text-lg lg:text-sm lg:flex lg:space-y-0">
                  <li>
                    <a
                      href="#"
                      class="block md:px-4 transition hover:text-sky-700">
                      <span>About Us</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block md:px-4 transition hover:text-sky-700">
                      <span>Blog</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block md:px-4 transition hover:text-sky-700">
                      <span>Contact</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="w-full space-y-2 border-sky-200 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                &nbsp;
                <button
                  type="button"
                  title="Join Today"
                  class="w-full py-2.5 px-5 text-center rounded-full transition bg-gradient-to-b from-sky-400 to-cyan-300 active:from-sky-300 focus:from-cyan-400 sm:w-max">
                  <span class="block text-white  font-semibold lg:text-sm">
                    Join Today
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
