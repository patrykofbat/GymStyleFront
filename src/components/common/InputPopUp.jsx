import React from 'react';

const InputPopUp = (props) => {
    return (
        <div className="BgInputPopUp">
            <div className="BoxInputPopUp">
                <div>
                    <span>{props.text}</span>
                    <button onClick={props.closePopUp}>x</button>
                </div>
                <input type='text'></input>
                <input type='submit' value="Utwórz"></input>
            </div>
        </div>
    );
}

export default InputPopUp;