import { NextResponse } from 'next/server';
import { getHelloMessage } from '@/lib/hello';
import { createHelloGreeting } from '@/lib/hello';

export async function GET() {
	const data = await getHelloMessage();
	return NextResponse.json(data);
}
export async function POST(request) {
	const { name } = await request.json();
	const greeting = createHelloGreeting(name);
	return NextResponse.json(greeting);
}
