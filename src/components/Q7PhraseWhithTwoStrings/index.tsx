interface IQ7PhraseWithTwoStringsProps {
    value1: string;
    value2: string;
}

const Q7PhraseWithTwoStrings: React.FC<IQ7PhraseWithTwoStringsProps> = ({
    value1,
    value2,
}) => <span>{`${value1} ${value2}`}</span>;

export default Q7PhraseWithTwoStrings;
