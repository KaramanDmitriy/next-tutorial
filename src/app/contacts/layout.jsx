export const metadata = {
    title: 'Contacts page',
    description: 'My Contacts page',
};

export default function Layout ({ children }) {
	return (
		<div className="bordered-wrapper">
			{children}
		</div>
	)
}
