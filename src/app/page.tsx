import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import TopNav from "./_components/topnav";

export default async function Home() {
    const hello = await api.post.hello({ text: "from tRPC" });
    const session = await auth();

    console.log(session?.user, hello?.greeting);

    return (
        <HydrateClient>
            <TopNav session={session} />
            <main>
                <div className="min-h-screen flex flex-row justify-between items-center p-16"> {/* Front Page */}
                    <h1 className="text-4xl font-bold flex-1">Lorem Ipsum</h1>
                    <span className="flex-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quia qui odio facilis doloribus excepturi omnis perferendis cumque expedita voluptate animi mollitia quam earum, nesciunt incidunt dolore nobis recusandae praesentium?</span>
                </div>
                <div className="bg-white text-blue-950 min-h-screen flex flex-row justify-between items-center p-16"> {/* Front Page */}
                    <h1 className="text-4xl font-bold flex-1">Lorem Ipsum</h1>
                    <span className="flex-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quia qui odio facilis doloribus excepturi omnis perferendis cumque expedita voluptate animi mollitia quam earum, nesciunt incidunt dolore nobis recusandae praesentium?</span>
                </div>
                <div className="min-h-screen flex flex-row justify-between items-center p-16"> {/* Front Page */}
                    <h1 className="text-4xl font-bold flex-1">Lorem Ipsum</h1>
                    <span className="flex-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quia qui odio facilis doloribus excepturi omnis perferendis cumque expedita voluptate animi mollitia quam earum, nesciunt incidunt dolore nobis recusandae praesentium?</span>
                </div>
                <div className="bg-white text-blue-950 min-h-screen flex flex-row justify-between items-center p-16"> {/* Front Page */}
                    <h1 className="text-4xl font-bold flex-1">Lorem Ipsum</h1>
                    <span className="flex-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quia qui odio facilis doloribus excepturi omnis perferendis cumque expedita voluptate animi mollitia quam earum, nesciunt incidunt dolore nobis recusandae praesentium?</span>
                </div>
            </main>
        </HydrateClient>
    );
}
