import { FC } from "react";

export const SearchLoupeIcon: FC = ({ fill }: IconInterface) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.059" cy="11.0586" r="7.06194" stroke={fill || "#737380"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.0034 20.0033L16.0518 16.0517" stroke={fill || "#737380"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
