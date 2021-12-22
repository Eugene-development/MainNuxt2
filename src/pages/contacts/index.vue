<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-white">

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
            <div class="text-4xl text-white">
              Контакты
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



    <!-- This example requires Tailwind CSS v2.0+ -->
    <!-- Be sure to use this with a layout container that is full-width on mobile -->
    <div class="-mt-24 pb-8 bg-gray-50 mx-16 overflow-hidden shadow sm:rounded-lg shadow-xl">
      <div class="px-4 py-4 sm:p-6">
        <iframe src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=201939254246" width="1024" height="500" frameborder="0" class="mx-auto "></iframe>
      </div>
    </div>

    <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-24 lg:px-8">




      <div class="divide-y-2 divide-gray-200">

        <div class="lg:grid lg:grid-cols-3 lg:gap-8">
          <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Нижний Новгород
          </h2>
          <div class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Офис
              </h3>
              <dl class="mt-2 text-base text-gray-500">
                <div>
                  <dt class="sr-only">
                    Email
                  </dt>
                  <dd>
                    support@example.com
                  </dd>
                </div>
                <div class="mt-1">
                  <dt class="sr-only">
                    Phone number
                  </dt>
                  <dd>
                    +1 (555) 123-4567
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Почта
              </h3>
              <dl class="mt-2 text-base text-gray-500">
                <div>
                  <dt class="sr-only">
                    Email
                  </dt>
                  <dd>
                    support@example.com
                  </dd>
                </div>
                <div class="mt-1">
                  <dt class="sr-only">
                    Phone number
                  </dt>
                  <dd>
                    +1 (555) 123-4567
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Телефон
              </h3>
              <dl class="mt-2 text-base text-gray-500">
                <div>
                  <dt class="sr-only">
                    Email
                  </dt>
                  <dd>
                    support@example.com
                  </dd>
                </div>
                <div class="mt-1">
                  <dt class="sr-only">
                    Phone number
                  </dt>
                  <dd>
                    +1 (555) 123-4567
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Менеджер
              </h3>
              <dl class="mt-2 text-base text-gray-500">
                <div>
                  <dt class="sr-only">
                    Email
                  </dt>
                  <dd>
                    support@example.com
                  </dd>
                </div>
                <div class="mt-1">
                  <dt class="sr-only">
                    Phone number
                  </dt>
                  <dd>
                    +1 (555) 123-4567
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div class="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
          <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Дзержинск
          </h2>
          <div class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Офис
              </h3>
              <div class="mt-2 text-base text-gray-500">
                <p>
                  4556 Brendan Ferry
                </p>
                <p class="mt-1">
                  Los Angeles, CA 90210
                </p>
              </div>
            </div>
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Почта
              </h3>
              <div class="mt-2 text-base text-gray-500">
                <p>
                  886 Walter Streets
                </p>
                <p class="mt-1">
                  New York, NY 12345
                </p>
              </div>
            </div>
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Телефон
              </h3>
              <div class="mt-2 text-base text-gray-500">
                <p>
                  7363 Cynthia Pass
                </p>
                <p class="mt-1">
                  Toronto, ON N3Y 4H8
                </p>
              </div>
            </div>
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Менеджер
              </h3>
              <div class="mt-2 text-base text-gray-500">
                <p>
                  726 Mavis Island
                </p>
                <p class="mt-1">
                  Chicago, IL 60601
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
          <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Кстово
          </h2>
          <div class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Офис
              </h3>
              <div class="mt-2 text-base text-gray-500">
                <p>
                  4556 Brendan Ferry
                </p>
                <p class="mt-1">
                  Los Angeles, CA 90210
                </p>
              </div>
            </div>
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Почта
              </h3>
              <div class="mt-2 text-base text-gray-500">
                <p>
                  886 Walter Streets
                </p>
                <p class="mt-1">
                  New York, NY 12345
                </p>
              </div>
            </div>
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Телефон
              </h3>
              <div class="mt-2 text-base text-gray-500">
                <p>
                  7363 Cynthia Pass
                </p>
                <p class="mt-1">
                  Toronto, ON N3Y 4H8
                </p>
              </div>
            </div>
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Менеджер
              </h3>
              <div class="mt-2 text-base text-gray-500">
                <p>
                  726 Mavis Island
                </p>
                <p class="mt-1">
                  Chicago, IL 60601
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
          <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Киров
          </h2>
          <div class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Офис
              </h3>
              <div class="mt-2 text-base text-gray-500">
                <p>
                  4556 Brendan Ferry
                </p>
                <p class="mt-1">
                  Los Angeles, CA 90210
                </p>
              </div>
            </div>
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Почта
              </h3>
              <div class="mt-2 text-base text-gray-500">
                <p>
                  886 Walter Streets
                </p>
                <p class="mt-1">
                  New York, NY 12345
                </p>
              </div>
            </div>
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Телефон
              </h3>
              <div class="mt-2 text-base text-gray-500">
                <p>
                  7363 Cynthia Pass
                </p>
                <p class="mt-1">
                  Toronto, ON N3Y 4H8
                </p>
              </div>
            </div>
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Менеджер
              </h3>
              <div class="mt-2 text-base text-gray-500">
                <p>
                  726 Mavis Island
                </p>
                <p class="mt-1">
                  Chicago, IL 60601
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
