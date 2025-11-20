import Link from "next/link";

async function getUser() {
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
		if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
		return res.json();
	} catch (err) {
		console.error('getUser error', err);
		throw err;
	}
}

const UserItem = ({user}) => {
	return (
		<Link href={`/users/${user.id}`} className="item">
			<div>
				<div className="item-title">{`${user.id}. ${user.name}`}</div>
				<div className="item-sub">{user.email}</div>
			</div>
			<span aria-hidden>→</span>
		</Link>
	)
}

const UsersPage = async () => {
	const users = await getUser();

	return <section className="content">
		<h2>Users Page</h2>
		<p>
			This is the users page of our Next.js application. Here you can find a list of users.
		</p>
		<div className="users-list">
			{users.map((user) => {
			return <UserItem key={user.id} user={user} />
			})}
		</div>


	</section>
}
export default UsersPage;
