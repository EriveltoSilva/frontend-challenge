import { FC } from "react";

export const ArrowDownIcon: FC = ({ fill, width, height }: IconInterface) => {
    return (
        <svg width={width || "24"} height={height || "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10L12 14L16 10" stroke={fill || "#737380"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
