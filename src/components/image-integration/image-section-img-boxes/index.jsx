import React from "react";
import './style.scss';
import BoxCompo from './box-component';
import image1 from '../../../images/image-integration-img/1.jpeg';
import image2 from '../../../images/image-integration-img/2.jpeg';
import image3 from '../../../images/image-integration-img/3.jpeg';

class ImageBox extends React.Component {
    state = {
        boxes: [
            {
                bgColor: '#B62B52',
                description: 'Drink Tea & Enjoy',
                image: null
            },
            {
                bgColor: '',
                description: '',
                image: image1
            },
            {
                bgColor: '#769D2A',
                description: 'Smell flowers & Enjoy',
                image: null
            },
            {
                bgColor: '',
                description: '',
                image: image2
            },
            {
                bgColor: '#01A0A6',
                description: 'How to Live & Enjoy',
                image: null
            },
            {
                bgColor: '',
                description: '',
                image: image3
            }
        ]
    }
    // getBox = () => {
    //     this.setState({

    //     })
    // }
    render() {
        return <div className="image-boxes-part">
            {this.state.boxes.length ? this.state.boxes.map((elem, index) => {
                return <BoxCompo key={index} elem={elem} />
            }) : <p>Any Box</p>}
        </div>
    }
}
export default ImageBox