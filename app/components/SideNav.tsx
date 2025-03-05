import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./Logo";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./NavLinks";
import Link from "next/link";

const SideNav = () => {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <a href="#" className="mb-2 flex h-20 items-end justify-start bg-slate-900 p-4 md:h-40">
                <div className="w-32 text-white md:w-40">
                    <Logo />
                </div>
            </a>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow md:block"></div>
                <Link href="/" className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-500 p-3 text-lg text-white font-bold hover:bg-slate-400 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3">
                <FontAwesomeIcon icon={faPowerOff} className="w-6" />
                <p className="hidden md:block">Logout</p>
                </Link>
            </div>
        </div>
    );
};

export default SideNav;