import { FC } from "react";

export const ArrowRightIcon: FC = ({ fill, width, height }: IconInterface) => {
    return (
        <svg width={width || "6"} height={height || "10"} viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 9L5 5L1 1" stroke={fill || "#737380"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
