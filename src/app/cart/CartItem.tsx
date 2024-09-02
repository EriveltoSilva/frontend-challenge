import { TrashIcon } from "@/assets/icons/TrashIcon";
import { Button } from "@/components/Buttons/Button";
import { formatCurrency, TypeCurrency } from "@/utils/formaterCurrency";
import Image from "next/image";
import React from "react";

interface CartItemProps {
    "id": string;
    "name": string;
    "category": string;
    "description": string;
    "price_in_cents": number;
    "sales": number;
    "image_url": string;
    "created_at": string;
    onDelete: (productId: string) => void;
}
export const CartItem: React.FC<CartItemProps> = ({ id, name, description, image_url, price_in_cents, onDelete }) => {

    return (
        <article className="flex rounded-lg lg:max-h-56 w-full">
            <Image src={image_url} alt={`Imagem de ${name}`} className='rounded-s-lg object-cover w-1/3 h-auto' width={0} height={0} sizes="100vw" />
            <div className='flex-1 py-4 px-8 bg-white rounded-r-lg'>
                <div className="space-y-6">
                    <div className="space-y-3">
                        <div className='flex justify-between items-center'>
                            <h3 className='font-light text-base lg:text-xl text-primary-dark'>{name}</h3>
                            <Button onClick={() => onDelete(id)} className='w-auto bg-transparent'>
                                <TrashIcon />
                            </Button>
                        </div>
                        <p className='font-normal text-xs text-primary-dark truncate-lines-4'>
                            {description}
                        </p>
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
                        <span className='font-semibold text-sm lg:text-base text-primary-black'>
                            {formatCurrency(price_in_cents, TypeCurrency.AOA)}
                        </span>
                    </div>
                </div>

            </div>
        </article>
    )
}