import type { Session } from "next-auth";
import Link from "next/link";
import DashLink from "./DashLink";

export default async function TopNav({ session }: { session: Session | null }) {
    return (
        <header className="sticky top-0 flex min-w-full items-center justify-between gap-4 bg-pink-600 p-4">
            <h1 className="text-3xl">Luci</h1>
            <nav>
                <ul className="flex items-center space-x-2">
                    <Link
                        href={"/"}
                        className="p-2 transition-all duration-150 hover:bg-pink-700"
                    >
                        Home
                    </Link>
                    <Link
                        href={"/about"}
                        className="p-2 transition-all duration-150 hover:bg-pink-700"
                    >
                        About
                    </Link>
                    <Link
                        href={"/contact"}
                        className="p-2 transition-all duration-150 hover:bg-pink-700"
                    >
                        Contact
                    </Link>

                    <DashLink session={session} />
                </ul>
            </nav>
        </header>
    );
}
