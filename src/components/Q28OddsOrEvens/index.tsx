interface IQ28OddsOrEvensProps {
    value: number;
}

const Q28OddsOrEvens: React.FC<IQ28OddsOrEvensProps> = ({ value }) => {
    if (Number.isInteger(value)) {
        return <span>{value % 2 === 0 ? 'Par' : 'Ímpar'}</span>;
    }
    return <span>Número decimal não é classificado</span>;
};

export default Q28OddsOrEvens;
