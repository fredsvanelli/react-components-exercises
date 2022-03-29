interface IQ4LengthProps {
    value: string;
}

const Q4Length: React.FC<IQ4LengthProps> = ({ value }) => (
    <span>{value.length}</span>
);

export default Q4Length;
