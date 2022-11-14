import React from "react";
import './style.scss';
import ComponentBox from "./compo-box";

class CompoIntegrat extends React.Component {
    componentBoxList = [
        {
            colorValue: '#3dcece',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
            text: 'text'
        },
        {
            colorValue: '#ce3db1',
            description: 'Sed fringilla. Ut at arcu vel arcu condimentum imperdiet. Morbi lorem nisl, fermentum ac, feugiat eget, auctor vel, velit. Vestibulum venenatis. In hac habitasse platea dictumst. Curabitur tristique diam. Donec mauris. Aenean interdum semper metus. Curabitur et leo. Phasellus vel lorem sit amet velit dictum ornare. Ut et metus ac est sagittis auctor. Quisque nisi odio, scelerisque at, lacinia at, tincidunt ac, orci.',
            text: 'text'
        },
        {
            colorValue: '#47ce3d',
            description: 'Cras venenatis imperdiet purus. Donec id justo ultricies libero sagittis elementum. Ut consectetuer fermentum elit. Donec bibendum nunc. Proin scelerisque vulputate sem. Nullam dui magna, semper id, blandit vel, euismod eget, tellus. Sed at erat. Praesent at erat rutrum ipsum dapibus porttitor. Fusce eu quam vel velit tincidunt sodales. Ut posuere urna id nulla.',
            text: 'text'
        },
        {
            colorValue: '#b3ce3d',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
            text: 'text'
        },
        {
            colorValue: '#5b6b6b',
            description: 'Sed fringilla. Ut at arcu vel arcu condimentum imperdiet. Morbi lorem nisl, fermentum ac, feugiat eget, auctor vel, velit. Vestibulum venenatis. In hac habitasse platea dictumst. Curabitur tristique diam. Donec mauris. Aenean interdum semper metus. Curabitur et leo. Phasellus vel lorem sit amet velit dictum ornare. Ut et metus ac est sagittis auctor. Quisque nisi odio, scelerisque at, lacinia at, tincidunt ac, orci.',
            text: 'text'
        },
        {
            colorValue: '#5b7b6b',
            description: 'Cras venenatis imperdiet purus. Donec id justo ultricies libero sagittis elementum. Ut consectetuer fermentum elit. Donec bibendum nunc. Proin scelerisque vulputate sem. Nullam dui magna, semper id, blandit vel, euismod eget, tellus. Sed at erat. Praesent at erat rutrum ipsum dapibus porttitor. Fusce eu quam vel velit tincidunt sodales. Ut posuere urna id nulla.',
            text: 'text'
        },
    ]
    onClick = (e) => {
        console.log('11111')
        //console.log(this.componentBoxList)
    }
    render() {
        return <section className="G-container">
            <div className="compo-integration-flex">
                {this.componentBoxList.map((item, index) => {
                    return <ComponentBox key={index}
                        main={item.description}
                        colorValue={item.colorValue}
                        onClick={this.onClick}>
                        <h3>{item.text}</h3>
                    </ComponentBox>
                })}

            </div>
        </section>
    }
}
export default CompoIntegrat