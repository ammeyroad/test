<template>
	<div class="">
		<div class="max-w-screen-md">
			<TabGroup>
				<TabList class="flex justify-end ">
					<Tab as="template" v-slot="{ selected }">
						<button :class="[
					' rounded-t-lg py-4 px-5 mb-0 font-bold text-primary-content hover:text-secondary  ',
					'   focus:text-secondary',
					selected
						? 'bg-base-300 '
						: ' hover:bg-base-200 hover:text-white',]">
							Ammount
						</button>
					</Tab>
					<Tab as="template" v-slot="{ selected }">
						<button :class="[
					' rounded-t-lg py-4 px-5 mb-0 font-bold text-primary-content hover:text-secondary  ',
					'   focus:text-secondary',
					selected
						? 'bg-base-300 '
						: ' hover:bg-base-200 hover:text-white',]">
							History
						</button>
					</Tab>
					<Tab as="template" v-slot="{ selected }">
						<button :class="[
					' rounded-t-lg py-4 px-5 mb-0 font-bold text-primary-content hover:text-secondary  ',
					'   focus:text-secondary',
					selected
						? 'bg-base-300 '
						: ' hover:bg-base-200 hover:text-white',]">
							FAQ
						</button>
					</Tab>
				</TabList>
				<TabPanels class="">
					<TabPanel :class="[
						'rounded-b-xl border-t  bg-base-300 -mt-4 p-5',
					]">
						<div class="flex space-x-4 items-center my-4">
							<div class="w-10 h-10 inline-flex items-center justify-center rounded-2xl bg-base-100 flex-shrink-0">
								<img src="/src/assets/icon-depo.png" class="w-10 h-10" alt="">
							</div>
							<div>
								<p class="font-bold text-2xl items-center uppercase">Deposit BEP20 TOKEN
								</p>
							</div>
						</div>
						<hr class="my-6 border-base-100">
						<div class="">
							<div class="form-control w-full mb-8">
								<label class="label">
									<span class="label-text">Deposit Amount</span>
								</label>
								<div class="grid grid-cols-3 gap-4 bg-[#2A303C] p-4 rounded-xl ">
									<input type="text" placeholder="Minimum Ammount 500.000 TOC" class="input w-full col-span-3" />
									<div class="btn btn-active btn-ghost col-span-1 w-full">1.000.000</div>
									<div class="btn btn-active btn-ghost col-span-1 w-full">2.000.000</div>
									<div class="btn btn-active btn-ghost col-span-1 w-full">5.000.000</div>
								</div>
								<label class="label">

									<span class="text-xl font-bold mt-2">You will get: <span class="text-secondary">TOC 2.000.000</span>
									</span>
								</label>
							</div>
							<div class="form-control w-full ">
								<label class="label">
									<span class="label-text">Address</span>
								</label>
								<div class="flex  bg-[#2A303C] px-4 py-1 rounded-xl items-center">
									<img src="https://deothemes.com/envato/xhibiter/html/img/wallets/metamask.svg" class="w-14" alt="">
									<input type="text" placeholder="Metamask Address" class="input w-full col-span-3" />
								</div>

							</div>
							<button class="btn btn-block btn-secondary btn-lg my-4 mt-8">PROCEED</button>
						</div>
					</TabPanel>
					<TabPanel :class="[
						'rounded-b-xl border-t  bg-base-300 -mt-4 p-5',
					]">
						<div class="flex space-x-4 items-center my-4">
							<div class="w-10 h-10 inline-flex items-center justify-center rounded-2xl bg-base-100 flex-shrink-0">
								<img src="/src/assets/icon-lotre.png" class="w-10 h-10" alt="">
							</div>
							<div>
								<p class="font-bold text-2xl items-center uppercase">History Deposit
								</p>
							</div>
						</div>
						<hr class="my-6 border-base-100">
						<table class="table w-[100%] ">
							<!-- head -->
							<thead class="w-[100%] ">
								<tr class=" group-[100%] border-b border-base-300 ">
									<th class="w-[20%] bg-white/0 text-center font-bold">
										<p class="my-2"> ID </p>
									</th>
									<th class="w-[30%] bg-white/0  font-bold">
										<p class="my-2"> Type Game </p>
									</th>
									<th class="w-[10%] bg-white/0 text-center  font-bold">
										<p class="my-2"> Ammount </p>
									</th>
									<th class="w-[20%] bg-white/0 text-center  font-bold">
										<p class="my-2"> Balance </p>
									</th>
									<th class="w-[20%] bg-white/0   font-bold">
										<p class="my-2"> Create </p>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr class=" group ">
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4">
										12</td>
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content text-left text-md  py-4 flex">
										Metamask Wallet
									</td>
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 text-secondary">
										-510.00</td>
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4">
										1,604.15 </td>
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 flex">
										<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 " viewBox="0 0 24 24" width="24"
											height="24">
											<path fill="none" d="M0 0h24v24H0z" />
											<path
												d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" />
										</svg> 28s ago
									</td>
								</tr>
								<!-- row 2 -->

								<!-- row 1 -->
								<tr class=" group ">
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4">
										12</td>
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4 flex">
										Metamask Wallet </td>
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 text-secondary">
										-510.00</td>
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4">
										1,604.15 </td>
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 flex">
										<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 " viewBox="0 0 24 24" width="24"
											height="24">
											<path fill="none" d="M0 0h24v24H0z" />
											<path
												d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" />
										</svg> 28s ago
									</td>
								</tr>
								<!-- row 2 -->

								<!-- row 3 -->
								<tr class=" group ">
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4">
										21</td>
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content text-left text-md  py-4 flex">
										Metamask Wallet
									</td>
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 text-secondary">
										-510.00</td>
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4">
										1,604.15 </td>
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 flex">
										<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 " viewBox="0 0 24 24" width="24"
											height="24">
											<path fill="none" d="M0 0h24v24H0z" />
											<path
												d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" />
										</svg> 28s ago
									</td>
								</tr>
								<tr class=" group ">
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4">
										12</td>
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4 flex">
										Metamask Wallet </td>
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 text-secondary">
										-510.00</td>
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4">
										1,604.15 </td>
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 flex">
										<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 " viewBox="0 0 24 24" width="24"
											height="24">
											<path fill="none" d="M0 0h24v24H0z" />
											<path
												d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" />
										</svg> 28s ago
									</td>
								</tr>
								<!-- row 2 -->

								<!-- row 3 -->
								<tr class=" group ">
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4">
										21</td>
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4 flex">
										Metamask Wallet
									</td>
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 text-secondary">
										-510.00</td>
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4">
										1,604.15 </td>
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 flex">
										<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 " viewBox="0 0 24 24" width="24"
											height="24">
											<path fill="none" d="M0 0h24v24H0z" />
											<path
												d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" />
										</svg> 28s ago
									</td>
								</tr>

								<!-- row 3 -->
								<tr class=" grouphover:bg-slate-800 ">
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4">
										21</td>
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4 flex">
										Metamask Wallet
									</td>
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 text-secondary">
										-510.00</td>
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4">
										1,604.15 </td>
									<td
										class="group-hover:bg-base-100 bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 flex">
										<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 " viewBox="0 0 24 24" width="24"
											height="24">
											<path fill="none" d="M0 0h24v24H0z" />
											<path
												d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" />
										</svg> 28s ago
									</td>
								</tr>
							</tbody>
						</table>
					</TabPanel>
					<TabPanel :class="[
						'rounded-b-xl border-t  bg-base-300 -mt-4 p-5',
					]">
						<div class="flex space-x-4 items-center my-4">
							<div class="w-10 h-10 inline-flex items-center justify-center rounded-2xl bg-base-100 flex-shrink-0">
								<img src="/src/assets/icon-chat.png" class="w-10 h-10" alt="">
							</div>
							<div>
								<p class="font-bold text-2xl items-center uppercase">FAQ DEPOSIT
								</p>
							</div>
						</div>
						<hr class="my-6 border-base-100">
						<div class="flex-col p-4 rounded-xl space-y-2">
							<div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
								<div class="collapse-title text-xl font-medium">
									How to Deposit crypto currency?
								</div>
								<div class="collapse-content">
									<p>1. Select the currency and the chain you want. (Attention: Wrong chain will lead to Deposit
										failure.)
										<br>
										2. Enter your wallet address. <br>
										3. Enter your Deposital amount and click the Deposital button. <br>
										4. Verify your account's security, you can verify by email or 2FA.
									</p>
								</div>
							</div>
							<div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
								<div class="collapse-title text-xl font-medium">
									How long does it take to Deposit out the crypto currency to your wallet?
								</div>
								<div class="collapse-content">
									<p>To ensure the safety of your funds, when you Deposit, the system will conduct risk control
										verification or manual review.
										In most cases, your Deposital can be done within seconds.
										If you have not received your Deposital for a long time, please check your transaction hash in the
										browser first, and check your deposit address, if all meet, please contact our customer service.</p>
								</div>
							</div>
							<div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
								<div class="collapse-title text-xl font-medium">
									What should you do if the Deposital fails?
								</div>
								<div class="collapse-content">
									<p>Orders that fail to Deposit may have risk control issues. Please check your account and Deposital
										information to initiate a Deposital again.</p>
								</div>
							</div>
							<div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
								<div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
									<div class="collapse-title text-xl font-medium">
										Why there is a fee for Deposit/deposit?
									</div>
									<div class="collapse-content">
										<p>Deposital/deposit fees are caused by the Gas fees of transfer any crypto currency, and Yebet does
											not charge any fees about it.</p>
									</div>
								</div>
							</div>
						</div>
					</TabPanel>
				</TabPanels>
			</TabGroup>
		</div>
	</div>

</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
</script>