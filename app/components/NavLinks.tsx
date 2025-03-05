"use client"

import {
  faFileInvoice,
  faHome,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from 'tailwind-merge';


const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: faHome,
  },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: faFileInvoice,
  },
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: faUsers,
  },
];

const NavLinks = () => {
    const pathName = usePathname();
    console.log(pathName)
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            href={link.href}
            className={twMerge("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-700 p-3 text-lg text-white font-bold hover:bg-slate-500 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3", pathName === link.href && "bg-slate-500" )}
          >
            <FontAwesomeIcon icon={link.icon} className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
