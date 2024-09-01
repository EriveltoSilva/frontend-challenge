import { TrashIcon } from "@/assets/icons/TrashIcon";
import { Button } from "@/components/Buttons/Button";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ProductItemProps {
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
    price: number;
}

export const CartItem: React.FC<ProductItemProps> = ({ id, title, description, image, price }) => {

    return (
        <article className="flex rounded-lg max-h-56">
            <Image src={image} alt={`Imagem de ${title}`} className='rounded-s-lg object-cover w-auto h-auto' width={0} height={0} sizes="100vw" />
            {/* width="0" height="0" sizes="100vw" className="w-full h-auto" */}
            <div className='flex-1 py-4 px-8 bg-white rounded-r-lg'>
                <div className="space-y-6">
                    <div className="space-y-3">
                        <div className='flex justify-between items-center'>
                            <h3 className='font-light text-xl text-primary-dark'>{title}</h3>
                            <Button className='w-auto bg-transparent'>
                                <TrashIcon />
                            </Button>
                        </div>
                        <p className='font-normal text-xs text-primary-dark truncate-lines-4'>{description}</p>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='shrink-0 flex gap-0.5 px-1 py-1 bg-[#F3f5F6] border border-[#A8A8B3] rounded-lg'>
                            <input
                                type='number'
                                className='w-12 bg-transparent text-primary outline-none text-center border-none custom-number-input'
                                placeholder="1"

                                min="1"
                                style={{ MozAppearance: 'textfield' }}
                            />
                        </div>
                        <span className='font-semibold text-base text-primary-black'>
                            R$ {price}
                        </span>
                    </div>
                </div>

            </div>
        </article>
    )
}