interface IQ8StringRepetitionProps {
    value: string;
    number: number;
}

const Q8StringRepetition: React.FC<IQ8StringRepetitionProps> = ({
    value,
    number,
}) => {
    let phrase = '';
    for (const i = 0; i < number - 1; i + 1) {
        phrase = value;
    }
    return <span>{phrase}</span>;
};

export default Q8StringRepetition;
