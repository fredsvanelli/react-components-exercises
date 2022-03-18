interface IQ13ReplacingEventsProps {
    value: string;
    event: string;
    change: string;
}

const Q13ReplacingEvents: React.FC<IQ13ReplacingEventsProps> = ({
    value,
    event,
    change,
}) => <span>{value.replaceAll(event, change)}</span>;

export default Q13ReplacingEvents;
