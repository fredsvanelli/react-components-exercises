import { useState } from 'react';

const Q39UppercaseInput: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const [upperCaseText, setUpperCaseText] = useState('');

    return (
        <>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={inputText}
                    onChange={ev => setInputText(ev.target.value)}
                />
            </div>
            <div>
                <button
                    type="button"
                    className="btn btn-primary mb-3"
                    onClick={() => setUpperCaseText(inputText.toUpperCase())}
                >
                    Enviar
                </button>
            </div>
            <input type="text" className="form-control" value={upperCaseText} />
        </>
    );
};

export default Q39UppercaseInput;
