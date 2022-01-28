import React, { useState } from 'react'
import Image from "next/image"
import { StarIcon } from "@heroicons/react/solid"
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux"
import { addToBasket } from "../slices/basketSlice"

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );//每次刷新页面重新随机 1 2 3 4 5    useState没第二个参数
    const [hasPrime] = useState(Math.random() < 0.5);

    const dispatch = useDispatch();

    const addItemTobasket = () => {
        const product = { id, title, price, rating, description, category, image, hasPrime };
        dispatch(addToBasket(product));
    };

    return (
        <div className="relative z-30 flex flex-col p-10 m-5 bg-white">
            <p className="absolute text-xs italic text-gray-400 top-2 right-2">{category}</p>
            <Image src={image} height={200} width={200} objectFit="contain" />
            <h4 className="my-3">{title}</h4>
            {/*  console.log(Array(5).fill()); [ undefined, undefined, undefined, undefined, undefined ] */}
            <div className="flex">
                {Array(rating).fill().map((_, i) => (
                    <StarIcon key={i} className="h-5 text-yellow-500" />//看视频有key没
                ))}
            </div>

            <p className="my-2 text-xs line-clamp-2">{description}</p>
            {/* line-clamp-2 这个位置要用插件 tail的  */}

            <div className="mb-5">
                <Currency quantity={price} currency="USD" />
            </div>

            {hasPrime && (
                <div className="flex items-center -mt-5 space-x-2">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                    <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}

            <button onClick={addItemTobasket} className="mt-auto button">Add to Basket</button>
            {/* mt-auto 可跟其他的同类对齐 */}
        </div>
    )
}

export default Product
