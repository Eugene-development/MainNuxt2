<template>
  <!--
    This example requires Tailwind CSS v2.0+

    This example requires some changes to your config:

    ```
    // tailwind.config.js
    const colors = require('tailwindcss/colors')

    module.exports = {
      // ...
      theme: {
        extend: {
          colors: {
            sky: colors.sky,
            teal: colors.teal,
            cyan: colors.cyan,
            rose: colors.rose,
          },
        },
      },
      plugins: [
        // ...
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
      ],
    }
    ```
  -->
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-100">
    <body class="h-full">
    ```
  -->
  <div class="min-h-full">
    <div class="pb-24 bg-gradient-to-r from-sky-800 to-cyan-600">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="relative flex flex-wrap items-center justify-center lg:justify-between">
          <!-- Logo -->
          <div class="absolute left-0 py-5 flex-shrink-0 lg:static">

          </div>

          <!-- Right section on desktop -->
          <div class="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
<!--            <button type="button" class="flex-shrink-0 p-1 text-cyan-200 rounded-full hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white">-->
<!--              <span class="sr-only">View notifications</span>-->
<!--              &lt;!&ndash; Heroicon name: outline/bell &ndash;&gt;-->
<!--              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
<!--                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />-->
<!--              </svg>-->
<!--            </button>-->

            <!-- Profile dropdown -->
<!--            <div class="ml-4 relative flex-shrink-0">-->
<!--              <div>-->
<!--                <button type="button" class="bg-white rounded-full flex text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100" id="user-menu-button" aria-expanded="false" aria-haspopup="true">-->
<!--                  <span class="sr-only">Open user menu</span>-->
<!--                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">-->
<!--                </button>-->
<!--              </div>-->

<!--            </div>-->
          </div>

          <div class="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
            <div class="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
              <!-- Left nav -->
              <div class="hidden lg:block lg:col-span-2">
                <nav class="flex space-x-4">
                  <a href="#" class="text-white text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10" aria-current="page">
                    2018
                  </a>


                  <a href="#" class="text-cyan-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10">
                    2019
                  </a>

                  <a href="#" class="text-cyan-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10">
                    2020
                  </a>

                  <a href="#" class="text-cyan-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10">
                    2021
                  </a>
                </nav>
              </div>
              <div class="px-12 lg:px-0">
                <!-- Search -->
<!--                <div class="max-w-xs mx-auto w-full lg:max-w-md">-->
<!--                  <label for="search" class="sr-only">Search</label>-->
<!--                  <div class="relative text-white focus-within:text-gray-600">-->
<!--                    <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">-->
<!--                      &lt;!&ndash; Heroicon name: solid/search &ndash;&gt;-->
<!--                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">-->
<!--                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />-->
<!--                      </svg>-->
<!--                    </div>-->
<!--                    <input id="search" class="block w-full text-white bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 focus:text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Search" type="search" name="search">-->
<!--                  </div>-->
<!--                </div>-->
              </div>
            </div>
          </div>

          <!-- Menu button -->
          <div class="absolute right-0 flex-shrink-0 lg:hidden">
            <!-- Mobile menu button -->
            <button type="button" class="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-cyan-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <!--
                Heroicon name: outline/menu

                Menu open: "hidden", Menu closed: "block"
              -->
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <!--
                Heroicon name: outline/x

                Menu open: "block", Menu closed: "hidden"
              -->
              <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on mobile menu state. -->
      <div class="lg:hidden">
      </div>
    </div>
    <main class="-mt-24 pb-8">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 class="sr-only">Profile</h1>
        <!-- Main 3 column grid -->
        <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
          <!-- Left column -->
          <div class="grid grid-cols-1 gap-4 lg:col-span-2">
            <!-- Welcome panel -->
            <section aria-labelledby="profile-overview-title">
              <div class="rounded-lg bg-white overflow-hidden shadow">
                <h2 class="sr-only" id="profile-overview-title">Profile Overview</h2>
                <div class="bg-white p-6">
                  <div class="sm:flex sm:items-center sm:justify-between">
                    <div class="sm:flex sm:space-x-5">
                      <div class="flex-shrink-0">
                        <img class="mx-auto h-20 w-20 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                      </div>
                      <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                        <p class="text-sm font-medium text-gray-600">Добрый день, меня зовут</p>
                        <p class="text-xl font-bold text-gray-900 sm:text-2xl">Староверова Татьяна Александровна</p>
                        <p class="text-sm font-medium text-gray-600">я менеджер по работе с клиентами</p>
                      </div>
                    </div>
<!--                    <div class="mt-5 flex justify-center sm:mt-0">-->
<!--                      <a href="#" class="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">-->
<!--                        View profile-->
<!--                      </a>-->
<!--                    </div>-->
                  </div>
                </div>
                <div class="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                  <div class="px-6 py-5 text-sm font-medium text-center">
                    <span class="text-gray-900">12</span>
                    <span class="text-gray-600">отзывов в этом году</span>
                  </div>

                  <div class="px-6 py-5 text-sm font-medium text-center">
                    <span class="text-gray-900">44</span>
                    <span class="text-gray-600">за всё время</span>
                  </div>

                  <div class="px-6 py-5 text-sm font-medium text-center">
                    <span class="text-gray-900">41</span>
                    <span class="text-gray-600">положительных отзывов</span>
                  </div>
                </div>
              </div>
            </section>

            <!-- Actions panel -->
            <section aria-labelledby="quick-links-title">
              <div class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
                <h2 class="sr-only" id="quick-links-title">Quick links</h2>

                <div class="rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                  <div>
                  <span class="rounded-lg inline-flex p-3 bg-teal-50 text-teal-700 ring-4 ring-white">
                    <!-- Heroicon name: outline/clock -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  </div>
                  <div class="mt-8">
                    <h3 class="text-lg font-medium">
                      <a href="#" class="focus:outline-none">
                        <!-- Extend touch target to entire panel -->
                        <span class="absolute inset-0" aria-hidden="true"></span>
                        Отзывы за всё время
                      </a>
                    </h3>
                    <p class="mt-2 text-sm text-gray-500">
                      Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                    </p>
                  </div>
                  <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
                </div>

                <div class="sm:rounded-tr-lg relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                  <div>
                  <span class="rounded-lg inline-flex p-3 bg-purple-50 text-purple-700 ring-4 ring-white">
                    <!-- Heroicon name: outline/badge-check -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </span>
                  </div>
                  <div class="mt-8">
                    <h3 class="text-lg font-medium">
                      <a href="#" class="focus:outline-none">
                        <!-- Extend touch target to entire panel -->
                        <span class="absolute inset-0" aria-hidden="true"></span>
                        Честность
                      </a>
                    </h3>
                    <p class="mt-2 text-sm text-gray-500">
                      Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                    </p>
                  </div>
                  <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
                </div>

                <div class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                  <div>
                  <span class="rounded-lg inline-flex p-3 bg-sky-50 text-sky-700 ring-4 ring-white">
                    <!-- Heroicon name: outline/users -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  </div>
                  <div class="mt-8">
                    <h3 class="text-lg font-medium">
                      <a href="#" class="focus:outline-none">
                        <!-- Extend touch target to entire panel -->
                        <span class="absolute inset-0" aria-hidden="true"></span>
                        Лояльность
                      </a>
                    </h3>
                    <p class="mt-2 text-sm text-gray-500">
                      Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                    </p>
                  </div>
                  <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
                </div>

                <div class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                  <div>
                  <span class="rounded-lg inline-flex p-3 bg-yellow-50 text-yellow-700 ring-4 ring-white">
                    <!-- Heroicon name: outline/cash -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </span>
                  </div>
                  <div class="mt-8">
                    <h3 class="text-lg font-medium">
                      <a href="#" class="focus:outline-none">
                        <!-- Extend touch target to entire panel -->
                        <span class="absolute inset-0" aria-hidden="true"></span>
                        Открытость
                      </a>
                    </h3>
                    <p class="mt-2 text-sm text-gray-500">
                      Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                    </p>
                  </div>
                  <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
                </div>

                <div class="sm:rounded-bl-lg relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                  <div>
                  <span class="rounded-lg inline-flex p-3 bg-rose-50 text-rose-700 ring-4 ring-white">
                    <!-- Heroicon name: outline/receipt-refund -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                    </svg>
                  </span>
                  </div>
                  <div class="mt-8">
                    <h3 class="text-lg font-medium">
                      <a href="#" class="focus:outline-none">
                        <!-- Extend touch target to entire panel -->
                        <span class="absolute inset-0" aria-hidden="true"></span>
                        Обратная связь
                      </a>
                    </h3>
                    <p class="mt-2 text-sm text-gray-500">
                      Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                    </p>
                  </div>
                  <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
                </div>

                <div class="rounded-bl-lg rounded-br-lg sm:rounded-bl-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                  <div>
                  <span class="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                    <!-- Heroicon name: outline/academic-cap -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </span>
                  </div>
                  <div class="mt-8">
                    <h3 class="text-lg font-medium">
                      <a href="#" class="focus:outline-none">
                        <!-- Extend touch target to entire panel -->
                        <span class="absolute inset-0" aria-hidden="true"></span>
                        Экспертность
                      </a>
                    </h3>
                    <p class="mt-2 text-sm text-gray-500">
                      Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                    </p>
                  </div>
                  <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
                </div>
              </div>
            </section>
          </div>

          <!-- Right column -->
          <div class="grid grid-cols-1 gap-4">
            <!-- Announcements -->
            <section aria-labelledby="announcements-title">
              <div class="rounded-lg bg-white overflow-hidden shadow">
                <div class="p-6">
                  <h2 class="text-2xl font-medium text-gray-900" id="announcements-title">Отзывы за 2021 год:</h2>
                  <div class="flow-root mt-6">
                    <ul role="list" class="-my-5 divide-y divide-gray-200">
                      <li class="py-5">
                        <div class="relative focus-within:ring-2 focus-within:ring-cyan-500">
                          <h3 class="text-sm font-semibold text-gray-800">
                            <a href="#" class="hover:underline focus:outline-none">
                              <!-- Extend touch target to entire panel -->
                              <span class="absolute inset-0" aria-hidden="true"></span>
                              Office closed on July 2nd
                            </a>
                          </h3>
                          <p class="mt-1 text-sm text-gray-600 line-clamp-2">
                            Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.
                          </p>
                        </div>
                      </li>

                      <li class="py-5">
                        <div class="relative focus-within:ring-2 focus-within:ring-cyan-500">
                          <h3 class="text-sm font-semibold text-gray-800">
                            <a href="#" class="hover:underline focus:outline-none">
                              <!-- Extend touch target to entire panel -->
                              <span class="absolute inset-0" aria-hidden="true"></span>
                              New password policy
                            </a>
                          </h3>
                          <p class="mt-1 text-sm text-gray-600 line-clamp-2">
                            Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.
                          </p>
                        </div>
                      </li>

                      <li class="py-5">
                        <div class="relative focus-within:ring-2 focus-within:ring-cyan-500">
                          <h3 class="text-sm font-semibold text-gray-800">
                            <a href="#" class="hover:underline focus:outline-none">
                              <!-- Extend touch target to entire panel -->
                              <span class="absolute inset-0" aria-hidden="true"></span>
                              Office closed on July 2nd
                            </a>
                          </h3>
                          <p class="mt-1 text-sm text-gray-600 line-clamp-2">
                            Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="mt-6">
                    <a href="#" class="cursor-not-allowed w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      Смотреть все
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  </div>

</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>
