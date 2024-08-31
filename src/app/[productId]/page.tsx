import { BackwardIcon } from "@/assets/icons/BackwardIcon";
import { ShoppingIcon } from "@/assets/icons/ShoppingIcon";
import caneca from "@/assets/images/1.png";
import Image from "next/image";
import Link from "next/link";


export default async function ProductDetail({ params }) {

    return (
        <main className="px-40 py-6">
            <div className="space-y-6 w-full">
                <Link href={"/"} className="flex gap-0.5">
                    <BackwardIcon />
                    <span className="font-medium text-sm text-[#617480]">Voltar</span>
                </Link>

                <div className="grid grid-cols-2 gap-8">
                    <div className="w-full">
                        <Image src={caneca} alt="Imagem" className="w-full h-full object-cover rounded-lg" />
                    </div>

                    <section>
                        <div className="space-y-14">
                            <div>
                                <h2 className="font-normal text-base text-primary-dark">
                                    Caneca
                                </h2>
                                <h1 className="mt-3 font-light text-[32px] text-primary-dark">
                                    Caneca de cerâmica rústica
                                </h1>
                                <span className="mt-1 text-xl font-semibold text-black">R$ 40.00</span>
                                <p className="mt-3 text-xs text-gray-600">
                                    *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.
                                </p>
                            </div>

                            <div className="space-y-52">
                                <div className="space-y-2">
                                    <h3 className="font-medium text-base text-primary">Descrição</h3>
                                    <p className="font-normal text-sm text-primary-dark">Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.</p>
                                </div>

                                <button className="bg-brand-blue text-white flex gap-3 justify-center items-center rounded-lg uppercase w-full py-2.5">
                                    <ShoppingIcon fill="#fff" />
                                    <span>Adicionar ao Carrinho</span>
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}