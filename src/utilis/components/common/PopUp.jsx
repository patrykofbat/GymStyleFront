import React, {Component} from 'react';

class PopUp extends Component {

    style={
        position:"fixed",
        backgroundColor:"grey",
        boxSizing:"border-box",
        width:"70%",
        height:"69%",
        marginLeft:"1.5%",
        marginTop:"1.5%",
        borderRadius: "0.4rem"
    };

    render() {
        return (
            <div style={this.style}>
                <iframe src="http://www.youtube.com/embed/VTcCb0I9xTE"
                        width="560" height="315" frameBorder="0" allowFullScreen></iframe>
                <button onClick={this.props.esc}>
                    x
                </button>
            </div>
        );
    }
}

export default PopUp;
