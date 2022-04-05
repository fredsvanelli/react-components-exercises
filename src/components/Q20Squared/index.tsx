interface IQ20SquaredProps {
    value: number;
}

const Q20Squared: React.FC<IQ20SquaredProps> = ({ value }) => (
    <span>{value ** 2}</span>
);

export default Q20Squared;
