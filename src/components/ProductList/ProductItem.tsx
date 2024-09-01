import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Divider } from "../Diveder";


interface ProductItemProps {
    id: number | string;
    name: string;
    price_in_cents: number;
    image_url: StaticImageData | string;
}

export const ProductItem: React.FC<ProductItemProps> = ({ id, name, price_in_cents, image_url }) => {
    return (
        <article className="bg-[rgba(255,255,255,.4)] rounded-lg">
            <Link href={`/${id}`}>
                <Image src={image_url} alt="Caneca" className="w-full max-h-[80vh] rounded-t-lg" sizes="100vw" width={0} height={0} />
            </Link>
            <div className="px-3 pt-2">
                <Link href={`/${id}`}>
                    <h3 className="text-primary-dark text-base font-light">{name}</h3>
                </Link>
                <Divider />
                <span className="text-lg font-semibold text-[#09090A]">R$ {price_in_cents}</span>
            </div> *
        </article>
    );
}