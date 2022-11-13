import React from "react";
import '../../../assets/style/global.scss';
import './style.scss';


class ComponentBox extends React.Component {

    // giveBgColor = (e) => {
    //     e.target.style.background = 'red';
    // }

    state = {
        isHover: false
    }
    giveBgColor = (e) => {
        this.setState({ isHover: true })
    }
    removeBgColor = (e) => {
        this.setState({ isHover: false })
    }

    render() {
        return <div className={`G-padding-33 ${this.state.isHover ? 'hovered' : ''}`}
            style={{ backgroundColor: this.state.isHover ? this.props.colorValue ? this.props.colorValue : 'blue' : 'transparent' }}
            onMouseLeave={this.removeBgColor}
            onMouseOver={this.giveBgColor}
            onClick={this.props.onClick}>
            <div className="compo-box hover">
                {this.props.children}
                {this.props.main && this.props.main.length ? <p>{this.props.main}</p> : null}
            </div>
        </div>

    }
}
export default ComponentBox