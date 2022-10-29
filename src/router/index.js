import {
	createRouter,
	createWebHistory
} from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [{
		name: 'Home',
		path: '/',
		component: Home
	},
	{
		name: 'user',
		path: '/user',
		component: () => import('@/views/user.vue')
	},
	{
		name: 'user-deposit',
		path: '/user-deposit',
		component: () => import('@/views/user-deposit.vue')
	},
	{
		name: 'user-withdraw',
		path: '/user-withdraw',
		component: () => import('@/views/user-withdraw.vue')
	},
	{
		name: 'user-transaction',
		path: '/user-transaction',
		component: () => import('@/views/user-transaction.vue')
	},
	{
		name: 'user-refferral',
		path: '/user-refferral',
		component: () => import('@/views/user-refferral.vue')
	},
	{
		name: 'user-login',
		path: '/user-login',
		component: () => import('@/views/user-login.vue')
	},
	{
		name: 'aboutus',
		path: '/aboutus',
		component: () => import('@/views/aboutus.vue')
	},
	{
		name: 'bonus',
		path: '/bonus',
		component: () => import('@/views/bonus.vue')
	},
	{
		name: 'bonus-lotre',
		path: '/bonus-lotre',
		component: () => import('@/views/bonus-lotre.vue')
	},
	{
		name: 'fairness',
		path: '/fairness',
		component: () => import('@/views/fairness.vue')
	},
	{
		name: 'leaderboard',
		path: '/leaderboard',
		component: () => import('@/views/leaderboard.vue')
	},
	{
		name: 'sport',
		path: '/sport',
		component: () => import('@/views/sport.vue')
	},
	{
		name: 'g-baccarat',
		path: '/g-baccarat',
		component: () => import('@/views/g-baccarat.vue')
	},
	{
		name: 'g-slot',
		path: '/g-slot',
		component: () => import('@/views/g-slot.vue')
	},
	{
		name: 'g-spin',
		path: '/g-spin',
		component: () => import('@/views/g-spin.vue')
	},
	{
		name: 'g-bingo',
		path: '/g-bingo',
		component: () => import('@/views/g-bingo.vue')
	},
	{
		name: 'g-prediction',
		path: '/g-prediction',
		component: () => import('@/views/g-prediction.vue')
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