
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";



const Navbar = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();


    return (
        <nav className="w-full px-20 py-5 bg-zinc-100 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-orange-600">TS Blog</Link>
            <div>
                <Link className="mr-5" href="/">Home</Link>
                {
                    user && <Link href="/profile">Profile</Link>
                }
            </div>
            <div className="flex items-center gap-2">

                {
                    user ? <><LogoutLink className="px-4 py-2 rounded-lg bg-orange-300 hover:bg-orange-200">Logout</LogoutLink></> : <><LoginLink className="px-4 py-2 rounded-lg bg-orange-300 hover:bg-orange-200">Login</LoginLink>
                        <RegisterLink className="px-4 py-2 rounded-lg bg-orange-300 hover:bg-orange-200">Register</RegisterLink></>
                }


            </div>
        </nav>
    );
};

export default Navbar;