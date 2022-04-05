interface IQ13ReplacingEventsProps {
    value: string;
    search: string;
    replace: string;
}

const Q13ReplacingEvents: React.FC<IQ13ReplacingEventsProps> = ({
    value,
    search,
    replace,
}) => <span>{value.replaceAll(search, replace)}</span>;

export default Q13ReplacingEvents;
