import React from "react";
import './style.scss';

class ImageHeader extends React.Component {
    state = {
        navList: ['Active', 'Rose', 'Jasmine', 'Carcade']
    }

    render() {
        return <div>
            <div className="header-title">
                <h1>Tea Flower</h1>
            </div>
            <ul className="nav-list">
                {this.state.navList.map((elem, index) => {
                    return <li key={index} className='nav-list-item'>{elem}</li>
                })}
            </ul>
        </div>
    }
}
export default ImageHeader