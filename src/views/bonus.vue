<template>
	<main>
		<div class="">
			<div class="max-w-screen-xl mx-auto flex-col p-4 space-y-5">
				<div class=" my-4 flex items-center">
					<h3 class="sm:text-2xl text-xl text-primary-content">Bonus<span class="font-black"> Program</span></h3>
				</div>
				<div class="sm:flex gap-4 space-y-4 sm:space-y-0">
					<div
						class="sm:w-1/2 grid bg-error hover duration-300 bg-[url('/src/assets/refferral-user-2.png')] bg-cover bg-center rounded-xl shadow-lg text-base-300 sm:h-[200px] h-48 ">
						<div class="self-center space-y-5 ml-2 w-3/4">
							<h2 class="bg-white/70 w-max p-3 rounded-xl font-bold text-black mb-1 sm:text-4xl text-2xl ">Get 5% of the
								net win<br>
							</h2>
							<span class="sm:text-2xl text-lg font-bold"> back when you win more than 1000 credits in
								a single game.</span>
						</div>
					</div>
					<div
						class="sm:w-1/2  grid bg-info hover duration-300 bg-[url('/src/assets/refferral-user-2.png')] bg-cover bg-center rounded-xl shadow-lg text-base-300 sm:h-[200px] h-48 ">
						<div class="self-center space-y-5 ml-2 w-3/4">
							<h2 class="bg-white/70 w-max p-3 rounded-xl font-bold text-black mb-1 sm:text-4xl text-2xl ">Get 10% of
								the
								net loss<br>
							</h2>
							<span class="sm:text-2xl text-lg font-bold"> back when you lose more than 1000 credits
								in a single game.</span>
						</div>
					</div>
					<div
						class="sm:w-1/2 w-full grid bg-accent hover duration-300 bg-[url('/src/assets/refferral-user-2.png')] bg-cover bg-center rounded-xl shadow-lg text-base-300 sm:h-[200px] h-48 ">
						<div class="self-center space-y-5 ml-2 w-3/4">
							<h2 class="bg-white/70 w-max p-3 rounded-xl font-bold text-black mb-1 sm:text-4xl text-2xl ">Get 5%
								Cash<br>
							</h2>
							<span class="sm:text-2xl text-lg font-bold">back when you deposit more than 5000 credits at
								once.</span>
						</div>
					</div>
				</div>

				<div class="mt-12 my-4 flex items-center">
					<h3 class="sm:text-2xl text-xl text-primary-content">Other<span class="font-black"> Bonus</span></h3>
				</div>
				<div class="sm:flex sm:gap-4 gap-4 space-y-4 sm:space-y-0">
					<div
						class="w-full grid bg-warning hover  duration-300 bg-[url('/src/assets/refferral-user-2.png')] bg-cover bg-center rounded-xl shadow-lg text-base-300 sm:h-[300px] h-52 ">
						<div class="self-center space-y-5 ml-2">
							<p class="sm:text-4xl text-2xl font-extrabold">claim 100 credits every 24 hours.
							</p>
							<div class="btn-group btn-group-horizontal">
								<button class="btn sm:btn-lg btn-secondary">23h : 43m : 47s</button>
								<button class="btn sm:btn-lg">claim</button>

							</div>
						</div>
					</div>
					<div
						class="w-full grid bg-secondary hover  duration-300 bg-[url('/src/assets/refferral-user-2.png')] bg-cover bg-center rounded-xl shadow-lg text-base-300 sm:h-[300px] h-52 ">
						<div class="self-center space-y-5 ml-2">
							<p class="sm:text-4xl text-2xl font-extrabold">Bring people here and earn more! </p>
							<button class="btn sm:btn-lg">Learn More!</button>

						</div>
					</div>
				</div>

			</div>
		</div>
	</main>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
</script>
