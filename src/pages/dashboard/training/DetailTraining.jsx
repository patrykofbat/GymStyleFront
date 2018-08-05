import React, { Component } from "react";

class DetailTraining extends Component {


    render() {
        return (
            <div>
                <ol>
                    {this.props.exercises.map(item => (
                        <li>{item.content}</li>
                    ))}
                </ol>
            </div>
        )
    }

}

export default DetailTraining

