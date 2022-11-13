import React from "react";
import './style.scss';
import ComponentBox from "./compo-box";

class CompoIntegrat extends React.Component {

    render() {
        return <section className="G-container">
            <div className="compo-integration-flex">
                <ComponentBox main='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.' />
                <ComponentBox main='Sed fringilla. Ut at arcu vel arcu condimentum imperdiet. Morbi lorem nisl, fermentum ac, feugiat eget, auctor vel, velit. Vestibulum venenatis. In hac habitasse platea dictumst. Curabitur tristique diam. Donec mauris. Aenean interdum semper metus. Curabitur et leo. Phasellus vel lorem sit amet velit dictum ornare. Ut et metus ac est sagittis auctor. Quisque nisi odio, scelerisque at, lacinia at, tincidunt ac, orci.' />
                <ComponentBox main='Cras venenatis imperdiet purus. Donec id justo ultricies libero sagittis elementum. Ut consectetuer fermentum elit. Donec bibendum nunc. Proin scelerisque vulputate sem. Nullam dui magna, semper id, blandit vel, euismod eget, tellus. Sed at erat. Praesent at erat rutrum ipsum dapibus porttitor. Fusce eu quam vel velit tincidunt sodales. Ut posuere urna id nulla.' />
                <ComponentBox main='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.' />
                <ComponentBox main='Sed fringilla. Ut at arcu vel arcu condimentum imperdiet. Morbi lorem nisl, fermentum ac, feugiat eget, auctor vel, velit. Vestibulum venenatis. In hac habitasse platea dictumst. Curabitur tristique diam. Donec mauris. Aenean interdum semper metus. Curabitur et leo. Phasellus vel lorem sit amet velit dictum ornare. Ut et metus ac est sagittis auctor. Quisque nisi odio, scelerisque at, lacinia at, tincidunt ac, orci.' />
                <ComponentBox main='Cras venenatis imperdiet purus. Donec id justo ultricies libero sagittis elementum. Ut consectetuer fermentum elit. Donec bibendum nunc. Proin scelerisque vulputate sem. Nullam dui magna, semper id, blandit vel, euismod eget, tellus. Sed at erat. Praesent at erat rutrum ipsum dapibus porttitor. Fusce eu quam vel velit tincidunt sodales. Ut posuere urna id nulla.' />
            </div>
        </section>
    }
}
export default CompoIntegrat