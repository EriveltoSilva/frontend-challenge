"use client";

import { ArrowDownIcon } from "@/assets/icons/ArrowDownIcon";
import React, { useEffect, useRef, useState } from 'react';
import { twMerge } from "tailwind-merge";

interface DropdownProps {
    title: string;
    options: string[];
    className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ title, options, className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                className={twMerge("bg-transparent rounded-md px-4 py-2 text-sm flex gap-2 items-center", className)}
                onClick={toggleDropdown}
            >
                {title}
                <ArrowDownIcon />
            </button>

            {isOpen && (
                <ul
                    className="bg-white text-primary flex flex-col gap-1 rounded-lg shadow-lg px-4 py-3 absolute right-0 top-full mt-2 w-48"
                >
                    {options.map((option, index) => (
                        <li key={index}>{option}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};
