import { notFound } from "next/navigation";

async function getUser(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { cache: 'no-store' });
    if (res.status === 404) notFound();
	if (!res.ok) {
        throw new Error('Failed to fetch users');
    }
    return res.json();
}

const UsersPage = async ({ params }) => {
    const { id } = await params;

    const user = await getUser(id);
    console.log('user', user);
    return (
        <section>
            <h2 className="section-title">User #{user.id}</h2>
			<div className="card card--user-details">
				<span className="muted">Name:</span>
				<span>{user.name}</span>
				<span className="muted">Username:</span>
				<span>{user.username}</span>

			</div>

        </section>
    )
}

export default UsersPage;
