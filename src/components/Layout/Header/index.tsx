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
        <header className="w-full bg-white flex justify-between py-5 px-40">
            <h2 className={`font-normal text-[40px] text-[#5D5D6D] ${sairaStencilOne.className}`}>
                <Link href={"/"}>
                    capputeeno
                </Link>
            </h2>
            <HeaderSearchCartBar />
        </header>
    )
}

