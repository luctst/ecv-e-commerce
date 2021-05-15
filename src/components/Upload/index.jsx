import './style.scss';
import React from 'react';
const avatar = 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png';

class Upload extends React.Component {

    constructor(props){
        super(props);
        this.inputValue = props.image ? props.image : '';
        this.state = {
            file: props.image ? props.image : avatar
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
                    <input defaultValue={this.inputValue} type="text" onChange={this.handleChange}/>
                </label>
            </div>
        );
    }
}
export default Upload;