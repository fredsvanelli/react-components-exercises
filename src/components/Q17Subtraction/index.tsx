interface IQ17SubtractionProps {
    firstNumber: number;
    secondNumber: number;
}

const Q17Subtraction: React.FC<IQ17SubtractionProps> = ({
    firstNumber,
    secondNumber,
}) => <span>{firstNumber - secondNumber}</span>;

export default Q17Subtraction;
