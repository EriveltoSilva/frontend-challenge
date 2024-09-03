"use client";
import { ArrowLeftIcon } from "@/assets/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { useRouter } from "next/navigation";

interface PaginatorProps {
    currentPage: number;
    totalPages: number;
}

export const Paginator = ({ currentPage, totalPages }: PaginatorProps) => {
    const router = useRouter();

    const handlePrev = () => {
        if (currentPage > 1) {
            router.push(`?page=${Number(currentPage) - 1}`, { scroll: false });
        }
    }

    const handleNext = () => {
        if (currentPage <= totalPages) {
            router.push(`?page=${Number(currentPage) + 1}`, { scroll: false });
        }
    }

    const handlePageClick = (page: number) => {
        if (currentPage !== page) {
            router.push(`?page=${page}`, { scroll: false });
        }
    }

    return (
        <div className="flex gap-2.5 justify-end">
            <div className="flex gap-0.5">
                {/* Renderiza os números das páginas */}
                {[...Array(totalPages)].map((_, index) => (
                    <div
                        key={index}
                        className={`${currentPage == index + 1 ? 'bg-white text-custom-orange border border-custom-orange' : 'bg-[#E9E9F0]'
                            } w-8 h-8 p-2 rounded-lg flex justify-center items-center font-normal text-base cursor-pointer`}
                        onClick={() => handlePageClick(index + 1)}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>

            <div className="flex gap-0.5">
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className={`${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#E9E9F0]'} 
                        w-8 h-8 p-2 rounded-lg flex justify-center items-center font-normal text-base`}
                >
                    <ArrowLeftIcon />
                </button>
                <button
                    onClick={handleNext}
                    disabled={currentPage >= totalPages}
                    className={`${currentPage >= totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#E9E9F0]'} 
                        w-8 h-8 p-2 rounded-lg flex justify-center items-center font-normal text-base`}
                >
                    <ArrowRightIcon />
                </button>
            </div>
        </div>
    );
};
