import React, {Component} from 'react';
import '../../style/components/common/Header.css';

class Header extends Component {


    render() {
        return (
            <div className="header">
                {this.props.children}
            </div>
        );
    }
}

export default Header;
