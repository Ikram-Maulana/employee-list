import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav>
      <div className="logo">
        <Image
          src="/logo.png"
          width={128}
          height={77}
          alt="Employee List Logo"
        />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/employee">
        <a>Employee List</a>
      </Link>
    </nav>
  );
};

export default Navbar;
