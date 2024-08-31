import { BackwardIcon } from '@/assets/icons/BackwardIcon';
import Link from 'next/link';
import React from 'react';

interface ButtonGoBackProps {
    link?: string;
}

export const ButtonGoBack: React.FC<ButtonGoBackProps> = ({ link }) => {
    return (
        <Link href={link || "/"} className="flex gap-0.5">
            <BackwardIcon />
            <span className="font-medium text-sm text-[#617480]">Voltar</span>
        </Link>
    )
}
