interface IQ24RandomBetweenTwoNumbersProps {
    x: number;
    y: number;
}

const Q24RandomBetweenTwoNumbers: React.FC<
    IQ24RandomBetweenTwoNumbersProps
> = ({ x, y }) => {
    const min = Math.ceil(x);
    const max = Math.floor(y);
    return <span>{Math.floor(Math.random() * (max - min + 1)) + min}</span>;
};

export default Q24RandomBetweenTwoNumbers;
