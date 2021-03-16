import React from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => {
            return <Home />
        }
    },
    {
        path: '/contact',
        exact: true,
        main: () => {
            return <Contact />
        }
    },
    {
        path: '/about',
        exact: true,
        main: () => {
            return <About />
        }
    },
    {
        path: '',
        exact: false,
        main: () => {
            return <NotFound />
        }
    },
]

export default routes