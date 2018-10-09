import React from 'react';

const DownloadLinkPopUp = (props) => {
    return(
        <div className="BgDownloadLinkPopUp">
            <div className="BoxDownloadLinkPopUp">
                <a href={props.link}>OpenPDF</a>
                <button onClick={props.closePopUp}>X</button>
            </div>
        </div>
    );

};


export default DownloadLinkPopUp;
