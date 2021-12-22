<template>
  <div>
    <div>
      <header class="relative">
        <div class="bg-gray-900 p-4">
          <nav class="relative max-w-full mx-8 flex items-center justify-between px-1 sm:px-2" aria-label="Global">
            <div class="flex items-center flex-1">
              <div class="flex items-center justify-between w-full md:w-auto">
                <NuxtLink to="/">
                  <span class="sr-only">Workflow</span>
                  <img class="h-6 w-auto sm:h-10"
                       src="/Logo/logo1.svg" alt="">
                </NuxtLink>
                <div class="-mr-2 flex items-center md:hidden">
                  <button type="button"
                          class="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                          aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <!-- Heroicon name: outline/menu -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="hidden space-x-8 md:flex md:ml-10">
                <NuxtLink to="services" class="text-base font-medium text-white hover:text-gray-300">Услуги</NuxtLink>
                <NuxtLink to="about" class="text-center font-medium text-white hover:text-gray-300">Компания</NuxtLink>
                <NuxtLink to="gallery" class="text-base font-medium text-white hover:text-gray-300">Галерея</NuxtLink>
                <NuxtLink to="testimonials" class="text-base font-medium text-white hover:text-gray-300">Отзывы</NuxtLink>
                <NuxtLink to="specialists" class="text-base font-medium text-white hover:text-gray-300">Специалисты</NuxtLink>
