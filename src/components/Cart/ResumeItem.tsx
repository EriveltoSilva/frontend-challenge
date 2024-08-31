interface ResumeItemProps {
    fieldName: string;
    value: number
    bold?: boolean
}
export const ResumeItem: React.FC<ResumeItemProps> = ({ fieldName, value, bold }) => {
    return (
        <div className="flex justify-between">
            <span className={`${bold ? "font-semibold" : "font-normal"} text-base text-primary-dark`}>{fieldName}:</span>
            <span className={`${bold ? "font-semibold" : "font-normal"} text-base text-primary-dark`}>R$ {value}</span>
        </div>
    );
}