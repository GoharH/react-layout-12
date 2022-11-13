import React from "react";
import '../../../assets/style/global.scss';
import './style.scss';


class ComponentBox extends React.Component {

    giveBgColor = (e) => {
        e.target.style.background = 'red';
    }

    removeBgColor = (e) => {
        e.target.style.background = "white";
    }
    colorChanger = (e) => {
        e.target.style.background = 'red';
    }
    // onMouseOver={this.giveBgColor} onMouseOut={this.removeBgColor}
    // onClick={this.colorChanger} 
    render() {
        return <div className={`G-padding-33 `}>
            <div className="compo-box hover">
                {this.props.main && this.props.main.length ? <p>{this.props.main}</p> : null}
            </div>
        </div>

    }
}
export default ComponentBox