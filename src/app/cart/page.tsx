import { ButtonGoBack } from "@/components/Buttons/ButtonGoBack";
import { Resume } from "@/components/Cart/Resume";

interface CartProps {

}

export default async function Cart({ }) {
    return (
        <main className="px-40 py-6">
            <div className="space-y-6 w-full">
                <ButtonGoBack link="/" />

                <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="space-y-1.5">
                            <h3 className="uppercase font-medium text-2xl text-primary-dark">Seu Carrinho</h3>
                            <div className="font-light text-base">
                                Total(3 produtos)
                                <span className="font-medium text-primary-dark"> R$ 161,00</span>
                            </div>

                        </div>
                        <div className="space-y-4">
                            <article className="">

                            </article>
                        </div>
                    </div>
                    <Resume />
                </div>
            </div>
        </main>
    )
}
