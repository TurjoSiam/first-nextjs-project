"use client"

import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="w-full px-20 py-5 bg-zinc-100 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-orange-600">TS Blog</Link>
            <div>
                <Link className="mr-5" href="/">Home</Link>
                <Link href="/profile">Profile</Link>
            </div>
            <button className="btn">Login</button>
        </nav>
    );
};

export default Navbar;