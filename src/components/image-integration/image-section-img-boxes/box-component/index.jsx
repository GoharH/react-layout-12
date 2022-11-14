import React from "react";
import './style.scss'

class BoxCompo extends React.Component {
    render() {
        return <div className="img-boxes">
            <div className="G-padding-33">
                <div className={`img-box ${this.props.elem.image ? 'box-bg-image' : ''}  ${this.props.elem.bgColor ? 'P-text' : ''}   `}
                    style={{ backgroundColor: this.props.elem.bgColor ? this.props.elem.bgColor : '', backgroundImage: `url('${this.props.elem.image ? this.props.elem.image : ''}')` }}>
                    {this.props.elem.description ? <p className="img-box-title" >{this.props.elem.description}</p> : null}
                </div>
            </div>
        </div >
    }
}
export default BoxCompo