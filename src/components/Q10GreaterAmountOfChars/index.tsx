interface IQ10GreaterAmountOfCharsProps {
    first: string;
    second: string;
}

const Q10GreaterAmountOfChars: React.FC<IQ10GreaterAmountOfCharsProps> = ({
    first,
    second,
}) => <span>{first.length > second.length ? first : second}</span>;

export default Q10GreaterAmountOfChars;
