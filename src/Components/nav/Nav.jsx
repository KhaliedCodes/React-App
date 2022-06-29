import React from 'react'
import {Link} from 'react-router-dom'
import Home from '../../Pages/home/Home'

function Nav() {
	return (
		<nav className="nav">
			<Link to={'/'} className="nav-link" >Home</Link>
			<Link to={'/shop'} className="nav-link">Shop</Link>
			<Link to={'counter'}   className="nav-link">Counter</Link>
			<Link to={'/'} className="nav-link">Disabled</Link>
		</nav>

	)
}

export default Nav