import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import TopNav from "./_components/topnav";
import Slide from "./_components/slide";

export default async function Home() {
    const hello = await api.post.hello({ text: "from tRPC" });
    const session = await auth();

    console.log(session?.user, hello?.greeting);

    return (
        <HydrateClient>
            <TopNav session={session} />
            <main>
                <Slide
                    title="Lorem Ipsum"
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum rem blanditiis doloribus. Distinctio reprehenderit quibusdam rerum, voluptas, dolorum laborum porro est velit rem omnis laboriosam nostrum cumque aliquid, error pariatur."
                    index={0}
                />
                <Slide
                    title="Lorem Ipsum"
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum rem blanditiis doloribus. Distinctio reprehenderit quibusdam rerum, voluptas, dolorum laborum porro est velit rem omnis laboriosam nostrum cumque aliquid, error pariatur."
                    index={1}
                />
                <Slide
                    title="Lorem Ipsum"
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum rem blanditiis doloribus. Distinctio reprehenderit quibusdam rerum, voluptas, dolorum laborum porro est velit rem omnis laboriosam nostrum cumque aliquid, error pariatur."
                    index={2}
                />
                <Slide
                    title="Lorem Ipsum"
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum rem blanditiis doloribus. Distinctio reprehenderit quibusdam rerum, voluptas, dolorum laborum porro est velit rem omnis laboriosam nostrum cumque aliquid, error pariatur."
                    index={3}
                />
                <Slide
                    title="Lorem Ipsum"
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum rem blanditiis doloribus. Distinctio reprehenderit quibusdam rerum, voluptas, dolorum laborum porro est velit rem omnis laboriosam nostrum cumque aliquid, error pariatur."
                    index={4}
                />
            </main>
        </HydrateClient>
    );
}
