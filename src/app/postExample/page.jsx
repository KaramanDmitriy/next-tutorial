import { createHelloGreeting } from "@/lib/hello";



const PostExample = async () => {
	const {message} = await createHelloGreeting("Dima");
	return (
		<section className="content">
			<h2>Post Example Page</h2>
			{message && <p>{message}</p>}
		</section>
	)
}
export default PostExample;
