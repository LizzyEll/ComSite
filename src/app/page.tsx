import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import TopNav from "./_components/topnav";

export default async function Home() {
    const hello = await api.post.hello({ text: "from tRPC" });
    const session = await auth();

    console.log(session?.user, hello?.greeting);

    return (
        <HydrateClient>
            <TopNav isLoggedIn={!!session} />
            <main>
                <h1>Hello, World!</h1>
            </main>
        </HydrateClient>
    );
}
