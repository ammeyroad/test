<script setup>

import BonusLotre from '../components/bonus-lotre.vue';
import games from '../components/sub-game.vue';


</script>

<template>
  <div class="min-h-screen">
    <div class="max-w-screen-xl mx-auto">
      <div class="grid grid-cols-3 space-x-8">
        <div class="md:col-span-2 col-span-3">
          <div id="slot" class="max-w-screen-xl mx-auto">
            <!-- atas -->
            <div class="flex-col mx-auto">
              <div class="flex justify-between mb-4 items-center">
                <div class="flex">
                  <h3 class="text-3xl text-primary-content">GAME<span class="font-black"> BACARAT</span></h3>
                </div>
                <div class="flex space-x-2">
                  <button class="btn  btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clip-rule="evenodd" />
                    </svg>
                  </button>
                  <button class="btn  btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path
                        d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                      <path
                        d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                    </svg>

                  </button>
                  <button class="btn  btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path fill-rule="evenodd"
                        d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5p.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z"
                        clip-rule="evenodd" />
                    </svg>

                  </button>
                </div>
              </div>
              <!-- mulai -->
              <div id="kontenya">
                <div class="p-2 bg-base-300 rounded-t-2xl">
                  <div
                    class="relative bg-[url('/src/assets/bg-1.png')] bg-blend-color-dodge bg-base-300 bg-cover bg-center hover:bg-bottom bg-no-repeat duration-300 rounded-2xl">
                    <div class=" py-60 text-center z-30 ">

                      <h3 class="text-2xl font-bold text-white">Play, Invest,Exchange and <br> Join the Contest</h3>
                      <button class="btn btn-primary my-8 mt-24">LOGIN NOW</button>
                    </div>

                    <div class="absolute inset-0 ">
                      <img src="/src/assets/g-bacarat-05.png"
                        class="object-cover right-0 w-full  absolute top-0 animate-getar z-20"
                      alt="pesawat">
                      <img src="/src/assets/g-bacarat-07.png"
                        class="object-cover right-0 w-full h-full opacity-10  absolute top-0 animate-pulse z-20"
                        style="mix-blend-mode: lighten;" alt="pesawat">
                      <img src="/src/assets/g-bacarat-06.png"
                        class="object-cover right-0 w-full  absolute top-0 animate-geser z-20"
                       alt="pesawat">

                    </div>
                  </div>
                </div>
                <div class=" p-2 bg-base-300 rounded-b-2xl">
                  <div
                    class="grid grid-cols-4 gap-4 p-4 items-end bg-base-300 rounded-xl duration-300 shadow-lg">
                    <div class="col-span-2">
                      <p class="text-xs mb-1">Bet Amount</p>
                      <div class="flex items-center bg-slate-700  p-2 rounded-xl h-16 justify-between">
                        <div class="btn-group btn-group-vertical">
                          <button class="btn btn-xs font-thin">max</button>
                          <button class="btn btn-xs font-thin">min</button>
                        </div>
                        <div class="flex items-center px-2">
                          <img src="/src/assets/logo-6.png" class="w-10 h-10 relative  ml-5" alt="">
                          <input type="text"
                            class="input w-[100%] text-xl bg-transparent text-center text-white font-bold"
                            placeholder="123">
                        </div>
                        <div class="btn-group btn-group-vertical">
                          <button class="btn btn-xs font-sans">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                              class="w-6 h-6">
                              <path fill-rule="evenodd"
                                d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z"
                                clip-rule="evenodd" />
                            </svg>

                          </button>
                          <button class="btn btn-xs font-sans"><svg xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                              <path fill-rule="evenodd"
                                d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                                clip-rule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="col-span-2">

                      <button class="btn btn-block btn-warning items-center text-center p-2 rounded-xl h-16">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                          class="w-6 h-6 mr-2">
                          <path fill-rule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                            clip-rule="evenodd" />
                        </svg>
                        START GAME
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <BonusLotre />
        </div>
      </div>
    </div>
    <div class="max-w-screen-xl mx-auto">
      <games />
    </div>

  </div>
</template>
