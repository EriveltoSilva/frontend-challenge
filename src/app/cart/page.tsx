import { getProducts } from "@/actions/productActions";
import { ButtonGoBack } from "@/components/Buttons/ButtonGoBack";
import { Resume } from "@/components/Cart/Resume";
import { Product } from "@/types/product-types";
import { CartItem } from './CartItem';




export default async function Cart({ }) {
    const products = await getProducts();

    return (
        <main className="px-40 py-6">
            <div className="space-y-4 w-full">
                <ButtonGoBack link="/" />

                <div className="flex justify-between gap-8 w-full">
                    <div className="space-y-6 flex-1">
                        <div className="space-y-1.5 pt-8">
                            <h3 className="uppercase font-medium text-2xl text-primary-dark">Seu Carrinho</h3>
                            <div className="font-light text-base">
                                Total(3 produtos)
                                <span className="font-medium text-primary-dark"> R$ 161,00</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {products?.map((product: Product) => {
                                // const image = require(`@/assets/images/${product.id}.png`)
                                return (
                                    <CartItem
                                        key={product.id}
                                        id={product.id}
                                        name={product.name}
                                        description={product.description}
                                        image_url={product.image_url}
                                        price_in_cents={product.price_in_cents}
                                    />
                                );
                            })
                            }
                        </div>
                    </div>

                    <Resume />
                </div>
            </div>
        </main>
    )
}
