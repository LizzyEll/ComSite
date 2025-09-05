"use client";

import Link from "next/link";
import Image from "next/image";
import type { Session } from "next-auth";
import { useState } from "react";

export default function DashLink({ session }: { session: Session | null }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleSubMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className="">
            {session ? (
                <>
                    <Image
                        src={session?.user.image ?? ""}
                        alt="User pfp"
                        width={40}
                        height={40}
                        onClick={toggleSubMenu}
                        className="cursor-pointer rounded-full border-2 border-blue-950"
                    ></Image>
                    <div
                        className="absolute right-4 w-32 rounded-sm rounded-tr-none border-0 bg-pink-700"
                        hidden={!menuOpen}
                        id="submenu"
                    >
                        <Link
                            href={"/dashboard"}
                            className="block w-full p-2 text-center transition-all duration-150 hover:bg-pink-600"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href={"/profile"}
                            className="block w-full p-2 text-center transition-all duration-150 hover:bg-pink-600"
                        >
                            Profile
                        </Link>
                        <Link
                            href={"/settings"}
                            className="block w-full p-2 text-center transition-all duration-150 hover:bg-pink-600"
                        >
                            Settings
                        </Link>
                        <Link
                            href={"/api/auth/signout"}
                            className="block w-full rounded-b-sm p-2 text-center transition-all duration-150 hover:bg-pink-600"
                        >
                            Sign Out
                        </Link>
                    </div>
                </>
            ) : (
                <Link
                    href={session ? "/dashboard" : "/api/auth/signin"}
                    className={"bg-pink-700 p-2"}
                >
                    Sign In
                </Link>
            )}
        </div>
    );
}
