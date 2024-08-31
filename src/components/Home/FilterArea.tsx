import { Dropdown } from "../Buttons/Dropdown";

type Props = {};

export const FilterArea = (props: Props) => {
  return (
    <div className="flex justify-between items-center">
      <ul className="flex gap-10 text-base text-[#737380] uppercase">
        <li className="font-semibold border-b-4 border-[#FFA585] text-[#41414D]">Todos os produtos</li>
        <li className="font-normal">Camisetas</li>
        <li className="font-normal">Canecas</li>
      </ul>

      <Dropdown
        title="Organizar por"
        options={['Novidades', 'Preço Maior - menor', 'Preço Menor - maior', 'Mais vendidos']}
      />
    </div>
  );
};


// Por enquanto sim