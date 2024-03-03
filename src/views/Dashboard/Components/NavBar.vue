<template>
  <nav class="bg-white border-b shadow-md border-gray-200 sticky top-0 z-50">
    <div class="flex flex-wrap justify-between mx-auto p-4">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        class="text-black bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium noto-sans-500 rounded-full text-xl px-5 py-2.5 text-center inline-flex items-center border"
        type="button"
      >
        Igniculuss
        <svg
          class="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <!-- Dropdown menu -->
      <div
        id="dropdown"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
      >
        <ul
          class="py-2 text-sm text-black dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:text-black"
              >Dashboard</a
            >
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:text-black">Settings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:text-black">Earnings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:text-black">Sign out</a>
          </li>
        </ul>
      </div>

      <div class="justify-between flex w-1/6 items-center pr-12">
        <div>
          <Icon icon="solar:add-square-bold" class="w-6 h-6 text-[#c7c7c7]" />
        </div>
        <div class="relative">
          <Icon icon="clarity:notification-solid-badged" class="w-6 h-6 text-[#C7C7C7]"></Icon>
          <span
            class="animate-ping absolute w-2 h-2 top-0 left-4 inline-flex rounded-full bg-primary"
          ></span>
        </div>
        <div>
          <Icon icon="bi:calendar-fill" class="w-6 h-6 text-[#c7c7c7]" />
        </div>
        <div>
          <Icon icon="material-symbols:settings" class="w-6 h-6 text-[#c7c7c7]" />
        </div>
        <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="w-8 h-8 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              alt="user photo"
            />
          </button>
          <!-- Dropdown menu -->
          <div
            class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div class="px-4 py-3">
              <span class="block text-sm text-gray-900 dark:text-black">Bonnie Green</span>
              <span class="block text-sm text-gray-500 truncate dark:text-gray-400"
                >name@flowbite.com</span
              >
            </div>
            <ul class="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-black hover:bg-gray-100 dark:text-gray-200 dark:hover:text-black"
                  >Dashboard</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-black hover:bg-gray-100 dark:text-gray-200 dark:hover:text-black"
                  >Settings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-black hover:bg-gray-100 dark:text-gray-200 dark:hover:text-black"
                  >Earnings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-black hover:bg-gray-100 dark:text-gray-200 dark:hover:text-black"
                  >Sign out</a
                >
              </li>
            </ul>
          </div>

          <button
            data-collapse-toggle="navbar-user"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted } from 'vue'

import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite()
})
</script>
