"use client";

import Link from "next/link";
import Logo from "../public/Images/karmayogiLogo.svg";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex justify-between items-center bg-white px-14 py-5 border-y-4">
      <Link className="text-white font-bold" href={"/"}>
        <Image alt="logo" src={Logo} width={200} />
      </Link>
      <div>
        {pathname == "/" ? (
          <Link
            className="bg-white p-2 mr-2 font-bold text-blue text-blue-800 underline decoration-2 decoration-yellow-500"
            href={"/"}
          >
            HOME
          </Link>
        ) : (
          <Link
            className="bg-white p-2 mr-2 text-blue hover:text-blue-800 hover:underline decoration-2 decoration-yellow-500"
            href={"/"}
          >
            HOME
          </Link>
        )}

        {pathname == "/dashboard" ? (
          <Link
            className="bg-white p-2 mr-2 font-bold text-blue-800 underline decoration-2 decoration-yellow-500"
            href={"/dashboard"}
          >
            DASHBOARD
          </Link>
        ) : (
          <Link
            className="bg-white p-2 mr-2 hover:text-blue-800 hover:underline decoration-2 decoration-yellow-500"
            href={"/dashboard"}
          >
            DASHBOARD
          </Link>
        )}

        {pathname == "/courses" ? (
          <Link
            className="bg-white p-2 mr-2 font-bold text-blue-800 underline decoration-2 decoration-yellow-500"
            href={"/courses"}
          >
            COURSES
          </Link>
        ) : (
          <Link
            className="bg-white p-2 mr-2 hover:text-blue-800 hover:underline decoration-2 decoration-yellow-500"
            href={"/courses"}
          >
            COURSES
          </Link>
        )}

        {pathname == "/addTopic" ? (
          <Link
            className="bg-white p-2 mr-2 font-bold text-blue-800 underline decoration-2 decoration-yellow-500"
            href={"/addTopic"}
          >
            ADD EDUCATION
          </Link>
        ) : (
          <Link
            className="bg-white p-2 mr-2 hover:text-blue-800 hover:underline decoration-2 decoration-yellow-500"
            href={"/addTopic"}
          >
            ADD EDUCATION
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
