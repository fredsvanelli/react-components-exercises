interface IQ7PhraseWhithTwoStringsProps {
    value1: string;
    value2: string;
}

const Q7PhraseWhithTwoStrings: React.FC<IQ7PhraseWhithTwoStringsProps> = ({
    value1,
    value2,
}) => <span>{`${value1} ${value2}`}</span>;

export default Q7PhraseWhithTwoStrings;
