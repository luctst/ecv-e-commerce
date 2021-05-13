import './style.scss';
import React from 'react';
import placeholder from '../../assets/images/placeholder.png';

class lazyImage extends React.Component {

    constructor(props) {
        super(props);
        this.src = this.props.src;
        this.alt = this.props.alt;
        this.img = React.createRef();
    }

    componentDidMount() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry) => {
                const image = entry.target;
                if(entry.isIntersecting && image) {
                    image.src = this.src;
                    observer.unobserve(image);
                    image.addEventListener('load', () => image.classList.add('loaded'));
                }
            })
        });
        observer.POLL_INTERVAL = 500;
        observer.observe(this.img.current);
    }

    render() {
        return <div className="img">
            <img ref={this.img} src={placeholder} alt={this.alt}/>
        </div>
    }
}

export default lazyImage;