import Checkbox from "@/components/ui/checkbox"
import React, { useState } from "react"
import { DataFilters } from "../filters-tile"


type RoomFilterProps = {
    roomFilter?: DataFilters[]
}

const FiltersRoom: React.FC<RoomFilterProps> = ({ roomFilter }) => {
    const [show, setShow] = useState(false)
    if (!roomFilter) return null
    return (
        <div>
            <h2 className="mb-4 text-[1.5rem]">Помещение</h2>
            <div className="flex flex-col gap-2">
                {roomFilter.length > 5 ? (
                    <>
                        <div
                            className={`${
                                show ? "" : "h-[110px] overflow-hidden"
                            }`}
                        >
                            {roomFilter.map((room) => (
                                <Checkbox
                                    key={room.id}
                                    text={room.name}
                                    id={room.id}
                                    category="room"
                                />
                            ))}
                        </div>
                        <span
                            onClick={() => setShow(!show)}
                            className="cursor-pointer text-blue-500 hover:text-red-500"
                        >
                            {!show ? "Показать еще" : "Скрыть"}
                        </span>
                    </>
                ) : (
                    <>
                        {roomFilter.map((room) => (
                            <Checkbox
                                key={room.id}
                                text={room.name}
                                id={room.id}
                                category="purpose"
                            />
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}

export default FiltersRoom
