import React from 'react';

class Hello extends React.Component {
    render() {
        const props = this.props;
        return <p>Hi {props.to} from {props.from}</p>;
    }
}

export default Hello;