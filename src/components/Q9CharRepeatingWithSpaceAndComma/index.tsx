interface IQ9WordRepeatingWithSpaceAndCommaProps {
    value: string;
    number: number;
}

const Q9WordRepeatingWithSpaceAndComma: React.FC<
    IQ9WordRepeatingWithSpaceAndCommaProps
> = ({ value, number }) => {
    const myArray = [];
    for (let i = 0; i < number; i += 1) {
        myArray.push(value);
    }

    return <span>{myArray.join(', ')}</span>;
};

export default Q9WordRepeatingWithSpaceAndComma;
