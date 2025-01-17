import { useRouter } from 'next/router';

const Page = () => {
    const router = useRouter();
    console.log(router);

    return (
        <div>
            <h1>This is index page for {router.query.username}</h1>
            <button onClick={e => router.push()}>Open Settings Page</button>
        </div>
    )
}

export default Page