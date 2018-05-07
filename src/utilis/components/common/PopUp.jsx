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
                {this.props.content}
                <button onClick={this.props.esc}>
                    x
                </button>
            </div>
        );
    }
}

export default PopUp;
