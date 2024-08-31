import Image, { StaticImageData } from "next/image";
import { Divider } from "../Diveder";


interface ProductItemProps {
    id: number | string;
    title: string;
    price: number;
    image: StaticImageData;
}

export const ProductItem: React.FC<ProductItemProps> = ({ id, title, price, image }) => {
    return (
        <article className="bg-[rgba(255,255,255,.4)] rounded-lg">
            <Image src={image} alt="Caneca" className="w-full max-h-[80vh]" />
            <div className="px-3 pt-2">
                <h3 className="text-primary-dark text-base font-light">{title}</h3>
                <Divider />
                <span className="text-lg font-semibold text-[#09090A]">R$ {price}</span>
            </div> *
        </article>
    );
}