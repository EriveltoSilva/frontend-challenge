import { SearchLoupeIcon } from "@/assets/icons/SearchLoupeIcon";
import { ShoppingIcon } from "@/assets/icons/ShoppingIcon";
import { Saira_Stencil_One } from "next/font/google";
import Link from "next/link";

const sairaStencilOne = Saira_Stencil_One({
    weight: ["400"],
    subsets: ["latin"]
});

interface HeaderProps {

}

export const Header = (props: HeaderProps) => {
    return (
        <header className="w-full bg-white flex justify-between py-5 px-40">
            <h2 className={`font-normal text-[40px] text-[#5D5D6D] ${sairaStencilOne.className}`}>
                <Link href={"/"}>
                    capputeeno
                </Link>
            </h2>
            <div className="flex gap-6 items-center">
                <div className="bg-[#F3F5F6] px-4 py-2.5 rounded-lg w-[352px]  flex justify-between items-center">
                    <input
                        type="text"
                        placeholder="Procurando por algo específico?"
                        className="text-[#737380] flex-grow max-w-[80%] outline-none bg-transparent"
                    />
                    <SearchLoupeIcon />
                </div>

                <div className="relative">
                    <ShoppingIcon />
                    <div className="absolute bottom-0 right-0 w-[20px] h-[20px] bg-red-600 rounded-full flex items-center justify-center transform translate-x-1/2 translate-y-1/2">
                        <span className="text-[10px] font-medium text-white">
                            2
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

