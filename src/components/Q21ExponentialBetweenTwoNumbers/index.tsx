interface IQ21ExponentialBetweenTwoNumbersProps {
    firstNumber: number;
    secondNumber: number;
}

const Q21ExponentialBetweenTwoNumbers: React.FC<
    IQ21ExponentialBetweenTwoNumbersProps
> = ({ firstNumber, secondNumber }) => (
    <span>{firstNumber ** secondNumber}</span>
);

export default Q21ExponentialBetweenTwoNumbers;
