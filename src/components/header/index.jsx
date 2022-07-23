import { NavLink } from 'react-router-dom';
import './style.css';

const Header = () => (
	<header className="header">
		<nav>
			<NavLink 
				className={({ isActive }) =>
				isActive ? "active" : undefined
				} 
				to="/">
				Why React?
			</NavLink>
			<NavLink 
				className={({ isActive }) =>
				isActive ? "active" : undefined
				} 
				to="/example-1">
				Example 1
			</NavLink>
			<NavLink 
				className={({ isActive }) =>
				isActive ? "active" : undefined
				} 
				to="/example-2">
				Example 2
			</NavLink>
			<NavLink 
				className={({ isActive }) =>
				isActive ? "active" : undefined
				} 
				to="/example-3">
				Example 3
			</NavLink>
		</nav>
	</header>
);

export default Header;