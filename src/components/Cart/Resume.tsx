import Link from "next/link"
import { Button } from "../Buttons/Button"
import { Divider } from "../Diveder"
import { ResumeItem } from "./ResumeItem"

type Props = {
    total: number
}

export const Resume = ({ total }: Props) => {
    return (
        <aside className="bg-white min-w-full lg:min-w-[352px] lg:max-h-[700px] rounded-lg py-4 px-6">
            <div className="space-y-32 lg:space-y-80">
                <div className="space-y-7">
                    <h3 className="font-semibold text-xl text-primary-dark uppercase">Resumo</h3>
                    <div className="space-y-10">
                        <div className="space-y-3">
                            <ResumeItem fieldName="Subtotal" value={total} />
                            <ResumeItem fieldName="Entrega" value={total * 0.1} />
                            <Divider className="border-gray-200" />
                            <ResumeItem bold={true} fieldName="Total" value={total + total * 0.1} />
                        </div>
                        <Button className="bg-[#51B853] text-white uppercase">
                            Finalizar a Compra
                        </Button>
                    </div>
                </div>
                <div>
                    <ul className="uppercase underline">
                        <li><Link href={"/"}>Ajuda</Link></li>
                        <li><Link href={"/"}>Reembolso</Link></li>
                        <li><Link href={"/"}>Entregas e Frete</Link></li>
                        <li><Link href={"/"}>Trocas e Devoluções</Link></li>
                    </ul>

                </div>
            </div>

        </aside>
    )
}
