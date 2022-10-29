<template>
	<div class="bg-base-200">
		<div class="max-w-screen-xl mx-auto py-24 px-20">
			<div class="p-4 my-1 flex items-center text-primary-content">
				<svg xmlns="http://www.w3.org/2000/svg" class="fill-primary-content mr-3 w-12 h-12" viewBox="0 0 24 24"
					width="24" height="24">
					<path fill="none" d="M0 0h24v24H0z" />
					<path
						d="M12 .5l4.226 6.183 7.187 2.109-4.575 5.93.215 7.486L12 19.69l-7.053 2.518.215-7.486-4.575-5.93 7.187-2.109L12 .5zM10 12H8a4 4 0 0 0 7.995.2L16 12h-2a2 2 0 0 1-3.995.15L10 12z" />
				</svg>

				<h3 class="text-3xl">OUR <span class="font-black">LEADERBOARD</span></h3>
			</div>
			<div class="bg-base-100 p-5 rounded-xl hover:shadow-lg">
				<table class="table w-[100%] ">
					<!-- head -->
					<thead class="w-[100%] ">
						<tr class=" groupw-[100%] border-b border-base-300 ">
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
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4">
								2294892</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-left text-md  py-4 flex">
								<img src="/src/assets/049-slot-machine.png " alt="" class="w-6 h-6  mr-2 ">
								Slot Game
							</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 text-secondary">
								-510.00</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4">
								1,604.15 </td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 flex">
								<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 " viewBox="0 0 24 24" width="24"
									height="24">
									<path fill="none" d="M0 0h24v24H0z" />
									<path
										d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" />
								</svg> 28s ago
							</td>
						</tr>
						<!-- row 2 -->
						<tr class=" group ">
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4 ">
								2421892</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4 flex">
								<img src="/src/assets/043-roulette.png " alt="" class="w-6 h-6  mr-2 flex">Spin Game
							</td>
							<td class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 my-10
									text-warning">250.00</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4">
								1,604.15 </td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 flex">
								<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 " viewBox="0 0 24 24" width="24"
									height="24">
									<path fill="none" d="M0 0h24v24H0z" />
									<path
										d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" />
								</svg> 28s ago
							</td>
						</tr>
						<!-- row 1 -->
						<tr class=" group ">
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4">
								2294892</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4 flex">
								<img src="/src/assets/034-pool.png " alt="" class="w-6 h-6  mr-2 flex">Bingo Game
							</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 text-secondary">
								-510.00</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4">
								1,604.15 </td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 flex">
								<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 " viewBox="0 0 24 24" width="24"
									height="24">
									<path fill="none" d="M0 0h24v24H0z" />
									<path
										d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" />
								</svg> 28s ago
							</td>
						</tr>
						<!-- row 2 -->
						<tr class=" group ">
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4 ">
								2421892</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4 flex">
								<img src="/src/assets/043-roulette.png " alt="" class="w-6 h-6  mr-2 flex">Spin Game
							</td>
							<td class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 my-10
									text-warning">250.00</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4">
								1,604.15 </td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 flex">
								<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 " viewBox="0 0 24 24" width="24"
									height="24">
									<path fill="none" d="M0 0h24v24H0z" />
									<path
										d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" />
								</svg> 28s ago
							</td>
						</tr>
						<!-- row 3 -->
						<tr class=" group ">
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4">
								2221892</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-left text-md  py-4 flex">
								<img src="/src/assets/049-slot-machine.png " alt="" class="w-6 h-6  mr-2 ">
								Slot Game
							</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 text-secondary">
								-510.00</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4">
								1,604.15 </td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 flex">
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
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4">
								2294892</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4 flex">
								<img src="/src/assets/034-pool.png " alt="" class="w-6 h-6  mr-2 flex">Bingo Game
							</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 text-secondary">
								-510.00</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4">
								1,604.15 </td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 flex">
								<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 " viewBox="0 0 24 24" width="24"
									height="24">
									<path fill="none" d="M0 0h24v24H0z" />
									<path
										d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" />
								</svg> 28s ago
							</td>
						</tr>
						<!-- row 2 -->
						<tr class=" group ">
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4 ">
								2421892</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4 flex">
								<img src="/src/assets/017-poker-cards.png " alt="" class="w-6 h-6  mr-2 flex"> Bacarat
							</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 text-warning">
								250.00</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4">
								1,604.15 </td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 flex">
								<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 " viewBox="0 0 24 24" width="24"
									height="24">
									<path fill="none" d="M0 0h24v24H0z" />
									<path
										d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" />
								</svg> 28s ago
							</td>
						</tr>
						<!-- row 3 -->
						<tr class=" group ">
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4">
								2221892</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4 flex">
								<img src="/src/assets/017-poker-cards.png " alt="" class="w-6 h-6  mr-2 flex"> Bacarat
							</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 text-secondary">
								-510.00</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4">
								1,604.15 </td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 flex">
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
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4 ">
								2421892</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4 flex">
								<img src="/src/assets/043-roulette.png " alt="" class="w-6 h-6  mr-2 flex">Spin Game
							</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 text-warning">
								250.00</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4">
								1,604.15 </td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 flex">
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
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4">
								2221892</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content  text-center text-md py-4 flex">
								<img src="/src/assets/017-poker-cards.png " alt="" class="w-6 h-6  mr-2 flex"> Bacarat
							</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 text-secondary">
								-510.00</td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4">
								1,604.15 </td>
							<td
								class="group-hover:bg-base-300 group-hover:font-bold group-hover:text-primary-content text-center text-md py-4 flex">
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
			</div>
		</div>
	</div>

</template>

<script setup>

</script>
