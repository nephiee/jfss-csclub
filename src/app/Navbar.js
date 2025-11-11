"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const navItems = ["home", "attendence", "team", "timeline"];

const noMenu = () => {
    return (
        <nav className="w-full h-20 p-4 bg-black text-white flex gap-10 items-center">
            <Image src="/logo.webp" alt="Logo" width={160} height={100} className="fit"/>
            <div className="flex items-center w-full gap-10">
                {navItems.map((item) => (
                    <Link
                        key={item}
                        href={`/#${item}`}
                        className="text-lg font-light hover:bg-white hover:text-black px-3 py-2 rounded-md transition duration-300 ease-in-out"
                    >
                        {item}
                    </Link>
                ))}
            </div>
            <div className="w-40 items-center justify-center">
                    <Link
                        key="signin"
                        href="/signin"
                        className="text-lg font-light hover:bg-white hover:text-black px-3 py-2 rounded-md transition duration-300 ease-in-out"
                    >
                        sign in
                    </Link>
            </div>
        </nav>
    )
};

const Menu = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav>
            <div className="w-full h-20 p-4 bg-black text-white flex gap-10 items-center"> 
                <Image src="/logo.webp" alt="Logo" width={160} height={100} className="fit"/>
                <div className="w-full flex justify-end px-5">
                    <button onClick={() => setOpen(!open)}>
                        {open ? (
                            <IoMdClose size={28} color="white"/>
                        ) : (
                            <GiHamburgerMenu size={28} color="white" />
                        )}
                    </button>
                </div>
            </div>
            
            {open && (
                <div className="w-full shadow-black shadow-xl/30">
                    <div className="items-center w-full flex flex-col col-1 gap-3 py-2 px-5 bg-black/75">
                        {navItems.map((item) => (
                            <Link
                                key={item}
                                href={`/#${item}`}
                                className="w-full text-lg font-light text-white hover:bg-white hover:text-black rounded-md transition duration-300 ease-in-out"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                    <div className="items-center w-full flex flex-col col-1 pb-5 bg-black/75">
                            <Link
                                key="signin"
                                href="/signin"
                                className="text-lg font-light text-white hover:bg-white hover:text-black rounded-md transition duration-300 ease-in-out"
                            >
                                sign in
                            </Link>
                    </div>
                </div>
                )}
        </nav>
    )
};

const Navbar = () => {
    
    return (
        <div className="w-full h-full">
            <div className="hidden md:block">
                {noMenu()}
            </div>
            <div className="block md:hidden">
                {Menu()}
            </div>
        </div>
    );


}

export default Navbar;