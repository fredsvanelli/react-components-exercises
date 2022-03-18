interface IQ13ReplacingEventsProps {
    value: string;
    event: string;
    change: string;
}

const Q13ReplacingEvents: React.FC<IQ13ReplacingEventsProps> = ({
    value,
    event,
    change,
}) => {
    let count = 0;
    for (let i = 0; i < value.length; i += 1) {
        if (value[i] === event) {
            count += 1;
        }
    }

    let newValue = value;
    for (let i = 0; i < count; i += 1) {
        newValue = newValue.replace(event, change);
    }

    return <span>{newValue}</span>;
};

export default Q13ReplacingEvents;
