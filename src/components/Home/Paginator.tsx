"use client";
import { ArrowLeftIcon } from "@/assets/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";

interface PaginatorProps {
    currentPage: number;
    totalPages: number;
}

export const Paginator = ({ currentPage, totalPages }: PaginatorProps) => {
    const handlePrev = () => {
        alert("Previous");
    }
    const handleNext = () => {
        alert("Next");
    }


    return (
        <div className="flex gap-2.5 justify-end">
            <div className="flex gap-0.5">
                {/* Renderiza os números das páginas */}
                {[...Array(totalPages)].map((_, index) => (
                    <div
                        key={index}
                        className={`${currentPage === index + 1 ? 'bg-white text-custom-orange border border-custom-orange' : 'bg-[#E9E9F0]'
                            } w-8 h-8 p-2 rounded-lg flex justify-center items-center font-normal text-base cursor-pointer`}
                        onClick={() => {
                            if (currentPage !== index + 1) {
                                handlePrev();
                            }
                        }}
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
                    disabled={currentPage === totalPages}
                    className={`${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#E9E9F0]'} 
                        w-8 h-8 p-2 rounded-lg flex justify-center items-center font-normal text-base`}
                >
                    <ArrowRightIcon />
                </button>
            </div>
        </div>
    );
};
