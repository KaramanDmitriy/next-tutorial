export function getHelloMessage(params) {
	return { message: 'Hello from shared module' };
}
export function createHelloGreeting(name) {
	return { message: `Hello, ${name}! Welcome to our application.` };
}
