<template>
	<main>
		<div class="navbar bg-base-200 px-8 py-4 shadow">
			<div class="flex-1">
				<label for="my-drawer" class="btn btn-square btn-ghost swap swap-rotate">
					<input type="checkbox" />
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
						stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
					</svg>
				</label>
				<a href="/" class="normal-case text-xl font-bold mx-4">777 on Chain</a>
				<div class="btn-group p-1 bg-base-200 rounded-full">
					<button class=" btn-secondary btn-sm rounded-full">casino</button>
					<button class="rounded-full btn-ghost btn-sm">sport</button>
				</div>
				<BackBtn />
			</div>
			<div class="flex-none gap-2">
				<div class="dropdown dropdown-end dropdown-hover">
					<label tabindex="0" class="btn btn-outline btn-secondary bg-base-200 border-0 ">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2">
							<path fill-rule="evenodd"
								d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 7.5A.75.75 0 009 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 009 12h3.622a2.251 2.251 0 01-2.122 1.5H9a.75.75 0 00-.53 1.28l3 3a.75.75 0 101.06-1.06L10.8 14.988A3.752 3.752 0 0014.175 12H15a.75.75 0 000-1.5h-.825A3.733 3.733 0 0013.5 9H15a.75.75 0 000-1.5H9z"
								clip-rule="evenodd" />
						</svg>
						2.000.000</label>
					<ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-xl w-52">
						<li v-for="(item, i) in coin" :key="i" class="flex">
							<a :href="item.href" class="">
								<i :class="item.icon"></i>
								{{ item.label }}
							</a>
						</li>
					</ul>
				</div>
				<div class="dropdown dropdown-end dropdown-hover">
					<label tabindex="0" class="btn btn-secondary">
						AMMEYROAD</label>
					<ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
						<li v-for="(item, i) in user" :key="i" class="flex">
							<a :href="item.href" class="">
								<i :class="item.icon"></i>
								{{ item.label }}
							</a>
						</li>
					</ul>
				</div>

				<button class="btn btn-ghost btn-square btn-active">
					<div class="indicator">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
							stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
						</svg>
					</div>
				</button>
			</div>
		</div>


		<div class="drawer ">
			<input id="my-drawer" type="checkbox" class="drawer-toggle" />
			<div class="drawer-content">
			

			</div>
			<div class="drawer-side">
				<label for="my-drawer" class="drawer-overlay"></label>
				<ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content space-y-2">
					<!-- Sidebar content here -->
					<div class="flex gap-2">
						<div class="bg-secondary py-6 px-4 rounded-lg w-1/2">
							<p>Bonus</p>
							<p class="font-bold text-xl">100.000</p>
						</div>
						<div class="bg-secondary py-6 px-4 rounded-lg w-1/2">
							<p>Bonus</p>
							<p class="font-bold text-xl">100.000</p>
						</div>
					</div>
					<div class="flex">
						<div class="bg-secondary py-6 px-4 rounded-lg w-full">
							<p>Bonus</p>
							<p class="font-bold text-xl">100.000</p>
						</div>
					</div>
					<div class="bg-base-200 p-2 rounded-lg w-full">
						<p class="w-full bg-primary text-white mb-2 p-4 rounded-lg ">In-House Game</p>
						<li v-for="(item, i) in game" :key="i" class="flex">
							<a :href="item.href" class="">
								<i :class="item.icon"></i>
								<p class="text-normal font-bold">{{ item.label }} </p>
							</a>
						</li>
					</div>
					<li v-for="(item, i) in info" :key="i" class="flex">
						<a :href="item.href" class="">
							<i :class="item.icon"></i>
							<p class="text-normal font-bold">{{ item.label }} </p>
						</a>
					</li>
					<li class="bg-base-300 rounded-lg">
						<a href="/chat"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
								class="w-6 h-6">
								<path
									d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
								<path
									d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
							</svg>Contact Us </a>
					</li>

				</ul>
			</div>
		</div>
	</main>
</template>



<script setup>

const user = [
	{ href: '/profile', label: 'profile', icon: 'fab fa-github text-gray-800', },
	{ href: '/Affiliatte', label: 'Affiliatte', icon: 'fab fa-instagram', },
	{ href: '/bonus', label: 'Bonus', icon: 'fab fa-instagram', },
	{ href: '/sign-out', label: 'Sign out', icon: 'fab fa-instagram', },
]

const coin = [
	{ href: '/deposit', label: 'Deposit', icon: 'fab fa-github text-gray-800', },
	{ href: '/withdraw', label: 'Withdraw', icon: 'fab fa-github text-gray-800', },
	{ href: '/transaction', label: 'Transaction', icon: 'fab fa-github text-gray-800', },
]
const game = [
	{ href: '/baca', label: 'BACARAT', imga: '.lala.jpg', },
	{ href: '/slot', label: 'SLOT', imga: '.lala.jpg', },
	{ href: '/Spin', label: 'SPIN', imga: '.lala.jpg', },
	{ href: '/Bingo', label: 'BINGO', imga: '.lala.jpg', },
]

const info = [
	{ href: '/leaderboard', label: 'Leaderboard', imga: '.lala.jpg', },
	{ href: '/Affiliate', label: 'Affiliate', imga: '.lala.jpg', },
	{ href: '/about-70C', label: 'About 70C', imga: '.lala.jpg', },
	{ href: '/FAQ', label: 'FAQ', imga: '.lala.jpg', },
]
</script>