import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ComponentProps<'button'> {
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button {...props}
            className={twMerge("bg-brand-blue text-white flex gap-3 justify-center items-center rounded-lg w-full py-2.5", props.className)}>
            {children}
        </button>
    )
}