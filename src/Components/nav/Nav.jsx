import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
	return (
		<nav className="nav">
			<Link to={'/'} className="nav-link" >Home</Link>
			<Link to={'/shop'} className="nav-link">Shop</Link>
			<Link to={'counter'}   className="nav-link">Counter</Link>
			<Link to={'/todo'} className="nav-link">Todo</Link>
		</nav>

	)
}

export default Nav