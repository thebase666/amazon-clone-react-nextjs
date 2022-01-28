import React from 'react'
import Image from "next/image"
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { selectItems } from "../slices/basketSlice"

function Header() {
    const router = useRouter();
    const items = useSelector(selectItems);

    return (
        <div>
            <div className="flex items-center flex-grow p-1 py-2 bg-amazon_blue">
                <div className="flex items-center flex-grow mt-2 sm:flex-grow-0">
                    <Image
                        onClick={() => router.push("/")}
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>

                <div className="items-center flex-grow hidden h-10 bg-yellow-400 rounded-md cursor-pointer sm:flex hover:bg-yellow-500">
                    <input className="flex-grow w-6 h-full p-2 rounded-l-md focus:outline-none" type="text" />
                    {/*  focus:outline-none输入的外框*/}
                    <SearchIcon className="h-12 p-4" />
                </div>

                <div className="flex items-center mx-6 space-x-6 text-xs text-white whitespace-nowrap">
                    {/* whitespace-nowrap 不换行 */}
                    {/* <div onClick={!session ? signIn : signOut} className="link"> */}
                    <div className="link">
                        <p> Sign In</p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>
                    <div onClick={() => router.push("/checkout")} className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div onClick={() => router.push("/checkout")} className="relative flex items-center link">
                        <span className="absolute top-0 right-0 w-4 h-4 font-bold text-center text-black bg-yellow-400 rounded-full md:right-10">{items.length}</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline h-8font-extrabold md:text-sm">Basket</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center p-2 pl-6 space-x-3 text-sm text-white bg-amazon_blue-light">
                <p className="flex items-center link"><MenuIcon className="h-6 mr-1" />All</p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's Deals</p>
                <p className="hidden link lg:inline">Electronics</p>
                <p className="hidden link lg:inline">Food & Grocery</p>
                <p className="hidden link lg:inline">Prime</p>
                <p className="hidden link lg:inline">Buy Again</p>
                <p className="hidden link lg:inline">Shopper ToolKit</p>
                <p className="hidden link lg:inline">Health & Personal Care</p>
            </div>
        </div>
    )
}

export default Header
