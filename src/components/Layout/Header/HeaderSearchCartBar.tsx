"use client";

import { ShoppingIcon } from "@/assets/icons/ShoppingIcon";
import { SearchInput } from "@/components/Input/SearchInput";
import { useCartStore } from "@/stores/cartStores";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDeferredValue, useEffect, useState } from "react";

type Props = {}

export const HeaderSearchCartBar = (props: Props) => {
    const { loadCart, cart } = useCartStore();

    const [queryText, setQueryText] = useState<string>("");
    const deferredQueryText = useDeferredValue<string>(queryText);

    const router = useRouter();

    useEffect(() => {
        // Atualiza a URL com o texto de pesquisa
        if (deferredQueryText) {
            router.push(`/?search=${deferredQueryText}`, { scroll: false });
        } else {
            router.push(`/`, { scroll: false }); // Volta para a lista completa se não houver texto de pesquisa
        }
    }, [deferredQueryText]);

    useEffect(() => {
        loadCart();
    }, []);

    return (
        <div className="flex gap-6 items-center">
            <SearchInput
                placeholder="Procurando por algo específico?"
                value={deferredQueryText}
                onChange={(e) => setQueryText(e.target.value)}
            />

            <Link href={"/cart"} className="block relative">
                <ShoppingIcon />
                <div className="absolute bottom-0 right-0 w-4 lg:w-5 lg:h-5 bg-red-600 rounded-full flex items-center justify-center transform translate-x-1/2 translate-y-1/2">
                    <span className="text-[10px] font-medium text-white">
                        {cart?.length}
                    </span>
                </div>
            </Link>
        </div>
    )
}
