import { HydrateClient } from "~/trpc/server";
import TopNav from "../_components/topnav";
import { auth } from "~/server/auth";
import Link from "next/link";

export default async function Dashboard() {
    const session = await auth();

    if (!session) {
        return (
            <HydrateClient>
                <TopNav session={null} />
                <main className="flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h1 className="p-16 text-4xl font-bold">
                            Access Denied
                        </h1>
                        <p className="text-lg">
                            You must be signed in to view this page.
                        </p>
                        <Link
                            href={"/"}
                            className="w-full rounded-2xl border-2 border-white py-4 text-center transition-all duration-150 hover:bg-indigo-950"
                        >
                            Go Back
                        </Link>
                    </div>
                </main>
            </HydrateClient>
        );
    }
    return (
        <HydrateClient>
            <TopNav session={session} />
            <main>
                <h1 className="p-4 text-center text-4xl font-bold">
                    Dashboard
                </h1>
            </main>
        </HydrateClient>
    );
}
