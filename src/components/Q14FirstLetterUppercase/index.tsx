interface IQ14FirstLetterUppercaseProps {
    value: string;
}

const Q14FirstLetterUppercase: React.FC<IQ14FirstLetterUppercaseProps> = ({
    value,
}) => (
    <span>{`${value.charAt(0).toUpperCase()}${value
        .substr(1)
        .toLowerCase()}`}</span>
);

export default Q14FirstLetterUppercase;
