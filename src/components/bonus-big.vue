<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="flex-row items-stretch rounded-2xl md:space-x-0 md:space-y-0 p-3 mb-10 md:p-5">
      <div
        class="grid group overflow-hidden relative bg-secondary hover:bg-warning bg-blend-overlay duration-300 sm:h-[350px] hero rounded-xl bg-[url('/src/assets/bg-1.png')] bg-cover bg-no-repeat hover:bg-top bg-center ">
        <img src="/src/assets/ele-7.png" class="w-[90%]  absolute animate-spin-slow" alt="">
        <img src="/src/assets/ele-2.png" class="w-full z-10 absolute animate-getar " alt="">
        <div class="w-full text-primary-content text-center z-10 mt-10 mb-20">
          <div class="mb-3 group-hover:scale-110 duration-300 group-hover:mb-5">
            <p class="uppercase bg-base-300 w-max mx-auto px-8 pt-2 rounded-t-xl textarea-secondary">Lottery
              Jackpot
            </p>
            <div class="bg-base-200 w-max px-8 py-4 rounded-xl border-8 border-base-300 mx-auto ">
              <p class="uppercase sm:text-5xl text-2xl font-black text-secondary">$ 213.322 </p>
              <progress class="progress progress-secondary w-56 bg-white" value="60" max="100"></progress>
            </div>
          </div>
          <div class="flex flex-wrap w-max space-x-4 mx-auto ">
            <div class="bg-primary-content/50 text-base-100 bg-blur-md w-max sm:p-3 p-1 rounded-lg mx-auto">
              <p class="text-sm">ticket left</p>
              <p class="sm:text-xl text-lg font-black"> 90</p>
            </div>
            <div class="bg-primary-content/50 text-base-100 bg-blur-md w-max sm:p-3 p-1 rounded-lg mx-auto">
              <p class="text-sm">start at </p>
              <p class="sm:text-xl text-lg font-black"> 07 : 41 : 24</p>
            </div>
            <div class="bg-primary-content/50 text-base-100 bg-blur-md w-max sm:p-3 p-1 rounded-lg mx-auto">
              <p class="text-sm">ticket price</p>
              <p class="sm:text-xl text-lg font-black"> 10</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>


<script>

</script>