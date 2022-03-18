interface IQ25PrimeNumbersProps {
    value: number;
}

const Q25PrimeNumbers: React.FC<IQ25PrimeNumbersProps> = ({ value }) => {
    let isPrime = 1;
    for (let i = 2; i < value; i += 1) {
        isPrime *= value % i;
    }

    if (isPrime === 0) {
        return <span>Não</span>;
    }
    return <span>Sim</span>;
};

export default Q25PrimeNumbers;
