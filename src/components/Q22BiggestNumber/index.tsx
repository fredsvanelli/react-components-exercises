interface IQ22BiggestNumberProps {
    firstNumber: number;
    secondNumber: number;
}

const Q22BiggestNumber: React.FC<IQ22BiggestNumberProps> = ({
    firstNumber,
    secondNumber,
}) => <span>{firstNumber >= secondNumber ? firstNumber : secondNumber}</span>;

export default Q22BiggestNumber;
