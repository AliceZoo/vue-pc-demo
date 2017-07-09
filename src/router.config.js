import Home from './components/Home.vue'

import About from './components/About.vue'

import Profile from './components/company/Profile.vue'
import Framework from './components/company/Framework.vue'
import Culture from './components/company/Culture.vue'
import Qualifications from './components/company/Qualifications.vue'
import Technology from './components/company/Technology.vue'

import Project from './components/Project.vue'

import Case from './components/project/Case.vue'
import Architecture from './components/project/Architecture.vue'
import Finance from './components/project/Finance.vue'
import Agriculture from './components/project/Agriculture.vue'
import Digital from './components/project/Digital.vue'

import News from './components/News.vue'

import Company from './components/news/Company.vue'
import Industry from './components/news/Industry.vue'
import Inside from './components/news/Inside.vue'

import Contact from './components/Contact.vue'

export default[{
	path:'*',
	component: Home
},{
	path:'/',
	redirect: '/home'
},{
	path:'/about',
	component: About,
	redirect: '/about/Profile',
	children: [
		{
			path:'/about/Profile',
			component: Profile
		},
		{
			path:'/about/Framework',
			component: Framework
		},
		{
			path:'/about/Culture',
			component: Culture
		},
		{
			path:'/about/Qualifications',
			component: Qualifications
		},
		{
			path:'/about/Technology',
			component: Technology
		}
	]
},{
	path:'/project',
	component: Project,
	redirect: '/project/case',
	children: [
		{
			path:'/project/case',
			component: Case
		},
		{
			path:'/project/architecture',
			component: Architecture
		},
		{
			path:'/project/finance',
			component: Finance
		},
		{
			path:'/project/agriculture',
			component: Agriculture
		},
		{
			path:'/project/digital',
			component: Digital
		}
	]
},{
	path:'/news',
	component: News,
	redirect: '/news/company',
	children: [
		{
			path: '/news/company',
			component: Company
		},
		{
			path: '/news/industry',
			component: Industry
		}
	]
},{
	path:'/contact',
	component: Contact
},
  {
    path:'/news/company/inside/:id',
    component:Inside,
  },
]
