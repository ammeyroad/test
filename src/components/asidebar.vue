<script setup>
const game = [
  { href: '/baca', label: 'BACARAT', imga: '/src/assets/icon-blackjack.png', },
  { href: '/slot', label: 'SLOT', imga: '/src/assets/icon-slot.png', },
  { href: '/Spin', label: 'SPIN', imga: '/src/assets/icon-spin.png', },
  { href: '/Bingo', label: 'BINGO', imga: '/src/assets/icon-wd.png', },
]

const info = [
  {
    href: '/buy',
    label: 'Buy 7770C',
    imga: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" /></svg>',
  },
  {
    href: '/about',
    label: 'About 7770C',
    imga: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zM10.5 7.963a1.5 1.5 0 00-2.17-1.341l-.415.207a.75.75 0 00.67 1.342L9 7.963V9.75h-.75a.75.75 0 100 1.5H9v4.688c0 .563.26 1.198.867 1.525A4.501 4.501 0 0016.41 14.4c.199-.977-.636-1.649-1.415-1.649h-.745a.75.75 0 100 1.5h.656a3.002 3.002 0 01-4.327 1.893.113.113 0 01-.045-.051.336.336 0 01-.034-.154V11.25h5.25a.75.75 0 000-1.5H10.5V7.963z" clip-rule="evenodd" /></svg>',
  },
  {
    href: '/leaderboard',
    label: 'Leaderboard',
    imga: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" clip-rule="evenodd" /></svg>',
  },
  {
    href: '/sport',
    label: 'Sport Bet',
    imga: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" /></svg>',
  },

  {
    href: '/fairnes',
    label: 'Fairness ?',
    imga: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M12 2.25a.75.75 0 01.75.75v.756a49.106 49.106 0 019.152 1 .75.75 0 01-.152 1.485h-1.918l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 0118.75 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 01-.262 1.453h-8.37a.75.75 0 01-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 015.25 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84L4.168 6.241H2.25a.75.75 0 01-.152-1.485 49.105 49.105 0 019.152-1V3a.75.75 0 01.75-.75zm4.878 13.543l1.872-7.662 1.872 7.662h-3.744zm-9.756 0L5.25 8.131l-1.872 7.662h3.744z" clip-rule="evenodd" /></svg>',
  },

]
</script>

<template>
  <div
    class="shadow-xl shadow-black/50 sticky group top-0 z-20 grid h-screen w-16 content-between overflow-hidden bg-base-300  transition-all hover:w-64 ">
    <div>
      <ul>
        <li class="bg-base-300 p-2">
          <a href="/" class="focus:shadow-outline flex items-center space-x-6 rounded-md p-2 font-medium text-gray-700">
            <span class="rounded-xl p-1">
              <svg class="h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
                </path>
              </svg>
            </span>
            <span class="text-md">777 on Chain</span>
          </a>
        </li>
      </ul>

      <ul class="mt-5">
        <li class="hover:px-2 duration-300">
          <a href="#"
            class="focus:shadow-outline group flex items-center space-x-6 rounded-md p-2 font-medium text-accent  hover:bg-black/50 hover:opacity-100 hover:shadow-lg hover:shadow-black/50 focus:bg-secondary duration-300">
            <span class="btn btn-accent btn-square animate-pulse ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 01-.375.65 2.249 2.249 0 000 3.898.75.75 0 01.375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625v-3.026a.75.75 0 01.374-.65 2.249 2.249 0 000-3.898.75.75 0 01-.374-.65V6.375zm15-1.125a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-.75 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zM6 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H6.75A.75.75 0 016 12zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clip-rule="evenodd" />
</svg>

            </span>
            <span class="text-xl text-left font-bold">Lottery</span>
          </a>
        </li>
        <li class="hover:px-2 duration-300">
          <a href="#"
          class="focus:shadow-outline group flex items-center space-x-6 rounded-md p-2 font-medium text-accent  hover:bg-black/50 hover:opacity-100 hover:shadow-lg hover:shadow-black/50 focus:bg-secondary duration-300">
            <span class="btn btn-primary btn-square animate-pulse ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd"
                  d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                  clip-rule="evenodd" />
              </svg>

            </span>
            <span class="text-xl text-left font-bold text-primary">Prediction</span>
          </a>
        </li>
      </ul>

      <ul class="m-2 mt-5 rounded-xl bg-black/20 p-1 space-y-3 py-3 ">
        <li v-for="(item, i) in game" :key="i" class="flex ">
          <a :href="item.href"
            class="w-full focus:shadow-outline group flex items-center space-x-6 rounded-md p-2 font-medium text-gray-50 opacity-90 hover:bg-secondary hover:opacity-100 hover:shadow-lg hover:shadow-pink-700/50 focus:bg-black/2">
            <img :src="item.imga" class="w-8" alt="">
            <p class="text-normal font-bold">{{ item.label }} </p>
          </a>
        </li>
      
      </ul>

      <ul class="mt-5">
        <li v-for="(item, i) in info" :key="i" class="hover:px-2 duration-300">
          <a :href="item.href"
            class="focus:shadow-outline group flex items-center space-x-6 rounded-md font-medium px-2 p-1 text-gray-50 opacity-50 hover:bg-secondary hover:opacity-100 hover:shadow-lg hover:shadow-pink-700/50 focus:bg-secondary">
            <span class="btn btn-ghost group-hover:btn-active btn-square ">
              <a v-html="item.imga"></a>
            </span>
            
            <p class="text-normal font-bold">{{ item.label }} </p>
          </a>
        </li>
      </ul>
    </div>
    <ul class="mt-5 bg-black/50">
        <li class="">
          <a href="#"
            class="focus:shadow-outline group flex items-center space-x-6 rounded-md p-2 font-medium text-primary-content opacity-50 hover:bg-black/50 hover:opacity-100 hover:shadow-lg hover:shadow-pink-700/50 focus:bg-secondary">
            <span class="btn  btn-square  ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd"
                  d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                  clip-rule="evenodd" />
              </svg>

            </span>
            <span class="text-md text-left font-bold">Sign Out</span>
          </a>
        </li>
      </ul>
  </div>

</template>