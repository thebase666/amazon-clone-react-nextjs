import React from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

function Banner() {
    return (
        <div className="relative">
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}//侧边的提示 1/3
                showIndicators={false}//下方的圆点
                showThumbs={false}//下方的方块
                interval={5000}
            >
                <div>
                    <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
                    {/*  loading="lazy" 增加载入速度 延迟加载，需要才会显示： */}
                </div>

                <div>
                    <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
                </div>

                <div>
                    <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
                </div>
            </Carousel>
            <div className="absolute bottom-0 z-20 w-full h-36 bg-gradient-to-t from-gray-100 to-transparent" />
            {/* bg-gradient-to-t from-white to-transparent 渐变色 */}
        </div>
    )
}

export default Banner
