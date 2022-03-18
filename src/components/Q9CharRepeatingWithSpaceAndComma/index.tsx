interface IQ9CharRepeatingWithSpaceAndCommaProps {
    value: string;
    number: number;
}

const Q9CharRepeatingWithSpaceAndComma: React.FC<
    IQ9CharRepeatingWithSpaceAndCommaProps
> = ({ value, number }) => {
    const myArray = [];
    for (let i = 0; i < number; i += 1) {
        myArray.push(value);
    }

    return <span>{myArray.join(', ')}</span>;
};

export default Q9CharRepeatingWithSpaceAndComma;
