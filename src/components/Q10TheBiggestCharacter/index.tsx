interface IQ10TheBiggestCharacterProps {
    first: string;
    second: string;
}

const Q10TheBiggestCharacter: React.FC<IQ10TheBiggestCharacterProps> = ({
    first,
    second,
}) => <span>{first.length > second.length ? first : second}</span>;

export default Q10TheBiggestCharacter;
