import type { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function TopNav({ session }: { session: Session | null }) {
    return (
        <header className="fixed min-w-full flex items-center justify-between bg-pink-600 p-4 gap-4">
            <h1 className="text-2xl">Luci</h1>
            <nav>
                <ul className="flex items-center space-x-2">
                    <Link href={"/"} className="p-2 hover:bg-pink-700 transition-all duration-150">Home</Link>
                    <Link href={"/about"} className="p-2 hover:bg-pink-700 transition-all duration-150">About</Link>
                    <Link href={"/contact"} className="p-2 hover:bg-pink-700 transition-all duration-150">Contact</Link>
                    <Link
                        href={
                            session
                                ? "/dashboard"
                                : "/api/auth/signin"
                        }
                        className="bg-pink-700"
                    >
                        
                        {session ? (<Image src={session?.user.image ?? ""} alt="User pfp" width={40} height={40}></Image>) : "Sign In"}
                    </Link>
                </ul>
            </nav>
        </header>
    );
}
