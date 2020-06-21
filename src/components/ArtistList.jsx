import React from 'react';
import './../css/artistList.css';

class Artist extends React.Component {
    static defaultProps = {
        src: 'https://dummyimage.com/150x100.jpg',
        alt: ''
    }
    render() {
        const { name, job, src, alt } = this.props;
        return <div>
            <img src={src} alt={alt}/>
            <p><span>{name}</span></p>
            <ul className="single-before">
                {job.map(h =>
                <li>
                    <span>{h}</span>
                </li>)
                }
            </ul>
        </div>
    }
}

export default Artist;