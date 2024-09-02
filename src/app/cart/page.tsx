"use client";

import { ButtonGoBack } from "@/components/Buttons/ButtonGoBack";
import { Resume } from "@/components/Cart/Resume";
import { useCartStore } from "@/stores/cartStores";
import { Product } from "@/types/product-types";
import { formatCurrency, TypeCurrency } from "@/utils/formaterCurrency";
import { CartItem } from "./CartItem";


export default function Cart({ }) {
    const { cart, deleteFromCart } = useCartStore();

    const getTotal = () => cart.reduce((total, item) => (total + item.price_in_cents), 0)

    return (
        <main className="lg:px-40 lg:py-8 px-6 py-3">
            <div className="space-y-4 w-full">
                <ButtonGoBack link="/" />

                <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-8 w-full">
                    <div className="space-y-6 flex-1">
                        <div className="space-y-1.5 pt-8">
                            <h3 className="uppercase font-medium text-lg lg:text-2xl text-primary-dark">Seu Carrinho</h3>
                            <div className="font-light text-sm lg:text-base">
                                Total({cart.length} produtos):
                                <span className="font-medium text-primary-dark">
                                    {formatCurrency(getTotal(), TypeCurrency.AOA)}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {cart?.map((cartProduct: Product) => {
                                return (
                                    <CartItem
                                        key={cartProduct.id}
                                        id={cartProduct.id}
                                        name={cartProduct.name}
                                        description={cartProduct.description}
                                        image_url={cartProduct.image_url}
                                        price_in_cents={cartProduct.price_in_cents}
                                        sales={cartProduct.sales}
                                        category={cartProduct.category}
                                        created_at={cartProduct.created_at}
                                        onDelete={deleteFromCart}
                                    />
                                );
                            })
                            }
                        </div>
                    </div>

                    <Resume total={getTotal()} />
                </div>
            </div>
        </main>
    )
}
