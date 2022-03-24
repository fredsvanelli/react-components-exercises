interface IQ16SumProps {
    firstNumber: number;
    secondNumber: number;
}

const Q16Sum: React.FC<IQ16SumProps> = ({ firstNumber, secondNumber }) => (
    <span>{firstNumber + secondNumber}</span>
);

export default Q16Sum;
