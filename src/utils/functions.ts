import { PriorityType } from "@/types/priority-types";

export const filterMatcher = (text: string): PriorityType => {
    switch (text) {
        case 'Novidades':
            return PriorityType.NEWEST;
        case 'Preço Maior - menor':
            return PriorityType.PRICE_HIGH_TO_LOW;
        case 'Preço Menor - maior':
            return PriorityType.PRICE_LOW_TO_HIGH;
        case 'Mais vendidos':
            return PriorityType.MOST_SOLD;
        default:
            return PriorityType.NEWEST;
    }
}
