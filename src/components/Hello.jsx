import React from 'react';

class Hello extends React.Component {
    static defaultProps = {
        from: 'Anonymous',
        bangs: 1
    }
    render() {
        const props = this.props;
        let bangs = "!".repeat(props.num);
        return <div>
            <h5>PostCard</h5>
            <img src={props.src} alt={props.alt}/>
            <p>Hi <span>{props.to}</span> from <span>{props.from}</span> {bangs}</p>
        </div>
    }
}

export default Hello;