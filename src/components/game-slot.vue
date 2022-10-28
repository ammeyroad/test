<script setup>

</script>

<template>
  <div class=" max-w-screen-xl mx-auto">
    <div class="grid grid-cols-3">
      <div class="md:col-span-2 col-span-3">
        <div id="slot" class="max-w-screen-xl mx-auto">
          <!-- mulai -->
          <div class="flex-col  max-w-screen-lg mx-auto p-4">
            <div class="flex justify-between mb-4">
              <div class="flex">
                <button class="btn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2">
                    <path fill-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                      clip-rule="evenodd" />
                  </svg>
                  SLOT GAME
                </button>
              </div>
              <div class="flex space-x-2">
                <button class="btn btn-square">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clip-rule="evenodd" />
                  </svg>
                </button>
                <button class="btn btn-square">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path
                      d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                    <path
                      d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                  </svg>

                </button>
                <button class="btn btn-square">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd"
                      d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5p.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z"
                      clip-rule="evenodd" />
                  </svg>

                </button>
              </div>
            </div>
            <div
              class="relative bg-[url('/src/assets/g-slot-04.png')] bg-cover bg-center bg-blend-screen border-4 hover:border-b-8 border-slate-800 hover:shadow-xl duration-300 h-full rounded-t-xl  p-3"
              style=" background-color:#0e1824;">
              <img src="src/assets/g-slot-13.png" alt=""
                class="animate-pulse absolute w-[100%] h-[80%] opacity-20 bg-whcite/50 right-0  z-10">
              <img src="src/assets/g-slot-11.png" alt="" class=" absolute  bg-whcite/50 left-0 bottom-0 ">
              <img src="src/assets/g-slot-12.png" alt="" class="animate-bounce absolute bg-whcite/50 right-0  z-10">
              <div class="">
                <img src="/src/assets/g-bg-all.png" alt="" class=" w-[100%] mx-auto ">
              </div>
            </div>
            <div class="grid grid-cols-4 gap-4 p-5 items-end bg-base-300 rounded-b-xl relative duration-300 shadow-lg">
              <div class="col-span-2">
                <p class="text-xs mb-1">Line</p>
                <div class="flex items-center bg-slate-700  p-2 rounded-xl h-16">
                  <div class="btn-group btn-group-vertical">
                    <button class="btn btn-square font-sans">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd"
                          d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z"
                          clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <div class="flex items-center px-2">
                    <input type="text" class="input w-[100%] input-sm bg-transparent text-center text-white font-bold"
                      placeholder="12">
                  </div>
                  <div class="btn-group btn-group-vertical">

                    <button class="btn btn-square font-sans"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd"
                          d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                          clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-span-2">
                <p class="text-xs mb-1">Bet Amount</p>
                <div class="flex items-center bg-slate-700  p-2 rounded-xl h-16 justify-between">
                  <div class="btn-group btn-group-vertical">
                    <button class="btn btn-xs font-thin">max</button>
                    <button class="btn btn-xs font-thin">min</button>
                  </div>
                  <div class="flex items-center px-2">

                    <input type="text" class="input w-[100%] bg-transparent text-center text-white font-bold"
                      placeholder="12323123">
                  </div>
                  <div class="btn-group btn-group-vertical">
                    <button class="btn btn-xs font-sans">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd"
                          d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z"
                          clip-rule="evenodd" />
                      </svg>

                    </button>
                    <button class="btn btn-xs font-sans"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd"
                          d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                          clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-span-2">
                <p class="text-xs mb-1">Total</p>
                <div class="flex items-center bg-slate-700  p-2 rounded-xl h-16">
                  <div class="flex items-center px-2">
                    <input type="text" class="input w-[100%] text-xl   bg-transparent text-center text-white font-bold"
                      placeholder="12">
                  </div>
                </div>
              </div>

              <div class="col-span-2">

                <button class="btn btn-block btn-warning items-center text-center p-2 rounded-xl h-16">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24 " fill="currentColor" class="w-6 h-6 mr-3">
                    <path fill-rule="evenodd"
                      d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 011.5 10.875v-3.75zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875v-8.25zM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 013 18.375v-2.25z"
                      clip-rule="evenodd" />
                  </svg>
                  SLOT GAME
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>
