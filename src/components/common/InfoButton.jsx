import React from 'react';



const style={
    borderRadius: "50%",
    height:"1.5rem",
    backgroundColor:"#fff",
    border:"1px solid #ccc",
    cursor: "pointer"

};


const InfoButton = (props) => {
    let popUp = () =>{props.onClick(props.link, props.title)};
    return(
        <button style={style} onClick={popUp}>
            ?
        </button>
    );
};

export default InfoButton;
