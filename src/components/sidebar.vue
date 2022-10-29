<template>

  <div
    class="flex flex-col items-center w-18 h-full fixed top-0 overflow-hidden text-gray-400 bg-base-200 shadow-lg rounded z-50">
    <a class="flex items-center justify-center my-3" href="/beranda">
      <img src="src/assets/logo-6.png" class="w-14" alt="">
    </a>
    <div v-for="(item, i) in coin" :key="i" class="flex-col ">
      <a :href="item.href" class="btn btn-square btn-ghost m-1 text-white">
        <div v-html="item.icon"></div>
      </a>
    </div>
    
    <div class="bg-secondary rounded-lg border-2 border-base-300 m-1">
      <div v-for="(item, i) in game" :key="i" class="flex-col ">
        <a :href="item.href" class="btn btn-square bg-base-300/20 border-0 m-1 text-white">
          <div v-html="item.imga"></div>
        </a>
      </div>
    </div>

  
    <div v-for="(item, i) in halaman" :key="i" class="flex-col ">
      <a :href="item.href" class="btn btn-square btn-ghost m-1 text-white">
        <div v-html="item.icon"></div>
      </a>
    </div>

    <div class="flex flex-col items-center mt-2 border-t border-gray-700">
      <a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
        <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </a>
      <a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
        <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </a>
      <a class="relative flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
        href="#">
        <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
        <span class="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
      </a>
    </div>
    <a class="flex items-center justify-center w-16 h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
      href="/user">
      <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </a>
  </div>
</template>

<script setup>
const coin = [
  {
    href: '/lotre',
    label: 'Home',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 3a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5.5a2.5 2.5 0 1 0 0-5V4a1 1 0 0 1 1-1h18zm-1 2H4v2.968l.156.081a4.5 4.5 0 0 1 2.34 3.74L6.5 12a4.499 4.499 0 0 1-2.344 3.95L4 16.032V19h16v-2.969l-.156-.08a4.5 4.5 0 0 1-2.34-3.74L17.5 12c0-1.704.947-3.187 2.344-3.95L20 7.967V5zm-4 4v6H8V9h8z" fill="rgba(255,255,255,1)"/></svg>',
  },
  {
    href: '/user-refferral',
    label: 'referral',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M15 2a4 4 0 0 1 3.464 6.001L23 8v2h-2v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10H1V8l4.536.001A4 4 0 0 1 12 3.355 3.983 3.983 0 0 1 15 2zm-4 8H5v9h6v-9zm8 0h-6v9h6v-9zM9 4a2 2 0 0 0-.15 3.995L9 8h2V6a2 2 0 0 0-1.697-1.977l-.154-.018L9 4zm6 0a2 2 0 0 0-1.995 1.85L13 6v2h2a2 2 0 0 0 1.995-1.85L17 6a2 2 0 0 0-2-2z" fill="rgba(255,255,255,1)"/></svg>',
  },
]

const game = [
  { href: '/games-bacarat', label: 'BACARAT', imga: '<img src="/src/assets/icon-blackjack.png" class="w-8" alt="">', },
  { href: '/games-slot', label: 'SLOT', imga: '<img src="/src/assets/icon-slot.png" class="w-8" alt="">', },
  { href: '/games-spin', label: 'SPIN', imga: '<img src="/src/assets/icon-spin.png" class="w-8" alt="">', },
  { href: '/games-bingo', label: 'BINGO', imga: '<img src="/src/assets/icon-racing.png" class="w-8" alt="">', },
]

const halaman = [
  {
    href: '/aboutus',
    label: 'aboutus',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-4H8V8h3V6h2v2h1a2.5 2.5 0 0 1 2 4 2.5 2.5 0 0 1-2 4h-1v2h-2v-2zm-1-3v1h4a.5.5 0 1 0 0-1h-4zm0-3v1h4a.5.5 0 1 0 0-1h-4z" fill="rgba(255,255,255,1)"/></svg>',
  },
  {
    href: '/user-refferral',
    label: 'referral',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M15 2a4 4 0 0 1 3.464 6.001L23 8v2h-2v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10H1V8l4.536.001A4 4 0 0 1 12 3.355 3.983 3.983 0 0 1 15 2zm-4 8H5v9h6v-9zm8 0h-6v9h6v-9zM9 4a2 2 0 0 0-.15 3.995L9 8h2V6a2 2 0 0 0-1.697-1.977l-.154-.018L9 4zm6 0a2 2 0 0 0-1.995 1.85L13 6v2h2a2 2 0 0 0 1.995-1.85L17 6a2 2 0 0 0-2-2z" fill="rgba(255,255,255,1)"/></svg>',
  },
  {
    href: '/bonus-prediksi',
    label: 'referral',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M8 5h3v9H8v3H6v-3H3V5h3V2h2v3zM5 7v5h4V7H5zm13 3h3v9h-3v3h-2v-3h-3v-9h3V7h2v3zm-3 2v5h4v-5h-4z" fill="rgba(255,255,255,1)"/></svg>',
  },
  {
    href: '#',
    label: 'referral',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 13a4 4 0 1 1-4 4h-2a4 4 0 1 1-.535-2h3.07A3.998 3.998 0 0 1 17 13zM7 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM16 3a4 4 0 0 1 4 4v3h2v2H2v-2h2V7a4 4 0 0 1 4-4h8zm0 2H8c-1.054 0-2 .95-2 2v3h12V7c0-1.054-.95-2-2-2z" fill="rgba(255,255,255,1)"/></svg>',
  },
]
</script>
