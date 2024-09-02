import React from "react"

interface FilterItemProps {
    text: string,
    selected: boolean,
    onClick: () => void,
}
export const FilterItem: React.FC<FilterItemProps> = ({ text, selected, onClick }) => {
    return (
        <li
            onClick={onClick}
            className={`cursor-pointer ${selected ? "font-semibold border-b-4 border-[#FFA585] text-[#41414D]" : "font-normal"}`}
        >
            {text}
        </li>
    )
}