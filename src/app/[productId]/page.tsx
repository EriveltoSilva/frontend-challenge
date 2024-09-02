import { getProductById } from "@/actions/productActions";
import { ButtonGoBack } from "@/components/Buttons/ButtonGoBack";
import { formatCurrency, TypeCurrency } from "@/utils/formaterCurrency";
import { categoryTranslations } from "@/utils/translate";
import Image from "next/image";
import { AddCartSection } from "./AddCartSection";

interface ProductDetailProps {
    params: {
        productId: string;
    }
}

export default async function ProductDetail({ params }: ProductDetailProps) {
    const productId = params.productId;

    const product = await getProductById(productId);

    return (
        <main className="lg:px-40 lg:py-8 px-6 py-3">
            <div className="space-y-6 w-full">
                <ButtonGoBack link="/" />

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-8">
                    <div className="w-full">
                        <Image src={product.image_url} alt="Imagem" className="w-full h-full object-cover rounded-lg" width={0} height={0} sizes="100vw" />
                    </div>

                    <section>
                        <div className="space-y-14">
                            <div className="w-full">
                                <h2 className="font-normal text-base text-primary-dark">
                                    {categoryTranslations[product.category]}
                                </h2>
                                <h1 className="mt-3 font-light text-[32px] text-primary-dark">
                                    {product.name}
                                </h1>
                                <span className="mt-1 text-xl font-semibold text-black">{formatCurrency(product.price_in_cents, TypeCurrency.AOA)}</span>
                                <p className="mt-3 text-xs text-gray-600">
                                    *Frete de 1.000KZ por toda Angola. Grátis para compras acima de 100.000KZ.
                                </p>
                            </div>

                            <div className="space-y-8 lg:space-y-52">
                                <div className="space-y-2">
                                    <h3 className="font-medium text-base text-primary">Descrição</h3>
                                    <p className="font-normal text-sm text-primary-dark">
                                        {product.description}
                                    </p>
                                </div>

                                <AddCartSection product={product} />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}

