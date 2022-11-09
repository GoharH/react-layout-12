import React from "react";
import '../../../assets/style/global.scss';
import './style.scss';


class ComponentBox extends React.Component {
    render() {
        return <div className="G-padding-33">
            <div className="compo-box hover">
                {this.props.main.length ? <p>{this.props.main}</p> : null}
            </div>
        </div>

    }
}
export default ComponentBox