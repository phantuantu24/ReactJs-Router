import React from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'
import Products from './components/Products/Products'

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
        main: ({ location }) => {
            return <About location={location} />
        }
    },
    {
        path: '/products',
        exact: false,
        main: ({ match }) => {
            return <Products match={match} />
        }
    },
    {
        path: '/login',
        exact: false,
        main: ({ location }) => {
            return <Login location={location} />
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