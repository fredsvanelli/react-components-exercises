interface IQ14FirstLetterUppercaseProps {
    value: string;
}

const Q14FirstLetterUppercase: React.FC<IQ14FirstLetterUppercaseProps> = ({
    value,
}) => {
    const loweredValue = value.toLowerCase();
    return (
        <span>
            {loweredValue.charAt(0).toUpperCase() + loweredValue.substr(1)}
        </span>
    );
};

export default Q14FirstLetterUppercase;
