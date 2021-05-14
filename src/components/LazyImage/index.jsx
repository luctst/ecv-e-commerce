import './style.scss';
import placeholder from '../../assets/images/placeholder.png';
import React from "react";


class lazyImage extends React.Component {

    constructor(props) {
        super(props);
        this.img = React.createRef();
        this.state = {
            activeSrc: placeholder
        };

        this.observer = new IntersectionObserver(entries => {
            entries.forEach((entry) => {
                const image = entry.target;
                if(entry.isIntersecting && image) {
                    this.setState({ activeSrc: this.props.src });
                    this.observer.unobserve(image);
                    image.addEventListener('load', () => image.classList.add('loaded'));
                }
            })
        });
    }

    componentDidMount() {
        this.observer.observe(this.img.current);
    }

    render() {
        return <div className="img">
            <img ref={this.img} src={this.state.activeSrc} alt={this.props.alt}/>
        </div>
    }
}

export default lazyImage;