<!--                <NuxtLink to="blog" class="text-base font-medium text-white hover:text-gray-300">Блог</NuxtLink>-->
                <NuxtLink to="contacts" class="text-base font-medium text-white hover:text-gray-300">Контакты</NuxtLink>
              </div>
            </div>
            <div class="hidden md:flex md:items-center md:space-x-6">
              <p class="text-xl font-medium text-white hover:text-gray-300">
                +7 (831) 423-23-89
              </p>
                <button @click="changeVisibleFormMeasurement" type="button"
                        class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-green-600 to-cyan-700">
                  Получить консультацию
                </button>
            </div>
          </nav>
        </div>

        <!--
          Mobile menu, show/hide based on menu open state.

          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
        <!--        <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">-->
        <!--          <div class="rounded-lg shadow-md  ring-1 ring-black ring-opacity-5 overflow-hidden">-->
        <!--            <div class="px-5 pt-4 flex items-center justify-between">-->
        <!--              <div>-->
        <!--                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-green-500-cyan-600.svg"-->
        <!--                     alt="">-->
        <!--              </div>-->
        <!--              <div class="-mr-2">-->
        <!--                <button type="button"-->
        <!--                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">-->
        <!--                  <span class="sr-only">Close menu</span>-->
        <!--                  &lt;!&ndash; Heroicon name: outline/x &ndash;&gt;-->
        <!--                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"-->
        <!--                       stroke="currentColor" aria-hidden="true">-->
        <!--                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>-->
        <!--                  </svg>-->
        <!--                </button>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--            <div class="pt-5 pb-6">-->
        <!--              <div class="px-2 space-y-1">-->
        <!--                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Product</a>-->

        <!--                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Features</a>-->

        <!--                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Marketplace</a>-->

        <!--                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Company</a>-->
        <!--              </div>-->
        <!--              <div class="mt-6 px-5">-->
        <!--                <a href="#"-->
        <!--                   class="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-green-500 to-cyan-600 text-white font-medium hover:from-green-600 hover:to-cyan-700">Start-->
        <!--                  free trial</a>-->
        <!--              </div>-->
        <!--              <div class="mt-6 px-5">-->
        <!--                <p class="text-center text-base font-medium text-gray-500">Existing customer? <a href="#" class="text-gray-900 hover:underline">Login</a>-->
        <!--                </p>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
      </header>




      <transition
        enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
        enter-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
        leave-class="translate-x-0"
        leave-to-class="translate-x-full"
      >

        <div v-if="visibleFormMeasurement" class="z-40 fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title"
             role="dialog" aria-modal="true">
          <div class="absolute inset-0 overflow-hidden">
            <!-- Background overlay, show/hide based on slide-over state. -->
            <div class="absolute inset-0" aria-hidden="true">
              <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
                <!--
                  Slide-over panel, show/hide based on slide-over state.

                  Entering: "transform transition ease-in-out duration-500 sm:duration-700"
                    From: "translate-x-full"
                    To: "translate-x-0"
                  Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
                    From: "translate-x-0"
                    To: "translate-x-full"
                -->


                <div class="w-screen max-w-2xl">
                  <form @submit.prevent="sendMeasurement"
                        class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                    <div class="flex-1">
                      <!-- Header -->
                      <div class="px-4 py-6 bg-gray-50 sm:px-6">
                        <div class="flex items-start justify-between space-x-3">
                          <div class="space-y-1">
                            <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
                              Заявка на бесплатную косультацию
                            </h2>
                            <p class="text-sm text-gray-500">
                              Наш специалист свяжется с вами для обсуждения деталей в удобное для вас время. Услуга бесплатная!
                            </p>
                          </div>
                          <div class="h-7 flex items-center">
                            <button @click="changeVisibleFormMeasurement" type="button"
                                    class="text-gray-400 hover:text-gray-500">
                              <span class="sr-only">Close panel</span>
                              <!-- Heroicon name: outline/x -->
                              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                   stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div class="relative h-40 sm:h-56 m-3">
                        <img class="absolute h-full w-full object-cover" src="/image/zamer.jpg" alt="">
                      </div>

                      <!-- Divider container -->
                      <div class="py-6 space-y-6 sm:py-0 sm:space-y-0 sm:divide-y sm:divide-gray-200">
                        <!-- Project name -->
                        <div class="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                          <div>
                            <label for="name" class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2">
                              Ваше имя
                            </label>
                          </div>
                          <div class="sm:col-span-2">
                            <input
                              :value="ruleMeasurementName.name"
                              @input="updateMeasurementName"
                              type="text"
                              name="project-name"
                              id="name"
                              class="block w-full shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md">
                          </div>
                        </div>
                        <!-- Project name -->
                        <div class="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                          <div>
                            <label for="address" class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2">
                              Адрес объекта
                            </label>
                          </div>
                          <div class="sm:col-span-2">
                            <input
                              :value="ruleMeasurementAddress.address"
                              @input="updateMeasurementAddress"
                              type="text"
                              name="project-name"
                              id="address"
                              class="block w-full shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md">
                          </div>
                        </div>
                        <!-- Project name -->
                        <div class="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                          <div>
                            <label for="client-phone"
                                   class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2">
                              Контактный телефон
                            </label>
                          </div>
                          <div class="sm:col-span-2">
                            <input
                              :value="ruleMeasurementPhone.phone"
                              @input="updateMeasurementPhone"
                              type="text"
                              name="project-name"
                              id="client-phone"
                              class="block w-full shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md">
                          </div>
                        </div>
                        <!-- Project name -->
                        <div class="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                          <div>
                            <label for="time" class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2">
                              Удобное время
                            </label>
                          </div>
                          <div class="sm:col-span-2">
                            <input
                              :value="ruleMeasurementTime.time"
                              @input="updateMeasurementTime"
                              type="text"
                              name="project-name"
                              id="time"
                              class="block w-full shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md">
                          </div>
                        </div>

                        <!-- Project description -->
                        <div class="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                          <div>
                            <label for="project-description"
                                   class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2">
                              Ваш вопрос
                            </label>
                          </div>
                          <div class="sm:col-span-2">
                              <textarea
                                :value="ruleMeasurementComment.comment"
                                @input="updateMeasurementComment"
                                id="project-description"
                                name="project-description"
                                rows="3"
                                class="block w-full shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500 border border-gray-300 rounded-md">
                              </textarea>
                          </div>
                        </div>


                        <!-- Privacy -->
                        <fieldset>
                          <div
                            class="space-y-2 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:px-6 sm:py-5">
                            <div class="space-y-5 sm:col-span-2">
                              <!--                        <div class="space-y-5 sm:mt-0">-->
                              <!--                          <div class="relative flex items-start">-->
                              <!--                            <div class="absolute flex items-center h-5">-->
                              <!--                              <input id="public-access" name="privacy" aria-describedby="public-access-description" type="radio" class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300" checked>-->
                              <!--                            </div>-->
                              <!--                            <div class="pl-7 text-sm">-->
                              <!--                              <label for="public-access" class="font-medium text-gray-900">-->
                              <!--                                Public access-->
                              <!--                              </label>-->
                              <!--                              <p id="public-access-description" class="text-gray-500">-->
                              <!--                                Everyone with the link will see this project-->
                              <!--                              </p>-->
                              <!--                            </div>-->
                              <!--                          </div>-->
                              <!--                          <div class="relative flex items-start">-->
                              <!--                            <div class="absolute flex items-center h-5">-->
                              <!--                              <input id="restricted-access" name="privacy" aria-describedby="restricted-access-description" type="radio" class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300">-->
                              <!--                            </div>-->
                              <!--                            <div class="pl-7 text-sm">-->
                              <!--                              <label for="restricted-access" class="font-medium text-gray-900">-->
                              <!--                                Private to Project Members-->
                              <!--                              </label>-->
                              <!--                              <p id="restricted-access-description" class="text-gray-500">-->
                              <!--                                Only members of this project would be able to access-->
                              <!--                              </p>-->
                              <!--                            </div>-->
                              <!--                          </div>-->
                              <!--                          <div class="relative flex items-start">-->
                              <!--                            <div class="absolute flex items-center h-5">-->
                              <!--                              <input id="private-access" name="privacy" aria-describedby="private-access-description" type="radio" class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300">-->
                              <!--                            </div>-->
                              <!--                            <div class="pl-7 text-sm">-->
                              <!--                              <label for="private-access" class="font-medium text-gray-900">-->
                              <!--                                Private to you-->
                              <!--                              </label>-->
                              <!--                              <p id="private-access-description" class="text-gray-500">-->
                              <!--                                You are the only one able to access this project-->
                              <!--                              </p>-->
                              <!--                            </div>-->
                              <!--                          </div>-->
                              <!--                        </div>-->
                              <!--                        <hr class="border-gray-200">-->


                              <!--                        <div class="flex flex-col space-between space-y-4 sm:flex-row sm:items-center sm:space-between sm:space-y-0">-->
                              <!--                          <div class="flex-1">-->
                              <!--                            <a href="#" class="group flex items-center text-sm text-green-600 hover:text-green-900 font-medium space-x-2.5">-->
                              <!--                              &lt;!&ndash; Heroicon name: solid/link &ndash;&gt;-->
                              <!--                              <svg class="h-5 w-5 text-green-500 group-hover:text-green-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">-->
                              <!--                                <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />-->
                              <!--                              </svg>-->
                              <!--                              <span>-->
                              <!--                              Загрузить файл-->
                              <!--                            </span>-->
                              <!--                            </a>-->
                              <!--                          </div>-->
                              <!--                          <div>-->
                              <!--                            <a href="#" class="group flex items-center text-sm text-gray-500 hover:text-gray-900 space-x-2.5">-->
                              <!--                              &lt;!&ndash; Heroicon name: solid/question-mark-circle &ndash;&gt;-->
                              <!--                              <svg class="h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">-->
                              <!--                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />-->
                              <!--                              </svg>-->
                              <!--                              <span>-->
                              <!--                              Условия проведения замера-->
                              <!--                            </span>-->
                              <!--                            </a>-->
                              <!--                          </div>-->
                              <!--                        </div>-->
                            </div>
                          </div>
                        </fieldset>
                      </div>
                    </div>

                    <!-- Action buttons -->
                    <div class="flex-shrink-0 px-4 border-t border-gray-200 py-5 sm:px-6">
                      <div class="space-x-3 flex justify-end">
                        <button @click="changeVisibleFormMeasurement" type="button"
                                class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                          Отменить
                        </button>
                        <button type="submit"
                                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-green-600 to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                          Отправить
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>



    </div>
    <MobileMenu/>
  </div>
</template>

<script>
import Actions from "~/mixins/mapping/actions"
import Getters from "~/mixins/mapping/getters"
import MobileMenu from './mobileMenu'

export default {
  name: "index",
  mixins: [Actions, Getters],
  components: {
    MobileMenu
  },
  //
}
</script>
