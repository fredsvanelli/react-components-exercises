interface IQ15FirstLettersUppercaseProps {
    value: string;
}

const Q15FirstLettersUppercase: React.FC<IQ15FirstLettersUppercaseProps> = ({
    value,
}) => {
    const loweredValue = value.toLowerCase().split(' ');
    for (let i = 0; i < loweredValue.length; i += 1) {
        const w = loweredValue[i];
        loweredValue[i] = w[0].toUpperCase() + w.slice(1);
    }
    return <span>{loweredValue.join(' ')}</span>;
};

export default Q15FirstLettersUppercase;
