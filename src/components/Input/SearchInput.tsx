import { SearchLoupeIcon } from '@/assets/icons/SearchLoupeIcon';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface SearchInputProps extends ComponentProps<'input'> {
    className?: string;
    divClassName?: string;
}

export const SearchInput = ({ divClassName, className, ...props }: SearchInputProps) => {

    return (
        <div className={twMerge("bg-[#F3F5F6] px-4 py-2.5 rounded-lg w-[352px]  flex justify-between items-center", divClassName)}>
            <input
                {...props}
                type="text"
                placeholder="Procurando por algo específico?"
                className={twMerge("text-[#737380] flex-grow max-w-[80%] outline-none bg-transparent", className)}
            />
            <SearchLoupeIcon />
        </div>
    );
}
