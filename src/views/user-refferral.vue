<template>
	<main>
		<div class="hero min-h-screen bg-base-200">
			<div
				class="flex flex-col lg:flex-row-reverse items-stretch max-w-screen-md bg-base-300 rounded-2xl border-warning/50 border hover:shadow-lg hover:shadow-warning/50 duration-300">
				<div class="w-3/5 text-center lg:text-left p-12 ">
					<TabGroup>
						<TabList class="flex justify-start p-2 bg-base-100 w-max rounded-xl gap-2">
							<Tab as="template" v-slot="{ selected }">
								<button :class="[
									'px-5 mb-1 rounded-lg py-2 font-bold text-primary-content  ',
									' ring-offset-secondary focus:outline-none focus:ring-2 ring-secondary-focus bord',
									selected
										? 'bg-secondary hover:shadow-secondary hover:shadow-lg'
										: 'text-blue-100 hover:bg-secondary/50 hover:text-white',
								]">
									Login
								</button>
							</Tab>
							<Tab as="template" v-slot="{ selected }">
								<button :class="[
									'px-5 mb-1 rounded-lg py-2 font-bold text-primary-content  ',
									' ring-offset-warning focus:outline-none focus:ring-2 ring-warning-focus bord',
									selected
										? 'bg-warning hover:shadow-warning hover:shadow-lg'
										: 'text-blue-100 hover:bg-warning/50 hover:text-white',
								]">
									Log Out
								</button>
							</Tab>
						</TabList>
						<TabPanels class="">
							<TabPanel :class="[
								'rounded-b-xl bg-base-300 ',
							]">
								<div class="mt-8">
									<h2 class="text-2xl font-bold  text-primary-content mb-5">Login Account</h2>
									<div class="form-control space-y-4">
										<div class="input-group">
											<button class="btn  btn-square">
												<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
													stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
														d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
												</svg>
											</button>
											<input type="text" placeholder="Your Email" class="input w-full input-bordered" />
										</div>
										<div class="input-group">
											<button class="btn btn-square">
												<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
													stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
														d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
												</svg>
											</button>
											<input type="text" placeholder="Password" class="input w-full  input-bordered" />
										</div>
										<label class="label">
											<span class="label-text text-secondary">Forgot your password?</span>
										</label>
										<button class="btn btn-block btn-secondary my-4 mt-8">Lets Goo</button>
									</div>
									<div class="divider pt-8">Or Login With</div>
									<div class="mx-auto pt-4">
										<p class="text-center">
											<button class="btn btn-primary btn-square m-2">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
													<path fill="none" d="M0 0h24v24H0z" />
													<path
														d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
												</svg>
											</button>
											<button class="btn  bg-primary-content btn-square m-2">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
													<path fill="none" d="M0 0h24v24H0z" />
													<path
														d="M3.064 7.51A9.996 9.996 0 0 1 12 2c2.695 0 4.959.99 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123-.2.6-.314 1.24-.314 1.9 0 .66.114 1.3.314 1.9.786 2.364 2.99 4.123 5.595 4.123 1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045 0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49z" />
												</svg>
											</button>
											<button class="btn  btn-warning btn-square mt-2 m-2">
												<img src="https://deothemes.com/envato/xhibiter/html/img/wallets/metamask.svg" class="w-8"
													alt="">
											</button>
											<button class="btn  m-2 gap-2 text-white">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
													<path d="M0 0h24v24H0z" />
													<path
														d="M10 11H2.05C2.55 5.947 6.814 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-5.185 0-9.449-3.947-9.95-9H10v3l5-4-5-4v3z" />
												</svg>
												Sign Up
											</button>
										</p>

									</div>

								</div>

							</TabPanel>
							<TabPanel :class="[
								'rounded-b-xl bg-base-300 ',
							]">
								<div class="mt-8">
									<h2 class="text-2xl font-bold  text-primary-content mb-5">Sign Up</h2>
									<div class="form-control space-y-4">
										<div class="input-group">
											<button class="btn  btn-square">
												<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
													stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
														d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
												</svg>
											</button>
											<input type="text" placeholder="Your Email" class="input w-full input-bordered" />
										</div>
										<div class="input-group">
											<button class="btn btn-square">
												<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
													stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
														d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
												</svg>
											</button>
											<input type="text" placeholder="Password" class="input w-full  input-bordered" />
										</div>

										<div class="form-control">
											<label class="label cursor-pointer">
												<input type="checkbox" checked="checked" class="checkbox checkbox-warning" />
												<span class="label-text"> I confirm that I am 18 years old and I have read the terms of
													service</span>
											</label>
											<label class="label cursor-pointer">
												<input type="checkbox" checked="checked" class="checkbox checkbox-warning" />
												<span class="label-text text-left"> Receive Email Promo</span>
											</label>
										</div>

										<button class="btn btn-block btn-warning my-4 mt-8">Create Account</button>
									</div>
									<div class="divider pt-8">Or Sign Up With</div>
									<div class="mx-auto pt-4">
										<p class="text-center">
											<button class="btn btn-primary btn-square m-2">
												<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
													stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
														d="M6 18L18 6M6 6l12 12" />
												</svg>
											</button>
											<button class="btn  bg-primary-content btn-square m-2">
												<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
													stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
														d="M6 18L18 6M6 6l12 12" />
												</svg>
											</button>
											<button class="btn  btn-warning btn-square m-2">
												<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
													stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
														d="M6 18L18 6M6 6l12 12" />
												</svg>
											</button>
											<button class="btn btn-ghost btn-active m-2 gap-2">
												<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
													stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
														d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
												</svg>
												Sign Up
											</button>
										</p>

									</div>
								</div>

							</TabPanel>
						</TabPanels>
					</TabGroup>
				</div>
				<div class="w-2/5 bg-base-100 rounded-2xl">
					<div class="p-12">
						<img src="/src/assets/char-3.png" alt="">
						<p class="text-center mt-5">
							By accessing the site, I confirm that I am 18 years old and I have read the terms of service
						</p>
					</div>
				</div>
			</div>
		</div>


		<div class="hero min-h-screen">
			<div class="max-w-screen-lg mx-auto flex-col p-4">
				<div class="px-4 my-4 flex items-center">
					<h3 class="text-3xl text-primary-content">Refferral<span class="font-black"> Program</span></h3>
				</div>
				<div
					class="relative w-full bg-warning hover hover:bg-secondary duration-300 bg-[url('/src/assets/refferral-user-2.png')] bg-cover bg-center rounded-xl shadow-lg text-base-300">
					<div class="text-left space-y-5 p-24">
						<p class="text-3xl font-extrabold w-3/4 p-4">Bring people here and earn more! Receive passive income for
							each player who follows your link, registers and plays actively on the platform. </p>
						<button class="btn btn-lg">Learn More</button>
					</div>
				</div>
				<div class="flex text-center mt-12 gap-8">
					<div class="sm:w-3/5 space-y-4">
						<!-- naraao-->
						<div class="w-full ">
							<div class="text-left text-primary-content">
								<p class="text-lg font-medium mb-12">Let the whole world know about 70C - Bring people here and earn
									more! Receive passive income for each player who follows your link, registers and plays actively on
									the platform. Referral Bonuses will be credited automatically for bets made by your referrals in
									In-house games, Slots, Sports and mined 70C tokens. The more players you attract - the higher income
									you’ll get.
									Create your own campaign for every source with a unique referral link. Track how your referrals come
									and what bonuses you get for their bets.</p>

							</div>
							<div class="w-full bg-base-200 hover hover:bg-base-300 duration-300 p-8 rounded-xl shadow-lg mt-8">
								<img src="/src/assets/refferral-user.png" alt="">
							</div>

							<div class="w-full bg-base-200 hover hover:bg-base-300 duration-300 p-8 rounded-xl shadow-lg mt-8">
								<h2 class="text-2xl font-bold  text-primary-content text-left mb-8">How many rewards can you get ?</h2>

								<div class="space-y-4">
									<div class="flex bg-base-300 p-8 rounded-2xl w-full space-x-6  items-center">
										<div
											class="w-12 h-12 inline-flex items-center justify-center rounded-2xl bg-primary-content text-indigo-500 flex-shrink-0">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
												class="fill-base-300 w-10 h-10">
												<path fill="none" d="M0 0h24v24H0z"></path>
												<path
													d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM10.622 8.415a.4.4 0 0 0-.622.332v6.506a.4.4 0 0 0 .622.332l4.879-3.252a.4.4 0 0 0 0-.666l-4.88-3.252z">
												</path>
											</svg>
										</div>
										<div>
											<h2 class="font-medium sm:text-xl text-2xl text-left text-primary-content">User signs up - 100
												credits (referred user will also get 50 bonus credits)</h2>
										</div>
									</div>
									<div class="flex bg-base-300 p-8 rounded-2xl w-full space-x-6 items-center">
										<div
											class="w-12 h-12 inline-flex items-center justify-center rounded-2xl bg-primary-content text-indigo-500 flex-shrink-0">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
												class="fill-base-300 w-10 h-10">
												<path fill="none" d="M0 0h24v24H0z"></path>
												<path
													d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM10.622 8.415a.4.4 0 0 0-.622.332v6.506a.4.4 0 0 0 .622.332l4.879-3.252a.4.4 0 0 0 0-.666l-4.88-3.252z">
												</path>
											</svg>
										</div>
										<div>
											<h2 class="font-medium sm:text-xl text-2xl text-left text-primary-content">User loses a game - 10%
												of net loss in credits</h2>
										</div>
									</div>
									<div class="flex bg-base-300 p-8 rounded-2xl w-full space-x-6 items-center">
										<div
											class="w-12 h-12 inline-flex items-center justify-center rounded-2xl bg-primary-content text-indigo-500 flex-shrink-0">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
												class="fill-base-300 w-10 h-10">
												<path fill="none" d="M0 0h24v24H0z"></path>
												<path
													d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM10.622 8.415a.4.4 0 0 0-.622.332v6.506a.4.4 0 0 0 .622.332l4.879-3.252a.4.4 0 0 0 0-.666l-4.88-3.252z">
												</path>
											</svg>
										</div>
										<div>
											<h2 class="font-medium sm:text-xl text-2xl text-left text-primary-content">User wins a game - 1%
												of net win in credits</h2>
										</div>
									</div>
									<div class="flex bg-base-300 p-8 rounded-2xl w-full space-x-6 items-center">
										<div
											class="w-12 h-12 inline-flex items-center justify-center rounded-2xl bg-primary-content text-indigo-500 flex-shrink-0">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
												class="fill-base-300 w-10 h-10">
												<path fill="none" d="M0 0h24v24H0z"></path>
												<path
													d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM10.622 8.415a.4.4 0 0 0-.622.332v6.506a.4.4 0 0 0 .622.332l4.879-3.252a.4.4 0 0 0 0-.666l-4.88-3.252z">
												</path>
											</svg>
										</div>
										<div>
											<h2 class="font-medium sm:text-xl text-2xl text-left text-primary-content">UUser completes a
												deposit - 10% of deposit amount in credits</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- kanan -->
					<div class=" sm:w-2/5 space-y-8">
						<div class="w-full bg-warning duration-300 p-8 rounded-xl hover:shadow-lg hover:shadow-warning/50">
							<div class="text-left space-y-5">
								<label class="input-group w-full">
									<input type="text" placeholder="https://cryptocasino.financialplugins.com?ref=19462"
										class="input w-full input-lg input-bordered" />
									<span class="btn btn-lg btn-secondary">COPY</span>
								</label>
								<h2 class="font-medium sm:text-md text-left text-black">Please copy the link below
									and share with your friends.</h2>
							</div>
						</div>
						<div class="w-full bg-base-300 duration-300  p-8 rounded-xl hover:shadow-lg hover:shadow-secondary/50">
							<div class="text-left space-y-5">
								<h2 class="text-2xl font-bold  text-primary-content">How it Works</h2>
								<div class="flex-col gap-4 space-y-5">
									<p class="text-xl">
										1 · Use your referral link and get players to sign up with it.
									</p>
									<p class="text-xl">
										2 · New users will receive a additional bonus for using your code.
									</p>
									<p class="text-xl">
										3 · You will receive a percentage of each* profit your referral places on the website. Track your
										earnings below and cash out whenever you wish.
									</p>

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
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
</script>