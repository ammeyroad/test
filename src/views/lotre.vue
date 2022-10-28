<template>
	<main class="max-w-screen-lg mx-auto">
		<h3 class=" px-4 text-3xl text-primary-content">Lottery Jackpot</h3>
		<BonusLotre />
		<div class="px-4">
			<div class="my-1 flex items-center">
				<h3 class="text-3xl text-secondary mt-2">Your<span class="font-black"> ACTIVITY</span></h3>
			</div>
			<div class="bg-base-200 gap-4 p-5 py-12 rounded-xl">
				<div class="flex items-end gap-4 space-x-4">
					<div class="form-control w-1/3"><label class="label"><span class="label-text">Amount</span><span
								class="label-text-alt">20
								chips</span></label><input type="text" placeholder="Type here" class="input input-bordered w-full" />
					</div><button class="btn btn-square">x</button>
					<div class="form-control w-1/3"><label class="label"><span class="label-text">Total
								Price</span></label><input type="text" placeholder="12"
							class="input input-bordered w-full text-center" /></div><button class="btn btn-warning w-1/3">buy
						coupon</button>
				</div>
				<p class="text-sm mt-8">Purchase raffle tickets. A random ticket will be drawn at the end of the raffle. The
					ticket owner will win the pot, which equals 95.00% of all purchased tickets value. The more tickets you
					purchase, the more chances you have to win.</p>
			</div>
		</div>
		<div class="md:flex gap-5 md:space-x-4 p-4 md:px-4">
			<div class="md:w-2/3 w-full space-y-3">
				<div class="my-1 flex items-center">
					<h3 class="text-2xl text-primary-content mt-5">How<span class="font-black">To Play</span></h3>
				</div>
				<div class="md:flex md:space-x-4 text-black">
					<div class="group md:w-1/3 mb-4 bg-secondary rounded-xl hover:shadow-xl px-8 py-5 pb-10 space-y-4">
						<img class="w-16 group-hover:scale-110 duration-300" src="/src/assets/021-wallet.png" alt="illustration"
							loading="lazy">
						<h3 class="text-2xl font-semibold text-black">BUY TICKET</h3>
						<p>Be active in chat and take a chance to get up to 100 credits in reward.</p>
					</div>
					<div class="group md:w-1/3 mb-4 bg-secondary rounded-xl hover:shadow-xl px-8 py-5 pb-10 space-y-4">
						<img class="w-16 group-hover:scale-110 duration-300" src="/src/assets/021-wallet.png" alt="illustration"
							loading="lazy">
						<h3 class="text-2xl font-semibold text-black">WAIT A DRAW</h3>
						<p>Be active in chat and take a chance to get up to 100 credits in reward.</p>
					</div>
					<div class="group md:w-1/3 mb-4 bg-secondary rounded-xl hover:shadow-xl px-8 py-5 pb-10 space-y-4">
						<img class="w-16 group-hover:scale-110 duration-300" src="/src/assets/021-wallet.png" alt="illustration"
							loading="lazy">
						<h3 class="text-2xl font-semibold text-black">CHECK PRIZE</h3>
						<p>Be active in chat and take a chance to get up to 100 credits in reward.</p>
					</div>
				</div>
				<div class="p-1">
					<h3 class="text-primary-content"><br>Lottery Instructions:</h3>
					<p>A provably fair algorithm is used to draw the lottery prizes.
						Prizes are drawn at 15:00 UTC+0 everyday.
						You can buy a ticket for$0.1. The sale of tickets stop at 14:55 UTC+0 everyday.
						The player chooses six numbers for each ticket,the first five are from 1 to 36,and the last
						one is from
						1
						to
						10.
						You can choose numbers manually or automatically.
						If you have BCL,you can use BCL to redeem Tickets.
						Each draw produces six numbers.
						The more numbers you match in the first five numbers,greater prize you will win.</p>
					<h3 class="text-primary-content"><br>Winning Prize Details:</h3>
					<p>All six numbers matched:$100,000 prize. In case you are not the only winner,you may need to
						share the
						prize
						equally with others.
						Five numbers matched,and the sixth number is missed:Each ticket gets a$3,000 prize.
						Four of the first 5 numbers matched:Each ticket gets a$20 prize.
						Three of the first 5 numbers matched:Each ticket gets a$1 prize.
						If all six numbers are missed,the lottery will be reserved for free,and continue
						participating in the
						next
						day's draw.</p>
				</div>
			</div>
			<div class="md:w-1/3 my-5 w-full space-y-3">
				<div class="my-1 flex items-center">
					<h3 class="text-2xl mt-3 text-primary-content">Participant</h3>
				</div>
				<div class="hover:bg-base-200 bg-base-200/30 rounded-xl duration-300">
					<div class="p-4">
						<p class="text-warning">Mr. Emery Maggio</p>
						<div class="card-actions mt-2 justify-between items-center">
							<div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
									stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
									<path stroke-linecap="round" stroke-linejoin="round"
										d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<p class="text-xs">2 Minute ago</p>
							</div><button class="btn btn-xs btn-warning">30 ticket</button>
						</div>
					</div>
				</div>
				<div class="hover:bg-base-200 bg-base-200/30 rounded-xl duration-300">
					<div class="p-4">
						<p class="text-warning">Mr. Emery Maggio</p>
						<div class="card-actions mt-2 justify-between items-center">
							<div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
									stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
									<path stroke-linecap="round" stroke-linejoin="round"
										d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<p class="text-xs">2 Minute ago</p>
							</div><button class="btn btn-xs btn-warning">30 ticket</button>
						</div>
					</div>
				</div>
				<div class="hover:bg-base-200 bg-base-200/30 rounded-xl duration-300">
					<div class="p-4">
						<p class="text-warning">Mr. Emery Maggio</p>
						<div class="card-actions mt-2 justify-between items-center">
							<div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
									stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
									<path stroke-linecap="round" stroke-linejoin="round"
										d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<p class="text-xs">2 Minute ago</p>
							</div><button class="btn btn-xs btn-warning">30 ticket</button>
						</div>
					</div>
				</div>
				<div class="hover:bg-base-200 bg-base-200/30 rounded-xl duration-300">
					<div class="p-4">
						<p class="text-warning">Mr. Emery Maggio</p>
						<div class="card-actions mt-2 justify-between items-center">
							<div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
									stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
									<path stroke-linecap="round" stroke-linejoin="round"
										d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<p class="text-xs">2 Minute ago</p>
							</div><button class="btn btn-xs btn-warning">30 ticket</button>
						</div>
					</div>
				</div>
				<div class="hover:bg-base-200 bg-base-200/30 rounded-xl duration-300">
					<div class="p-4">
						<p class="text-warning">Mr. Emery Maggio</p>
						<div class="card-actions mt-2 justify-between items-center">
							<div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
									stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
									<path stroke-linecap="round" stroke-linejoin="round"
										d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<p class="text-xs">2 Minute ago</p>
							</div><button class="btn btn-xs btn-warning">30 ticket</button>
						</div>
					</div>
				</div>
				<div class="hover:bg-base-200 bg-base-200/30 rounded-xl duration-300">
					<div class="p-4">
						<p class="text-warning">Mr. Emery Maggio</p>
						<div class="card-actions mt-2 justify-between items-center">
							<div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
									stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
									<path stroke-linecap="round" stroke-linejoin="round"
										d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<p class="text-xs">2 Minute ago</p>
							</div><button class="btn btn-xs btn-warning">30 ticket</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script setup>
import BonusLotre from '../components/bonus-big.vue';

</script>