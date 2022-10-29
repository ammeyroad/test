<template>
	<div class="">
		<div class="max-w-screen-xl mx-auto py-12 px-2">
			<div class="my-1 flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="fill-white mr-3 w-8" viewBox="0 0 24 24" width="24" height="24">
					<path fill="none" d="M0 0h24v24H0z" />
					<path
						d="M17 4a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6v-4a6 6 0 0 1 6-6h10zm-7 5H8v2H6v2h1.999L8 15h2l-.001-2H12v-2h-2V9zm8 4h-2v2h2v-2zm-2-4h-2v2h2V9z" />
				</svg>
				<h3 class="text-2xl text-primary-content">FEATURED <span class="font-black text-primary-content">GAMES</span>
				</h3>
			</div>

			<div class="grid sm:grid-cols-4 grid-cols-2 gap-4">
				<div v-for="(item, i) in game" :key="i" class="">
					<div
						class="overflow-hidden rounded-xl group relative flex flex-col justify-center hover:shadow-lg hover:shadow-warning/50 duration-300 ">
						<img :src="item.imga" alt=""
							class="absolute p-0  mix-blend-mult mix-blend-multiply/40 group-hover:mix-blend-multiply w-full bg-warning rounded-xl group-hover:p-4 duration-300" />
						<div class="py-14 z-20 ">
							<div class="group opacity-0 group-hover:opacity-100 mx-auto text-center text-white">
								<a :href="item.href" class="btn btn-warning animate-heartBeat btn-circle btn-lg my-4">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path fill="none" d="M0 0h24v24H0z" />
										<path
											d="M7.752 5.439l10.508 6.13a.5.5 0 0 1 0 .863l-10.508 6.13A.5.5 0 0 1 7 18.128V5.871a.5.5 0 0 1 .752-.432z" />
									</svg>
								</a>
								<h3 class="text-lg font-black opacity-50 group-hover:opacity-100 uppercase">{{ item.label }}
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>


<script setup>
const game = [
	{ href: '/game-bacarat', label: 'BACARAT', imga: '/src/assets/gc-bacarat.jpg', },
	{ href: '/game-slot', label: 'SLOT', imga: '/src/assets/gc-slot.jpg', },
	{ href: '/game-spin', label: 'SPIN', imga: '/src/assets/gc-spin.jpg', },
	{ href: '/game-bingo', label: 'BINGO', imga: '/src/assets/gc-bingo.jpg', },
	{ href: '/bonus-prediction', label: 'PREDIC', imga: '/src/assets/gc-pred.jpg', },
	{ href: '/bonus-lotre', label: 'Lottery', imga: '/src/assets/gc-pred.jpg', },
	{ href: '#', label: 'SOON', imga: '/src/assets/gc-gamelain.jpg', },
	{ href: '#', label: 'SOON', imga: '/src/assets/gc-bola.jpg', },
]	
</script>
