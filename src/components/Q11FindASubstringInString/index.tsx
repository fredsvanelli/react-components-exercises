interface IQ11FindASubstringInStringProps {
    first: string;
    second: string;
}

const Q11FindASubstringInString: React.FC<IQ11FindASubstringInStringProps> = ({
    first,
    second,
}) => <span>{first.match(second) ? 'Sim' : 'Não'}</span>;

export default Q11FindASubstringInString;
