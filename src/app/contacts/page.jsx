import Image from "next/image";

const ContactsPages = () => {
	return (
		<section className="content">
			<h2 className="section-title">Contacts Page</h2>
			<p>
				This is the contacts page of our Next.js application. Here you can find
				ways to get in touch with us.
			</p>
			<Image src='/photo.png' alt='photo' width="300" height="400" priority />
			<br />
			<Image src='https://static.wikia.nocookie.net/pogod/images/3/3a/%D0%9F%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0.jpg/revision/latest?cb=20181224151953&path-prefix=ru' alt='photo' width="400" height="260" priority />
		</section>
)
}
export default ContactsPages;
