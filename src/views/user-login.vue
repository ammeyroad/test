<template>
	<main>
		<div class="hero min-h-screen bg-base-100">
			<div class=" max-w-screen-md grid grid-cols-6 bg-base-100 rounded-2xl duration-300">
				<div
					class="sm:col-span-4 col-span-6 w-full bg-base-300 hover:shadow-lg rounded-xl text-center lg:text-left p-12 ">
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
									<h2 class="text-2xl font-bold text-left  text-secondary mb-5">Login Account</h2>
									<div class="form-control ">
										<div class="input-group mb-5">
											<button class="btn  btn-square">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
													<path
														d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
													<path
														d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
												</svg>

											</button>
											<input type="text" placeholder="Your Email" class="input w-full input-bordered" />
										</div>
										<div class="input-group mb-5">
											<button class="btn btn-square">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
													<path fill-rule="evenodd"
														d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
														clip-rule="evenodd" />
												</svg>

											</button>
											<input type="text" placeholder="Password" class="input w-full  input-bordered" />
										</div>

										<div class="form-control space-y-4 ">
											<span class="text-left"> Forgot Password</span>
											<span class="text-left opacity-0"> I confirm that I am 18 years old and I have read the terms of
												service</span>
										</div>

										<button class="btn btn-block btn-secondary my-4 mt-8">Lets Go GO!</button>
									</div>
									<div class="divider pt-8">Or Sign Up With</div>
									<div class="mx-auto pt-4">
										<p class="text-center">
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
										</p>
									</div>
								</div>
							</TabPanel>
							<TabPanel :class="[
								'rounded-b-xl bg-base-300 ',
							]">
								<div class="mt-8">
									<h2 class="text-2xl font-bold text-left  text-warning mb-5">Sign Up</h2>
									<div class="form-control ">
										<div class="input-group mb-5">
											<button class="btn  btn-square">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
													<path
														d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
													<path
														d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
												</svg>

											</button>
											<input type="text" placeholder="Your Email" class="input w-full input-bordered" />
										</div>
										<div class="input-group mb-5">
											<button class="btn btn-square">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
													<path fill-rule="evenodd"
														d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
														clip-rule="evenodd" />
												</svg>
											</button>
											<input type="text" placeholder="Password" class="input w-full  input-bordered" />
										</div>

										<div class="form-control space-y-4 ">
											<label class="flex">
												<input type="checkbox" checked="checked" class="checkbox checkbox-warning mr-4" />
												<span class="text-left"> I confirm that I am 18 years old and I have read the terms of
													service</span>
											</label>

											<label class="flex">
												<input type="checkbox" checked="checked" class="checkbox checkbox-warning mr-4" />
												<span class="text-left"> Receive Email Promo</span>
											</label>

										</div>

										<button class="btn btn-block btn-warning my-4 mt-8">Create Account</button>
									</div>
									<div class="divider pt-8">Or Sign Up With</div>
									<div class="mx-auto pt-4">
										<p class="text-center">
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
										</p>
									</div>
								</div>

							</TabPanel>
						</TabPanels>
					</TabGroup>
				</div>
				<div class="sm:col-span-2 hidden md:block w-full rounded-2xl content-center">
					<div class="p-12">
						<img src="/src/assets/char-3.png" alt="" class="animate-geser mt-20">
						<p class="text-center mt-5">
							By accessing the site, I confirm that I am 18 years old and I have read the terms of service
						</p>
					</div>
				</div>
			</div>
		</div>

	</main>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
</script>