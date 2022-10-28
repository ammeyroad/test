<template>
	<main>
		<div class="min-h-screen">
			<div class="max-w-screen-xl mx-auto flex-col p-4">
				<div class="p-4 my-1 flex items-center">
					<h3 class="text-3xl text-primary-content">Profile <span class="font-black">User</span></h3>
				</div>
				<div class="flex items-center justify-between">
					<div class="flex items-center">
						<div class="avatar p-5">
							<div class="w-28  rounded-2xl ring ring-secondary ring-offset-base-100 ring-offset-2">
								<img src="https://placeimg.com/192/192/people" />
							</div>
						</div>
						<div class="flex-col space-y-3">
							<h1 class="text-4xl font-bold text-primary-content">Ammeyroad <button
									class="btn btn-square btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
										width="24" height="24">
										<path fill="none" d="M0 0h24v24H0z" />
										<path
											d="M5 19h1.414l9.314-9.314-1.414-1.414L5 17.586V19zm16 2H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.243 19H21v2zM15.728 6.858l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414z" />
									</svg></button></h1>
							<p>Joined on 2022/10/21</p>
						</div>
					</div>
					<div class="flex-col p-4 rounded-xl">
						<div tabindex="0" class="flex text-4xl text-warning font-bold border-0 ">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 mr-2">
								<path fill-rule="evenodd"
									d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 7.5A.75.75 0 009 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 009 12h3.622a2.251 2.251 0 01-2.122 1.5H9a.75.75 0 00-.53 1.28l3 3a.75.75 0 101.06-1.06L10.8 14.988A3.752 3.752 0 0014.175 12H15a.75.75 0 000-1.5h-.825A3.733 3.733 0 0013.5 9H15a.75.75 0 000-1.5H9z"
									clip-rule="evenodd" />
							</svg>
							2.000.000
						</div>
						<p class="">Played 96 games</p>
					</div>

				</div>
				<div class="flex flex-wrap text-center">
					<div class="p-2 sm:w-1/4 w-1/2 ">
						<div class="flex bg-base-200 hover:bg-base-300 p-8 rounded-2xl w-full space-x-8 items-center">
							<div
								class="w-16 h-16 inline-flex items-center justify-center rounded-2xl bg-primary-content text-indigo-500 flex-shrink-0">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
									class="fill-base-300 w-10 h-10">
									<path fill="none" d="M0 0h24v24H0z"></path>
									<path
										d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM10.622 8.415a.4.4 0 0 0-.622.332v6.506a.4.4 0 0 0 .622.332l4.879-3.252a.4.4 0 0 0 0-.666l-4.88-3.252z">
									</path>
								</svg>
							</div>
							<div>
								<h2 class="font-medium sm:text-4xl text-3xl text-left text-primary-content">231</h2>
								<p class="leading-relaxed">Total Bets</p>
							</div>
						</div>
					</div>
					<div class="p-2 sm:w-1/4 w-1/2 ">
						<div class="flex bg-base-200 hover:bg-base-300 p-8 rounded-2xl w-full space-x-8 items-center">
							<div class="w-16 h-16 inline-flex items-center justify-center rounded-2xl bg-warning  flex-shrink-0">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
									class="fill-primary-content w-10 h-10">
									<path fill="none" d="M0 0h24v24H0z"></path>
									<path
										d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z">
									</path>
								</svg>
							</div>
							<div>
								<h2 class="font-medium sm:text-4xl text-3xl text-left text-primary-content">231</h2>
								<p class="leading-relaxed">Wagered</p>
							</div>
						</div>
					</div>
					<div class="p-2 sm:w-1/4 w-1/2 ">
						<div class="flex bg-base-200 hover:bg-base-300 p-8 rounded-2xl w-full space-x-8 items-center">
							<div class="w-16 h-16 inline-flex items-center justify-center rounded-2xl bg-primary flex-shrink-0">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
									class="fill-primary-content w-10 h-10">
									<path fill="none" d="M0 0h24v24H0z"></path>
									<path
										d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10h3l-4-4-4 4h3v4h2v-4z">
									</path>
								</svg>
							</div>
							<div>
								<h2 class="font-medium sm:text-4xl text-3xl text-left text-primary-content">231</h2>
								<p class="leading-relaxed">Win</p>
							</div>
						</div>
					</div>
					<div class="p-2 sm:w-1/4 w-1/2 ">
						<div class="flex bg-base-200 hover:bg-base-300 p-8 rounded-2xl w-full space-x-8 items-center">
							<div class="w-16 h-16 inline-flex items-center justify-center rounded-2xl bg-accent flex-shrink-0">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
									class="fill-primary-content w-10 h-10">
									<path fill="none" d="M0 0h24v24H0z"></path>
									<path
										d="M11 2.05V13h10.95c-.501 5.053-4.765 9-9.95 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95zm2 0A10.003 10.003 0 0 1 21.95 11H13V2.05z">
									</path>
								</svg>
							</div>
							<div>
								<h2 class="font-medium sm:text-4xl text-3xl text-left text-primary-content">231</h2>
								<p class="leading-relaxed">Profit</p>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-wrap text-center mt-12">
					<div class="p-2 sm:w-3/5 ">
						<TabGroup>
							<TabList class="flex">
								<Tab as="template" v-slot="{ selected }">
									<button :class="[
										'px-5 mb-1 rounded-lg py-4 text-xl font-bold text-primary-content  ',
										' ring-offset-secondary focus:outline-none focus:ring-2 ring-secondary-focus bord',
										selected
											? 'bg-secondary hover:shadow-secondary hover:shadow-lg'
											: 'text-blue-100 hover:bg-secondary/50 hover:text-white',
									]">
										TRANSACTION
									</button>
								</Tab>
								<Tab as="template" v-slot="{ selected }">
									<button :class="[
										'px-5 mb-1 rounded-lg py-4 text-xl font-bold text-primary-content  ',
										' ring-offset-secondary focus:outline-none focus:ring-2 ring-secondary-focus bord',
										selected
											? 'bg-secondary hover:shadow-secondary hover:shadow-lg'
											: 'text-blue-100 hover:bg-secondary/50 hover:text-white',
									]">
										WITHDRAW
									</button>
								</Tab>
								<Tab as="template" v-slot="{ selected }">
									<button :class="[
										'px-5 mb-1 rounded-lg py-4 text-xl font-bold text-primary-content  ',
										' ring-offset-secondary focus:outline-none focus:ring-2 ring-secondary-focus bord',
										selected
											? 'bg-secondary hover:shadow-secondary hover:shadow-lg'
											: 'text-blue-100 hover:bg-secondary/50 hover:text-white',
									]">
										DEPOSIT
									</button>
								</Tab>
							</TabList>

							<TabPanels class="mt-2">

								<TabPanel :class="[
									'rounded-xl bg-base-300 p-3 px-5',
								]">
									<transaction />
								</TabPanel>
								<TabPanel :class="[
									'rounded-xl bg-base-300 p-3 px-5',
								]">
									<withdraw />
								</TabPanel>
								<TabPanel :class="[
									'rounded-xl bg-base-300 p-3 px-5',
								]">
									<deposit />
								</TabPanel>
							</TabPanels>
						</TabGroup>

					</div>
					<div class="p-2 sm:w-2/5 ">
						<p class=" mb-2 py-4 text-xl font-bold text-left text-primary-content
						">
							BONUSES PROGRAM
						</p>
						<div class="bg-base-300 p-8 rounded-2xl w-full space-y-12 items-center">
							<div class="w-full ">
								<h2 class="font-medium sm:text-xl text-3xl text-left text-primary-content">You can claim <span
										class="text-secondary"> 100 credits</span>
									every 24 hours.</h2>
								<div
									class="px-5 py-5 my-4 h-32 text-left text-base-300 items-center  bg-warning  border-base-100 border w-full rounded-xl bg-blend-overlay  bg-no-repeat bg-right-top hover:bg-blend-darken"
									style="background-image: url(/src/assets/icon-depo.png); background-size: 40%;">
									<p class="w-2/3 font-semibold text-xl mt-5">
										Wait time for the next faucet <br> 21h : 29m : 11s
									</p>
								</div>
							</div>

							<hr class="my-6 border-base-100">
							<div class="w-full ">
								<h2 class="font-medium sm:text-3xl text-3xl text-left text-primary-content uppercase my-3">Affiliate
									Program</h2>

								<div
									class="px-5 py-5 my-4 h-48 text-left text-base-300 items-center  bg-secondary  border-base-100 border w-full rounded-xl bg-blend-overlay hover:bg-blend-darken duration-300 bg-no-repeat bg-right-top content-center"
									style="background-image: url(/src/assets/icon-chip.png); background-size: 50%;">
									<p class="w-2/3 font-semibold text-xl mb-3 mt-3">
										Refer your friends to our casino and get bonus credits
									</p>
									<button class="btn"> learn more</button>
								</div>
								<h2 class="font-medium sm:text-md text-left text-primary-content">Please copy the link below
									and share with your friends.</h2>
								<div class="form-control my-2">

									<label class="input-group w-full">
										<input type="text" placeholder="https://cryptocasino.financialplugins.com?ref=19462"
											class="input w-full input-lg input-bordered" />
										<span class="btn btn-lg btn-secondary">COPY</span>
									</label>
								</div>
							</div>
							<hr class="my-6 border-base-100">
							<div class="w-full ">
								<h2 class="font-medium sm:text-3xl text-3xl text-left text-primary-content uppercase my-3">Other bonuses
								</h2>
								<div class="flex space-x-4 items-center my-4 bg-base-100 hover:bg-base-200 p-5 rounded-xl">
									<div class="w-10 h-10 inline-flex items-center justify-center rounded-2xl bg-base-100 flex-shrink-0">
										<img src="/src/assets/icon-depo.png" class="w-10 h-10" alt="">
									</div>
									<div>
										<p class="font-bold text-left items-center">Get 10% of the net loss back when you lose more than
											1000 credits in a single game.
										</p>
									</div>
								</div>
								<div class="flex space-x-4 items-center my-4 bg-base-100 hover:bg-base-200 p-5 rounded-xl">
									<div class="w-10 h-10 inline-flex items-center justify-center rounded-2xl bg-base-100 flex-shrink-0">
										<img src="/src/assets/icon-profile.png" class="w-10 h-10" alt="">
									</div>
									<div>
										<p class="font-bold text-left items-center">Get 5% of the net win back when you win more than 1000
											credits in a single game.
										</p>
									</div>
								</div>
								<div class="flex space-x-4 items-center my-4 bg-base-100 hover:bg-base-200 p-5 rounded-xl">
									<div class="w-10 h-10 inline-flex items-center justify-center rounded-2xl bg-base-100 flex-shrink-0">
										<img src="/src/assets/icon-wd.png" class="w-10 h-10" alt="">
									</div>
									<div>
										<p class="font-bold text-left items-center">Get 5% back when you deposit more than 5000 credits at
											once.
										</p>
									</div>
								</div>


							</div>
						</div>

					</div>

				</div>
			</div>
		</div>
	</main>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import transaction from '../components/transaction.vue';
import withdraw from '../components/withdraw.vue';
import deposit from '../components/deposit.vue';

</script>