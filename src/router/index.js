import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
	{
		name: 'Home',
		path: '/',
		component: Home 
	},
	{
		name: 'beranda',
		path: '/beranda',
		component: () => import('@/views/beranda.vue')
	},
	{
		name: 'About',
		path: '/about',
		component: () => import('@/views/About.vue')
	},
	{
		name: 'Aboutus',
		path: '/aboutus',
		component: () => import('@/views/AboutUs.vue')
	},
	{
		name: 'User',
		path: '/user',
		component: () => import('@/views/User.vue')
	},
	{
		name: 'user-refferral',
		path: '/refferral',
		component: () => import('@/views/user-refferral.vue')
	},
	{
		name: 'lotre',
		path: '/lotre',
		component: () => import('@/views/lotre.vue')
	},
	{
		name: 'bonus-prediksi',
		path: '/bonus-prediksi',
		component: () => import('@/views/bonus-prediksi.vue')
	},

	{
		name: 'games-spin',
		path: '/games-spin',
		component: () => import('@/views/games-spin.vue')
	},
	{
		name: 'games-slot',
		path: '/games-slot',
		component: () => import('@/views/games-slot.vue')
	},
	{
		name: 'games-bingo',
		path: '/games-bingo',
		component: () => import('@/views/games-bingo.vue')
	},
	{
		name: 'games-bacarat',
		path: '/games-bacarat',
		component: () => import('@/views/games-bacarat.vue')
	},
	{
		name: 'test',
		path: '/test',
		component: () => import('@/views/test.vue')
	},
	{
		name: 'Blank',
		path: '/blank',
		component: () => import('@/views/Blank.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
