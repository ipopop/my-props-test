import React from 'react';

class Hello extends React.Component {
    render() {
        const props = this.props;
        let bangs = "!".repeat(props.num);
        return <div>
            <p>Hi {props.to} from {props.from}{bangs}</p>
            <img src={props.src} alt={props.alt}/>
        </div>
    }
}

export default Hello;