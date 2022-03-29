interface IQ18MultiplicationProps {
    firstNumber: number;
    secondNumber: number;
}

const Q18Multiplication: React.FC<IQ18MultiplicationProps> = ({
    firstNumber,
    secondNumber,
}) => <span>{firstNumber * secondNumber}</span>;

export default Q18Multiplication;
