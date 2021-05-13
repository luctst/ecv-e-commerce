import './style.scss';
import React from 'react';
import avatar from '../../assets/images/profile.png'

class Upload extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            file: avatar
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        let src = event.target.value;
        if(!src || src === '') {
            src = avatar
        }
        this.setState({
            file: src
        });
    }

    render() {
        return (
            <div className="upload">
                <div className="avatar">
                    <img src={this.state.file} alt="Avatar"/>
                </div>
                <label>
                    <span>{this.props.children}</span>
                    <input required="required" type="text" onChange={this.handleChange}/>
                </label>
            </div>
        );
    }
}
export default Upload;