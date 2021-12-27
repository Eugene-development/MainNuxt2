<template>
  <div>

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
              Галерея работ
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

    <div class="-mt-24 pb-8">
      <div class="relative">
        <div
          class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <img class="h-48 w-full object-cover"
                   src="/image/loft.jpg"
                   alt="loft"
              >
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <h3 class="text-sm font-medium text-cyan-600">
                    Стиль Лофт
                </h3>
                <div class="block mt-2">
                  <p class="text-base font-semibold text-gray-900">
                    ул. Украинская - 48 кв/м
                  </p>
                  <p class="mt-3 text-base text-gray-500">
                    Однокомнатную квартиру застройщик сдал без какой-либо отделки.
                    Наша компания разработала и согласовала дизайн-проект будущей квартиры с планировавочным решением и функциональным дизайном в стиле LOFT.
                    Сохранив обособленным спальное место, нам удалось расширить жизненное пространство для молодой семьи.
                  </p>
                </div>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a href="#">
                    <img class="h-10 w-10 rounded-full"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt="Roel Aufderehar">
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">
                    <a href="#" class="hover:underline">
                      Александр Ф.
                    </a>
                  </p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <!--                          <time datetime="2020-03-16">-->
                    <!--                            16 марта 2020-->
                    <!--                          </time>-->
                    <p>
                      "Мы с женой даже не ожидали, что получится так красиво и стильно."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <img class="h-48 w-full object-cover"
                   src="/image/sovr.jpg"
                   alt="modern">
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <h3 class="text-sm font-medium text-cyan-600">
                  Современный стиль
                </h3>
                <div class="block mt-2">
                  <p class="text-base font-semibold text-gray-900">
                    ул. Космонавта Комарова - 62 кв/м
                  </p>
                  <p class="mt-3 text-base text-gray-500">
                    Проект обновления квартиры в кирпичной пятиэтажки застройки конца 70-х годов. Материалы
                    подобранные к проекту создали лёгкое и светлое настроение от пребывания в этой квартире. Все
                    пожелания заказчика были учтены и реализованы в полной мере, есть даже рабочая зона. </p>
                </div>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a href="#">
                    <img class="h-10 w-10 rounded-full"
                         src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt="Brenna Goyette">
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">
                    <a href="#" class="hover:underline">
                      Светлана
                    </a>
                  </p>
                  <div class="space-x-1 text-sm text-gray-500">
                    <!--                          <time datetime="2020-03-10">-->
                    <!--                            24 января 2021-->
                    <!--                          </time>-->
                    <p>
                      "Всё устроило более чем. По срокам всё соблюдено на отлично!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <img class="h-48 w-full object-cover" src="/image/classic.jpg" alt="">
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <h3 class="text-sm font-medium text-cyan-600">
                  Классический стиль
                </h3>
                <div class="block mt-2">
                  <p class="text-base font-semibold text-gray-900">
                    ул. Республиканская - 102 м/кв
                  </p>
                  <p class="mt-3 text-base text-gray-500">
                    Ремонт новой трёхкомнатной квартиры в новом жилом комплексе был начат сразу после сдачи
                    застройщиком дома в эксплуатацию. Дизайнер нашёл оптимальное решение в классических спокойных
                    и светлых тонах. Прекрасным решением было поставить двери типа "купэ" чтобы разграничить кухню
                    с большой гостиной комнатой. </p>
                </div>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a href="#">
                    <img class="h-10 w-10 rounded-full"
                         src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt="Daniela Metz">
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">
                    <a href="#" class="hover:underline">
                      Кристина
                    </a>
                  </p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <!--                          <time datetime="2020-02-12">-->
                    <!--                            Feb 12, 2020-->
                    <!--                          </time>-->
                    <p>
                      "Получилось чисто, как я хотела, спасибо "Гостремонт", что всё учли."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-12 pb-8">
      <div class="relative">
        <div
          class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <img class="h-48 w-full object-cover"
                   src="/image/loft.jpg"
                   alt="loft"
              >
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <h3 class="text-sm font-medium text-cyan-600">
                    Стиль Лофт
                </h3>
                <div class="block mt-2">
                  <p class="text-base font-semibold text-gray-900">
                    ул. Украинская - 48 кв/м
                  </p>
                  <p class="mt-3 text-base text-gray-500">
                    Однокомнатную квартиру застройщик сдал без какой-либо отделки.
                    Наша компания разработала и согласовала дизайн-проект будущей квартиры с планировавочным решением и функциональным дизайном в стиле LOFT.
                    Сохранив обособленным спальное место, нам удалось расширить жизненное пространство для молодой семьи.
                  </p>
                </div>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a href="#">
                    <img class="h-10 w-10 rounded-full"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt="Roel Aufderehar">
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">
                    <a href="#" class="hover:underline">
                      Александр Ф.
                    </a>
                  </p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <!--                          <time datetime="2020-03-16">-->
                    <!--                            16 марта 2020-->
                    <!--                          </time>-->
                    <p>
                      "Мы с женой даже не ожидали, что получится так красиво и стильно."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <img class="h-48 w-full object-cover"
                   src="/image/sovr.jpg"
                   alt="modern">
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <h3 class="text-sm font-medium text-cyan-600">
                  Современный стиль
                </h3>
                <div class="block mt-2">
                  <p class="text-base font-semibold text-gray-900">
                    ул. Космонавта Комарова - 62 кв/м
                  </p>
                  <p class="mt-3 text-base text-gray-500">
                    Проект обновления квартиры в кирпичной пятиэтажки застройки конца 70-х годов. Материалы
                    подобранные к проекту создали лёгкое и светлое настроение от пребывания в этой квартире. Все
                    пожелания заказчика были учтены и реализованы в полной мере, есть даже рабочая зона. </p>
                </div>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a href="#">
                    <img class="h-10 w-10 rounded-full"
                         src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt="Brenna Goyette">
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">
                    <a href="#" class="hover:underline">
                      Светлана
                    </a>
                  </p>
                  <div class="space-x-1 text-sm text-gray-500">
                    <!--                          <time datetime="2020-03-10">-->
                    <!--                            24 января 2021-->
                    <!--                          </time>-->
                    <p>
                      "Всё устроило более чем. По срокам всё соблюдено на отлично!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <img class="h-48 w-full object-cover" src="/image/classic.jpg" alt="">
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <h3 class="text-sm font-medium text-cyan-600">
                  Классический стиль
                </h3>
                <div class="block mt-2">
                  <p class="text-base font-semibold text-gray-900">
                    ул. Республиканская - 102 м/кв
                  </p>
                  <p class="mt-3 text-base text-gray-500">
                    Ремонт новой трёхкомнатной квартиры в новом жилом комплексе был начат сразу после сдачи
                    застройщиком дома в эксплуатацию. Дизайнер нашёл оптимальное решение в классических спокойных
                    и светлых тонах. Прекрасным решением было поставить двери типа "купэ" чтобы разграничить кухню
                    с большой гостиной комнатой. </p>
                </div>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a href="#">
                    <img class="h-10 w-10 rounded-full"
                         src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt="Daniela Metz">
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">
                    <a href="#" class="hover:underline">
                      Кристина
                    </a>
                  </p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <!--                          <time datetime="2020-02-12">-->
                    <!--                            Feb 12, 2020-->
                    <!--                          </time>-->
                    <p>
                      "Получилось чисто, как я хотела, спасибо "Гостремонт", что всё учли."
                    </p>
                  </div>
                </div>
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
