import Link from "next/link";

const Navigation =() => {
	return (
		<nav className="navigation container">
			<Link className="nav-link" href="/">Home</Link>
			<Link className="nav-link" href="/about">About</Link>
			<Link className="nav-link" href="/users">Users</Link>
			<Link className="nav-link" href="/getExample">Get</Link>
			<Link className="nav-link" href="/postExample">Post</Link>
			<Link className="nav-link" href="/contacts">Contacts</Link>
		</nav>
	)
}
export default Navigation;
