import React from "react";
import '../../assets/style/global.scss';
import './style.scss';
import ImageHeader from './image-section-header/index';
import mainImage from '../../images/image-integration-img/main.jpg';
import ImageBox from './image-section-img-boxes/index'



class ImageSection extends React.Component {
    render() {
        return <section className="section-bg"
            style={{ backgroundImage: `url('${mainImage}')` }}>
            <div className="G-container">
                <ImageHeader />
                <ImageBox />
            </div>
        </section>
    }
}
export default ImageSection