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
                <div className="flex min-h-[calc(100vh-56px)] flex-row items-center justify-between p-16">
                    {" "}
                    {/* Front Page */}
                    <h1 className="flex-1 text-4xl font-bold">Lorem Ipsum</h1>
                    <span className="flex-1">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repellendus quia qui odio facilis doloribus
                        excepturi omnis perferendis cumque expedita voluptate
                        animi mollitia quam earum, nesciunt incidunt dolore
                        nobis recusandae praesentium?
                    </span>
                </div>
                <div className="flex min-h-screen flex-row items-center justify-between bg-white p-16 text-blue-950">
                    {" "}
                    {/* Front Page */}
                    <h1 className="flex-1 text-4xl font-bold">Lorem Ipsum</h1>
                    <span className="flex-1">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repellendus quia qui odio facilis doloribus
                        excepturi omnis perferendis cumque expedita voluptate
                        animi mollitia quam earum, nesciunt incidunt dolore
                        nobis recusandae praesentium?
                    </span>
                </div>
                <div className="flex min-h-screen flex-row items-center justify-between p-16">
                    {" "}
                    {/* Front Page */}
                    <h1 className="flex-1 text-4xl font-bold">Lorem Ipsum</h1>
                    <span className="flex-1">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repellendus quia qui odio facilis doloribus
                        excepturi omnis perferendis cumque expedita voluptate
                        animi mollitia quam earum, nesciunt incidunt dolore
                        nobis recusandae praesentium?
                    </span>
                </div>
                <div className="flex min-h-screen flex-row items-center justify-between bg-white p-16 text-blue-950">
                    {" "}
                    {/* Front Page */}
                    <h1 className="flex-1 text-4xl font-bold">Lorem Ipsum</h1>
                    <span className="flex-1">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repellendus quia qui odio facilis doloribus
                        excepturi omnis perferendis cumque expedita voluptate
                        animi mollitia quam earum, nesciunt incidunt dolore
                        nobis recusandae praesentium?
                    </span>
                </div>
            </main>
        </HydrateClient>
    );
}
