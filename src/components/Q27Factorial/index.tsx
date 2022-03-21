interface IQ27FactorialProps {
    value: number;
}

const Q27Factorial: React.FC<IQ27FactorialProps> = ({ value }) => {
    let fact = 1;

    for (let i = value; i > 1; i -= 1) {
        fact *= i;
    }
    return <span>{fact}</span>;
};

export default Q27Factorial;
