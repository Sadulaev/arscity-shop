import React from "react"
import { FilterCategory, useFilterStore } from "../../../store/FiltersTile"

type Props = {
  text: string,
  category: FilterCategory
  id: number
}

const Checkbox: React.FC<Props> = ({ text, category, id }) => {
  const { filters, addFilter, removeFilter } = useFilterStore() 
  const isChecked = filters[category].some((item) => item.id === id)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
      const checked = e.target.checked 
      if (checked) addFilter(category, { id, name: text })
      else removeFilter(category, { id, name: text })
  }

  return (
    <label
      htmlFor={text}
      className="flex gap-3 items-center transition-all delay-100"
    >
      <input
        onChange={handleChange}
        checked={isChecked}
        className="hidden"
        id={text}
        type="checkbox"
      />
      <div
        className={`w-[20px] h-[20px] border rounded-[2px] ${
          isChecked ? "bg-red-700" : ""
        }`}
      ></div>
      <span
        className={`hover:text-red-700 transition-all delay-100 ${
          isChecked ? "text-red-700 font-bold" : "text-gray-700"
        }`}
      >
        {text}
      </span>
    </label>
  )
}

export default Checkbox
