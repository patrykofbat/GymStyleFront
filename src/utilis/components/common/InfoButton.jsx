import React, {Component} from 'react';



const style={
    borderRadius: "50%",
    height:"1.5rem",
    backgroundColor:"#fff",
    border:"1px solid #ccc",
    cursor: "pointer"

};

const InfoButton = (props) => {
    return(
        <button style={style} onClick={props.onClick}>
            ?
        </button>
    );
};

export default InfoButton;
