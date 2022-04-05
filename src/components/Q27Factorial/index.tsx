interface IQ27FactorialProps {
    value: number;
}

const Q27Factorial: React.FC<IQ27FactorialProps> = ({ value }) => {
    let fact = 1;

    if (Number.isInteger(value)) {
        if (value >= 0) {
            for (let i = value; i > 1; i -= 1) {
                fact *= i;
            }
            return <span>{fact}</span>;
        }
        return <span>Não existe fatorial para números negativos</span>;
    }
    return <span>Não existe fatorial para números decimais</span>;
};

export default Q27Factorial;
