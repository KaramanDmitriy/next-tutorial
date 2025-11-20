'use client';

const ButtonGetReq = () => {
    const clickHandler = async () => {
        const res = await fetch(`/api/hello`, { cache: 'no-store' })
        const { message } = await res.json();
        alert(message)
    }
    return (
        <button className="btn btn-ghost" onClick={clickHandler}>Click me (click event)</button>
    )
}

export default ButtonGetReq;
