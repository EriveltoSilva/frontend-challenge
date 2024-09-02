import { Saira_Stencil_One } from "next/font/google";
import Link from "next/link";
import { HeaderSearchCartBar } from "./HeaderSearchCartBar";

const sairaStencilOne = Saira_Stencil_One({
    weight: ["400"],
    subsets: ["latin"]
});

interface HeaderProps {

}

export const Header = (props: HeaderProps) => {

    return (
        <header className="w-full bg-white flex items-center justify-between gap-4 lg:gap-0 lg:py-5 lg:px-40 py-3 px-6">
            <h2 className={`font-normal lg:text-[40px] md:text-2xl text-lg text-[#5D5D6D] ${sairaStencilOne.className}`}>
                <Link href={"/"}>
                    capputeeno
                </Link>
            </h2>
            <HeaderSearchCartBar />
        </header>
    )
}

