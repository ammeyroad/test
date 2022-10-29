<template>
	<main>
		<div class="min-h-screen">
			<div class="max-w-screen-xl mx-auto flex-col px-2">
				<div class="my-2 mt-8 flex items-center">
					<h3 class="text-2xl text-primary-content">Profile <span class="font-black text-primary-content">
							User</span>
					</h3>
				</div>
				<div class=" flex-col space-y-5 items-center mb-8">
					<div class="avatar w-full ">
						<div class="w-24 mx-auto rounded-2xl bg-primary">
							<img src="/src/assets/icon-wd.png" class="  " alt="">
						</div>
					</div>
					<div>
						<h1 class="sm:text-4xl text-2xl text-center font-bold text-primary-content">Ammeyroad
							<button class="btn btn-sm btn-square btn-ghost"><svg xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24" clas="w-8 h-8">
									<path fill="none" d="M0 0h24v24H0z" />
									<path
										d="M5 19h1.414l9.314-9.314-1.414-1.414L5 17.586V19zm16 2H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.243 19H21v2zM15.728 6.858l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414z" />
								</svg></button>
						</h1>
						<p class="text-center">Joined on 2022/10/21</p>
					</div>
				</div>

				<div class="grid sm:grid-cols-4 grid-cols-2 gap-4 mb-5">
					<div
						class="bg-base-200 hover:bg-base-300 sm:p-5 p-3 rounded-2xl w-full sm:space-x-8 space-x-3 items-center flex">
						<button class="btn btn-lg btn-active btn-square btn-ghost text-warning">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
								<path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
								<path fill-rule="evenodd"
									d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
									clip-rule="evenodd" />
								<path
									d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
							</svg>

						</button>
						<div>
							<h2 class="font-medium sm:text-2xl text-lg text-left text-primary-content">2.000.000</h2>
							<p class="leading-relaxed">Balance</p>
						</div>
					</div>
					<div
						class="bg-base-200 hover:bg-base-300 sm:p-5 p-3 rounded-2xl w-full sm:space-x-8 space-x-3 items-center flex">
						<button class="btn btn-lg btn-square btn-primary">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
								class="fill-primary-content w-10 h-10">
								<path fill="none" d="M0 0h24v24H0z"></path>
								<path
									d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z">
								</path>
							</svg>
						</button>
						<div>
							<h2 class="font-medium sm:text-2xl text-lg text-left text-primary-content">231</h2>
							<p class="leading-relaxed">Total Bet</p>
						</div>
					</div>
					<div
						class="bg-base-200 hover:bg-base-300 sm:p-5 p-3 rounded-2xl w-full sm:space-x-8 space-x-3 items-center flex">
						<button class="btn btn-lg btn-square btn-accent">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
								<path fill-rule="evenodd"
									d="M15.22 6.268a.75.75 0 01.968-.432l5.942 2.28a.75.75 0 01.431.97l-2.28 5.941a.75.75 0 11-1.4-.537l1.63-4.251-1.086.483a11.2 11.2 0 00-5.45 5.174.75.75 0 01-1.199.19L9 12.31l-6.22 6.22a.75.75 0 11-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l3.606 3.605a12.694 12.694 0 015.68-4.973l1.086-.484-4.251-1.631a.75.75 0 01-.432-.97z"
									clip-rule="evenodd" />
							</svg>

						</button>
						<div>
							<h2 class="font-medium sm:text-2xl text-lg text-left text-primary-content">112</h2>
							<p class="leading-relaxed">win</p>
						</div>
					</div>
					<div
						class="bg-base-200 hover:bg-base-300 sm:p-5 p-3 rounded-2xl w-full sm:space-x-8 space-x-3 items-center flex">
						<button class="btn btn-lg btn-square btn-secondary">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
								<path fill-rule="evenodd"
									d="M1.72 5.47a.75.75 0 011.06 0L9 11.69l3.756-3.756a.75.75 0 01.985-.066 12.698 12.698 0 014.575 6.832l.308 1.149 2.277-3.943a.75.75 0 111.299.75l-3.182 5.51a.75.75 0 01-1.025.275l-5.511-3.181a.75.75 0 01.75-1.3l3.943 2.277-.308-1.149a11.194 11.194 0 00-3.528-5.617l-3.809 3.81a.75.75 0 01-1.06 0L1.72 6.53a.75.75 0 010-1.061z"
									clip-rule="evenodd" />
							</svg>

						</button>
						<div>
							<h2 class="font-medium sm:text-2xl text-lg text-left text-primary-content">96</h2>
							<p class="leading-relaxed">Lose</p>
						</div>
					</div>
				</div>

				<div class="sm:flex text-center mt-12 sm:space-x-8 ">
					<div class="sm:w-4/6 ">
						<TabGroup>
							<TabList class="flex">
								<Tab as="template" v-slot="{ selected }">
									<button :class="[
										'px-5  sm:text-lg font-bold text-sm rounded-t-lg py-4 text-primary-content  ',
										'  focus:outline-none focus:ring-0 ring-secondary-focus bord',
										selected
											? 'bg-base-300 hover:shadow-secondary'
											: 'text-blue-100 hover:bg-base-300 hover:text-white',
									]">
										TRANSACTION
									</button>
								</Tab>
								<Tab as="template" v-slot="{ selected }">
									<button :class="[
										'px-5  sm:text-lg font-bold text-sm rounded-t-lg py-4 text-primary-content  ',
										'  focus:outline-none focus:ring-0 ring-secondary-focus bord',
										selected
											? 'bg-base-300 hover:shadow-secondary'
											: 'text-blue-100 hover:bg-base-300 hover:text-white',
									]">
										WITHDRAW
									</button>
								</Tab>
								<Tab as="template" v-slot="{ selected }">
									<button :class="[
										'px-5  sm:text-lg font-bold text-sm rounded-t-lg py-4 text-primary-content  ',
										'  focus:outline-none focus:ring-0 ring-secondary-focus bord',
										selected
											? 'bg-base-300 hover:shadow-secondary'
											: 'text-blue-100 hover:bg-base-300 hover:text-white',
									]">
										DEPOSIT
									</button>
								</Tab>
							</TabList>
							<TabPanels>
								<TabPanel :class="[
									'-mt- rounded-b-xl rounded-r-xl bg-base-300 p-5',
								]">
									<transaction />
								</TabPanel>
								<TabPanel :class="[
									'-mt- rounded-xl bg-base-300 p-5',
								]">
									<withdraw />
								</TabPanel>
								<TabPanel :class="[
									' -mt- rounded-xl rounded-r-xl bg-base-300 p-5',
								]">
									<deposit />
								</TabPanel>
							</TabPanels>
						</TabGroup>
					</div>
					<div class=" sm:w-2/6 ">
						<p class=" mb-2 sm:mt-4 mt-10 text-xl font-bold text-left text-primary-content
						">
							BONUSES PROGRAM
						</p>
						<div class="bg-base-300 p-5 px-8 rounded-2xl w-full space-y-12 items-center">
							<div class="w-full ">
								<h2 class="font-medium sm:text-xl text-lg text-left text-primary-content">You can claim <span
										class="text-secondary"> 100 credits</span>
									every 24 hours.</h2>
								<div
									class="px-5 py-5 my-4 text-left text-base-300 items-center  bg-warning  border-base-100 border w-full rounded-xl bg-blend-overlay  bg-no-repeat bg-right-top hover:bg-blend-darken"
									style="background-image: url(/src/assets/icon-depo.png); background-size: 40%;">
									<p class="sm:w-2/3 font-semibold text-lg my-8">
										Wait time for the next faucet <br> 21h : 29m : 11s
									</p>
								</div>
							</div>

							<hr class="my-2 border-base-100">
							<div class="w-full ">
								<h2 class="font-medium sm:text-2xl text-xl text-left text-primary-content uppercase my-3">Affiliate
									Program</h2>

								<div
									class="px-5 py-5 my-4 text-left text-base-300 items-center  bg-secondary  border-base-100 border w-full rounded-xl bg-blend-overlay hover:bg-blend-darken duration-300 bg-no-repeat bg-right-top content-center"
									style="background-image: url(/src/assets/icon-chip.png); background-size: 50%;">
									<p class="w-2/3 font-semibold text-lg my-8 mt-3">
										Refer your friends to our casino and get bonus credits <br>
										<button href="/user-refferral" class="btn mt-4"> learn more</button>
									</p>

								</div>

								<div class="form-control my-2">

									<label class="input-group w-full">
										<input type="text" placeholder="https://cryptocasino.financialplugins.com?ref=19462"
											class="input w-full sm:input-lg input-bordered" />
										<span class="btn sm:btn-lg btn-secondary">COPY</span>
									</label>
								</div>
								<p class=" sm:text-md text-left ">Please copy the link below
									and share with your friends.</p>
							</div>
							<hr class="my-6 border-base-100">
							<div class="w-full ">
								<h2 class="font-medium sm:text-2xl text-xl text-left text-primary-content uppercase my-3">Other bonuses
								</h2>
								<div class="sm:flex space-x-4 items-center my-4 bg-base-100 hover:bg-base-200 p-5 rounded-xl">
									<div class="w-10 h-10 inline-flex items-center justify-center rounded-2xl bg-base-100 flex-shrink-0">
										<img src="/src/assets/icon-depo.png" class="w-10 h-10" alt="">
									</div>
									<div>
										<p class="font-bold text-left items-center">Get 10% of the net loss back when you lose more than
											1000 credits in a single game.
										</p>
									</div>
								</div>
								<div class="sm:flex space-x-4 items-center my-4 bg-base-100 hover:bg-base-200 p-5 rounded-xl">
									<div class="w-10 h-10 inline-flex items-center justify-center rounded-2xl bg-base-100 flex-shrink-0">
										<img src="/src/assets/icon-profile.png" class="w-10 h-10" alt="">
									</div>
									<div>
										<p class="sm:font-bold text-left items-center">Get 5% of the net win back when you win more than
											1000
											credits in a single game.
										</p>
									</div>
								</div>
								<div class="sm:flex space-x-4 items-center my-4 bg-base-100 hover:bg-base-200 p-5 rounded-xl">
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