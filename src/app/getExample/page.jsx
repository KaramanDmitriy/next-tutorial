import ButtonGetReq from "@/components/ButtonGetReq";
import { getHelloMessage } from "@/lib/hello";

// async function getMessage(params) {
// 	const res = await fetch(`${process.env.NEXT_URL}/api/hello`, { cache: 'no-store' })
// 	return res.json();
// }

const GetExample = async () => {
	const {message} = await getHelloMessage()
	return (
		<section className="content">
			<h2>Get Example Page</h2>
			{message && <p>{message}</p>}
			<ButtonGetReq />
		</section>
	)
}
export default GetExample;
