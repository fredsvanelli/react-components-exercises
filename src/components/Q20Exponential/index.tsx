interface IQ20ExponentialProps {
    firstNumber: number;
}

const Q20Exponential: React.FC<IQ20ExponentialProps> = ({ firstNumber }) => (
    <span>{firstNumber ** 2}</span>
);

export default Q20Exponential;
