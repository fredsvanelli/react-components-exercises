interface IQ19DivisionProps {
    firstNumber: number;
    secondNumber: number;
}

const Q19Division: React.FC<IQ19DivisionProps> = ({
    firstNumber,
    secondNumber,
}) => (
    <span>{secondNumber === 0 ? 'Inválido' : firstNumber / secondNumber}</span>
);

export default Q19Division;
