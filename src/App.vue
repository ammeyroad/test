<template>
	<main>
		<div class="flex">
			<Test />
			<div class="w-full">
				<headerr />
				<div class="">
					<router-view></router-view>
				</div>
			</div>


		</div>

	</main>
</template>

<script setup>
import headerr from './components/headerr.vue';
import Test from './views/test.vue';

</script>


