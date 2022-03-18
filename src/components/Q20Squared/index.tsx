interface IQ20SquaredProps {
    firstNumber: number;
}

const Q20Squared: React.FC<IQ20SquaredProps> = ({ firstNumber }) => (
    <span>{firstNumber ** 2}</span>
);

export default Q20Squared;
