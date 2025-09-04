import Link from "next/link";

export default async function TopNav({ isLoggedIn }: { isLoggedIn: boolean }) {
    return (
        <header className="sticky top-0 flex items-center justify-between bg-pink-600 p-4 text-white">
            <h1 className="text-2xl">Luci</h1>
            <nav>
                <ul className="flex items-center space-x-4">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/about"}>About</Link>
                    <Link href={"/contact"}>Contact</Link>
                    <Link
                        href={
                            isLoggedIn
                                ? "/api/auth/signout"
                                : "/api/auth/signin"
                        }
                        className="bg-pink-700 p-2"
                    >
                        {isLoggedIn ? "Log Out" : "Sign In"}
                    </Link>
                </ul>
            </nav>
        </header>
    );
}
