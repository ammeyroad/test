<script setup>
const user = [
	{
		href: "/profile",
		label: "profile",
		icon: "fab fa-github text-gray-800",
	},
	{
		href: "/Affiliatte",
		label: "Affiliatte",
		icon: "fab fa-instagram",
	},
	{
		href: "/bonus",
		label: "Bonus",
		icon: "fab fa-instagram",
	},
	{
		href: "/sign-out",
		label: "Sign out",
		icon: "fab fa-instagram",
	},
];

const coin = [
	{
		href: "/deposit",
		label: "Deposit",
		icon: "fab fa-github text-gray-800",
	},
	{
		href: "/withdraw",
		label: "Withdraw",
		icon: "fab fa-github text-gray-800",
	},
	{
		href: "/transaction",
		label: "Transaction",
		icon: "fab fa-github text-gray-800",
	},
];
</script>

<template>
	<div
		class="navbar sticky top-0 bg-base-200 px-8 py-5 z-40"
	>
		<div class="flex-1">
			<div
				class="btn-group p-1 bg-base-300 rounded-xl"
			>
				<button
					class="btn btn-sm btn-secondary rounded-full gap-1"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="16"
						height="16"
					>
						<path
							fill="none"
							d="M0 0h24v24H0z"
						/>
						<path
							d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-14.243L7.757 12 12 16.243 16.243 12 12 7.757z"
							fill="rgba(255,255,255,1)"
						/>
					</svg>
					casino
				</button>
				<button
					class="btn btn-sm rounded-full gap-1"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="16"
						height="16"
					>
						<path
							fill="none"
							d="M0 0h24v24H0z"
						/>
						<path
							d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm1.67 14h-3.34l-1.38 1.897.554 1.706A7.993 7.993 0 0 0 12 20c.871 0 1.71-.14 2.496-.397l.553-1.706L13.669 16zm-8.376-5.128l-1.292.937L4 12c0 1.73.549 3.331 1.482 4.64h1.91l1.323-1.82-1.028-3.17-2.393-.778zm13.412 0l-2.393.778-1.028 3.17 1.322 1.82h1.91A7.964 7.964 0 0 0 20 12l-.003-.191-1.291-.937zM14.29 4.333L13 5.273V7.79l2.694 1.957 2.239-.727.554-1.703a8.014 8.014 0 0 0-4.196-2.984zm-4.582 0a8.014 8.014 0 0 0-4.196 2.985l.554 1.702 2.239.727L11 7.79V5.273l-1.291-.94z"
							fill="rgba(255,255,255,1)"
						/>
					</svg>
					sport
				</button>
			</div>
			<BackBtn />
		</div>
		<div class="flex-none gap-2">
			<div
				class="bg-black/30 rounded-xl items-center"
			>
				<div
					class="dropdown dropdown-end dropdown-hover"
				>
					<label
						tabindex="0"
						class="btn btn-outline text-secondary hover:text-white border-0 text-xl"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6 mr-2"
						>
							<path
								fill-rule="evenodd"
								d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 7.5A.75.75 0 009 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 009 12h3.622a2.251 2.251 0 01-2.122 1.5H9a.75.75 0 00-.53 1.28l3 3a.75.75 0 101.06-1.06L10.8 14.988A3.752 3.752 0 0014.175 12H15a.75.75 0 000-1.5h-.825A3.733 3.733 0 0013.5 9H15a.75.75 0 000-1.5H9z"
								clip-rule="evenodd"
							/>
						</svg>
						2.000.000</label
					>
					<ul
						class="dropdown-content menu p-2 shadow bg-base-300 rounded-xl w-52"
					>
						<li
							v-for="(item, i) in coin"
							:key="i"
							class="flex"
						>
							<a :href="item.href" class="">
								<i :class="item.icon"></i>
								{{ item.label }}
							</a>
						</li>
					</ul>
				</div>
				<div
					class="dropdown dropdown-end dropdown-hover"
				>
					<label
						tabindex="0"
						class="btn btn-secondary btn-square"
					>
						<div class="avatar">
							<div class="w-7 rounded-xl">
								<img
									src="https://placeimg.com/192/192/people"
								/>
							</div>
						</div>
					</label>
					<ul
						class="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52"
					>
						<li
							v-for="(item, i) in user"
							:key="i"
							class="flex"
						>
							<a :href="item.href" class="">
								<i :class="item.icon"></i>
								{{ item.label }}
							</a>
						</li>
					</ul>
				</div>
			</div>

			<button
				class="btn btn-ghost btn-square btn-active"
			>
				<div class="indicator">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
						/>
					</svg>
				</div>
			</button>
		</div>
	</div>
</template>
