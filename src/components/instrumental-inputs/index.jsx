import React from "react";
import './style.scss';

class InstrumentInput extends React.Component {
    state = {
        title: '',
        description: '',

    }
    render() {
        return <section>
            <div className="instruments">
                <div className="title-changer">
                    <label>
                        <input type="text" name="title" value={this.state.title} />
                    </label>
                    <label htmlFor="">
                        <input type="color" />
                    </label>
                    <label htmlFor="">
                        <input type="range" />
                    </label>
                </div>
                <div className="description-changer">
                    <label>
                        <input type="text" name="title" value={this.state.direction} />
                    </label>
                    <label htmlFor="">
                        <input type="color" />
                    </label>
                    <label htmlFor="">
                        <input type="range" />
                    </label>
                </div>
            </div>
            <div className="work-space">
                <div className="work-window"></div>
            </div>
        </section>
    }
}
export default InstrumentInput