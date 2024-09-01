import image1 from "@/assets/images/1.png";
import image10 from "@/assets/images/10.png";
import image11 from "@/assets/images/11.png";
import image12 from "@/assets/images/12.png";
import image2 from "@/assets/images/2.png";
import image3 from "@/assets/images/3.png";
import image4 from "@/assets/images/4.png";
import image5 from "@/assets/images/5.png";
import image6 from "@/assets/images/6.png";
import image7 from "@/assets/images/7.png";
import image8 from "@/assets/images/8.png";
import image9 from "@/assets/images/9.png";
import { ButtonGoBack } from "@/components/Buttons/ButtonGoBack";
import { Resume } from "@/components/Cart/Resume";
import { CartItem } from './CartItem';

interface CartProps {

}



export default async function Cart({ }) {
    const products = [
        {
            id: 1,
            title: "Caneca de cerâmica rústica",
            price: 40,
            image: image1,
            description: "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto."
        },
        {
            id: 2,
            title: "Camiseta not today",
            price: 60,
            image: image2,
            description: "Camiseta casual com estampa 'Not Today', ideal para dias descontraídos e confortáveis."
        },
        {
            id: 3,
            title: "Caneca Black Ring",
            price: 45,
            image: image3,
            description: "Caneca elegante com anel preto na borda, perfeita para sua coleção de utensílios."
        },
        {
            id: 4,
            title: "Camiseta Broken Saints",
            price: 70,
            image: image4,
            description: "Camiseta estilosa com estampa 'Broken Saints', feita de algodão de alta qualidade."
        },
        {
            id: 5,
            title: "Camiseta Outcast",
            price: 55,
            image: image5,
            description: "Camiseta com estampa ousada 'Outcast', para quem gosta de se destacar na multidão."
        },
        {
            id: 6,
            title: "Caneca The Grounds",
            price: 50,
            image: image6,
            description: "Caneca inspirada nos cafés mais tradicionais, com design clássico e funcional."
        },
        {
            id: 7,
            title: "Camiseta evening",
            price: 65,
            image: image7,
            description: "Camiseta casual 'Evening' em tom escuro, perfeita para ocasiões noturnas."
        },
        {
            id: 8,
            title: "Caneca preto fosco",
            price: 40,
            image: image8,
            description: "Caneca com acabamento preto fosco, moderna e sofisticada para o seu dia a dia."
        },
        {
            id: 9,
            title: "Caneca Never settle",
            price: 45,
            image: image9,
            description: "Caneca com mensagem inspiradora 'Never Settle', ideal para começar o dia com motivação."
        },
        {
            id: 10,
            title: "Camiseta DREAMER",
            price: 75,
            image: image10,
            description: "Camiseta com estampa 'DREAMER', perfeita para sonhadores que buscam conforto e estilo."
        },
        {
            id: 11,
            title: "Caneca Decaf! P & Co",
            price: 50,
            image: image11,
            description: "Caneca estilizada da linha P & Co, ideal para os amantes de café sem cafeína."
        },
        {
            id: 12,
            title: "Camiseta Ramones",
            price: 80,
            image: image12,
            description: "Camiseta clássica dos Ramones, para fãs de rock e estilo autêntico."
        }
    ];
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
                            {products.map((product) => {
                                // const image = require(`@/assets/images/${product.id}.png`)
                                return (
                                    <CartItem
                                        key={product.title}
                                        id={product.id}
                                        title={product.title}
                                        description={product.description}
                                        image={product.image}
                                        price={product.price}
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
