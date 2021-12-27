<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-white ">
    <div class="pb-24 bg-gradient-to-r from-sky-700 to-cyan-500">
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
            <!-- Left nav -->
            <div class="text-4xl text-white">
              Специалисты

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
      </div>

      <!-- Mobile menu, show/hide based on mobile menu state. -->
      <div class="lg:hidden">
      </div>
    </div>

      <div class="-mt-24 pb-8">
        <div class="bg-gray-50 shadow-xl my-12 rounded-lg max-w-7xl mx-auto  px-4 sm:px-6 lg:py-20 lg:px-8">
          <div class="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 class="text-3xl font-extrabold text-gray-900">
                Мастер отделочных работ
              </h2>
              <p class="mt-4 text-lg text-gray-500">Выполняет работы по Can’t find the answer you’re looking for? Reach out to our  team.</p>
            </div>
            <div class="mt-12 lg:mt-0 lg:col-span-2">
              <dl class="space-y-12">
                <div>
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Зайцев Алексей Петрович, 24 года
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </dd>
                </div>

                <!-- More questions... -->
              </dl>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 shadow-xl my-12 rounded-lg max-w-7xl mx-auto  px-4 sm:px-6 lg:py-20 lg:px-8">
          <div class="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 class="text-3xl font-extrabold text-gray-900">
                Мастер отделочных работ
              </h2>
              <p class="mt-4 text-lg text-gray-500">Выполняет работы по Can’t find the answer you’re looking for? Reach out to our  team.</p>
            </div>
            <div class="mt-12 lg:mt-0 lg:col-span-2">
              <dl class="space-y-12">
                <div>
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Зайцев Алексей Петрович, 24 года
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </dd>
                </div>

                <!-- More questions... -->
              </dl>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 shadow-xl my-12 rounded-lg max-w-7xl mx-auto  px-4 sm:px-6 lg:py-20 lg:px-8">
          <div class="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 class="text-3xl font-extrabold text-gray-900">
                Мастер отделочных работ
              </h2>
              <p class="mt-4 text-lg text-gray-500">Выполняет работы по Can’t find the answer you’re looking for? Reach out to our  team.</p>
            </div>
            <div class="mt-12 lg:mt-0 lg:col-span-2">
              <dl class="space-y-12">
                <div>
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Зайцев Алексей Петрович, 24 года
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </dd>
                </div>

                <!-- More questions... -->
              </dl>
            </div>
          </div>
        </div>
      </div>
  </div>

</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>
