"use client"
import {
    ArrowLeft,
    ArrowRight,
    Heart,
    MoveRight,
} from "lucide-react"
import Image from "next/image"
import React, { useEffect, useMemo, useRef, useState } from "react"
import axios from "axios"
import { CatalogType } from "@/components/shared/catalog-updates"
import Services from "@/components/shared/services"
import Product from "@/components/shared/product-card"
import { TileTypes } from "@/types/typeTiles"

const CollectionPage = () => {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [typeTiles, setTypeTiles] = useState("all")
    const [collection, setCollection] = useState<CatalogType | null>(null)
    const [tilesForCollection, setTilesForCollection] = useState<TileTypes[]>([])
    const [indexCollection, setIndexCollection] = useState(1)

    useEffect(() => {
        const id = window.location.pathname.split("/").pop()
        try {
            const fetchData = async () => {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/tile/collections/${id}/`
                )
                setCollection(response.data)
            }
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        //const id = window.location.pathname.split("/").pop()
        if (!collection?.id) return
        const fetchTilesForCollection = async () => {
            const response = await axios.get(
                `http://127.0.0.1:8000/api/tile/tiles/?collection=${collection.id}`
            )
            setTilesForCollection(response.data.results)
        }
        fetchTilesForCollection()
    }, [collection])

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -150, behavior: "smooth" })
        }
    }
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 150, behavior: "smooth" })
        }
    }

    const imagesArr = useMemo(() => {
        if(!collection) {
            return Array(5).fill('');
        }
        return [ collection.image1, collection.image2, collection.image3, collection.image4, collection.image5 ];

    }, [collection?.id, !!collection])

    if (!collection) return null

    // const {search} = useSearchStore()
    // if (search.length > 0 ) return <SearchPage/>


    return (
        <div className="flex flex-col gap-4 md:gap-0">
            <div className="w-screen bg-linear-to-b from-[#D2D2D2] to-white md:h-[317px] -mt-20 flex items-center pt-20 -z-1">
                <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between w-[1370px] mx-auto px-10 md:px-12">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3 text-gray-400">
                            <span>Главная</span>
                            <MoveRight
                                color="#ee1b1b"
                                strokeWidth={1}
                            />
                            <span>Каталог</span>
                            <MoveRight
                                color="#ee1b1b"
                                strokeWidth={1}
                            />
                            <span>Коллекция</span>
                        </div>
                        <h1 className="text-3xl">
                            Коллекция `&quot;`{collection.name}`&quot;`
                        </h1>
                    </div>

                    <button className="flex gap-3 items-center border border-gray-400 md:py-4 px-15 uppercase hover:bg-red-500 hover:text-white hover:border-none transition-all duration-200 z-50">
                        <Heart />
                        <span>ДОБАВИТЬ в избранное</span>
                    </button>
                </div>
            </div>

            <div className="flex flex-col justify-between w-screen md:w-[1370px] gap-10 mx-auto px-10 md:px-12">
                <div className="flex flex-col md:flex-row justify-between md:items-start">
                    <div className="relative flex flex-col md:w-[666px]">
                        <div
                            className={`md:h-[481px] overflow-hidden transition-opacity duration-300`}
                        >
                            <Image
                                src={imagesArr[indexCollection]}
                                width={666}
                                height={480}
                                alt="ImageTile"
                            />
                        </div>

                        <div className="py-5 flex gap-4 items-center">
                            <button
                                onClick={scrollLeft}
                                className="flex items-center justify-center w-[40px] bg-gray-400 h-[103px] text-red-500 hover:scale-110 transition-all duration-200"
                            >
                                <ArrowLeft />
                            </button>
                            <div
                                ref={scrollRef}
                                className="w-full flex overflow-x-auto scroll-hidden"
                            >
                                <div className="inline-flex gap-4">
                                    {Array(5)
                                        .fill("")
                                        .map((_, index) => {
                                            if(!imagesArr[indexCollection]) return;
                                            return <div
                                                key={index}
                                                onClick={() =>
                                                    setIndexCollection(
                                                        index + 1
                                                    )
                                                }
                                                className={`relative flex items-center justify-between w-[130px] h-[103px] ${
                                                    index + 1 !==
                                                    indexCollection
                                                        ? "bg-gray-300"
                                                        : ""
                                                }`}
                                            >
                                                <Image
                                                    fill
                                                    src={
                                                        imagesArr[indexCollection]
                                                    }
                                                    alt="imageSlide"
                                                />
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                            <button
                                onClick={scrollRight}
                                className="flex items-center justify-center w-[40px] bg-gray-400 h-[103px] text-red-500 hover:scale-110 transition-all duration-200"
                            >
                                <ArrowRight />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between -mt-8 md:w-[45%] h-[500px] md:pr-2">
                        <div className="flex gap-10 items-end mt-8">
                            <div className="flex items-center justify-center w-screen md:w-[330px] h-[147px] border overflow-hidden border-gray-400 cursor-pointer hover:scale-105 hover:bg-red-300 transition-all duration-150">
                                <Image
                                    src={collection.logo || ""}
                                    width={203}
                                    height={30}
                                    alt="LogoCollection"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-5 mt-10">
                            <p className="text-2xl">
                                В коллекции: {collection.compound}
                            </p>
                        </div>

                        <div className="flex p-6 bg-[#F6F6F6] justify-between mt-2">
                            <div className="flex flex-col gap-5 w-[45%]">
                                <div className="flex flex-col ">
                                    <span className="text-gray-400">
                                        Применение:
                                    </span>
                                    <span>
                                        {collection.scope_of_application}
                                    </span>
                                </div>
                                <div className="flex flex-col ">
                                    <span className="text-gray-400">
                                        Стилистика:{" "}
                                    </span>
                                    <span>{collection.style}</span>
                                </div>
                                <div className="flex flex-col ">
                                    <span className="text-gray-400">
                                        Размеры:
                                    </span>
                                    <span>{collection.main_size}</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5 w-[45%]">
                                <div className="flex flex-col ">
                                    <span className="text-gray-400">
                                        Цвета:
                                    </span>
                                    <span>{collection.colors}</span>
                                </div>
                                <div className="flex flex-col ">
                                    <span className="text-gray-400">
                                        Рисунок:
                                    </span>
                                    <span>{collection.pattern}</span>
                                </div>
                                <div className="flex flex-col ">
                                    <span className="text-gray-400">
                                        Форматы:
                                    </span>
                                    <span>{collection.formats}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 text-2xl mt-3">
                            <span>Цена от: </span>
                            <span>{collection.price}</span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between text-justify w-[100%] px-4 md:px-8 py-5 my-14 bg-[#F6F6F6]">
                    <p className="leading-10">{collection.description}</p>
                </div>
            </div>
            <Services />
            <div className="md:w-[1370px] z-50 mx-auto px-12 flex flex-col mt-10 mb-10">
                <div className="flex flex-col md:flex-row gap-2 md:gap-5 text-[1rem] md:text-2xl uppercase">
                    <span className={`cursor-pointer relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-500 after:scale-x-0 after:left-0 after:bottom-0 after:transition-transform after:origin-left after:duration-300 hover:after:scale-x-100 pb-1 ${typeTiles === "all" ? "text-red-500" : ""}`} onClick={() => setTypeTiles("all")}>все элементы</span>
                    <span className={`cursor-pointer relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-500 after:scale-x-0 after:left-0 after:bottom-0 after:transition-transform after:origin-left after:duration-300 hover:after:scale-x-100 pb-1 ${typeTiles === "base" ? "text-red-500" : ""}`} onClick={() => setTypeTiles("base")}>базовая плитка ({tilesForCollection.filter(item => item.tile_type === 'base').length})</span>
                    <span className={`cursor-pointer relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-500 after:scale-x-0 after:left-0 after:bottom-0 after:transition-transform after:origin-left after:duration-300 hover:after:scale-x-100 pb-1 ${typeTiles === "border" ? "text-red-500" : ""}`} onClick={() => setTypeTiles("border")}>Бордюр ({tilesForCollection.filter(item => item.tile_type === 'border').length})</span>
                    <span className={`cursor-pointer relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-500 after:scale-x-0 after:left-0 after:bottom-0 after:transition-transform after:origin-left after:duration-300 hover:after:scale-x-100 pb-1 ${typeTiles === "floor" ? "text-red-500" : ""}`} onClick={() => setTypeTiles("floor")}>напольная плитка ({tilesForCollection.filter(item => item.tile_type === 'floor').length})</span>
                </div>
                <div className="flex flex-wrap gap-3 mt-10 mb-10">
                    {typeTiles === "all" ? (
                        tilesForCollection.map((tile) => (
                            <Product key={tile.id} city={tile.country} imageURL={tile.image1 || ""} title={tile.name} price={tile.price} content_type={tile.content_type} id={tile.id} />
                        ))
                    ) : (
                        tilesForCollection.filter(item => item.tile_type === typeTiles).map((tile) => (
                            <Product key={tile.id} city={tile.country} imageURL={tile.image1 || ""} title={tile.name} price={tile.price} content_type={tile.content_type} id={tile.id} />
                        ))
                    )}
                </div>
                
            </div>

        </div>
    )
}

export default CollectionPage
