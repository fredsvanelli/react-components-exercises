interface IQ10LongerStringProps {
    first: string;
    second: string;
}

const Q10LongerString: React.FC<IQ10LongerStringProps> = ({
    first,
    second,
}) => <span>{first.length > second.length ? first : second}</span>;

export default Q10LongerString;
