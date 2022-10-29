<template>
	<main>
		<div class="drawer drawer-mobile">
			<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
			<div class="drawer-content flex flex-col ">
				<KepalaAtas />
				<router-view></router-view>



			</div>
			<KepalaSamping />
		</div>
	</main>
</template>

<script setup>
import KepalaAtas from './components/kepala-atas.vue';
import KepalaSamping from './components/kepala-samping.vue';


</script>


