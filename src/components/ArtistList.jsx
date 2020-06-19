import React from 'react';
import './../css/artistList.css';

class Artist extends React.Component {
    render() {
        const { name, job } = this.props;
        return <div>
            <p>Artist Name :</p>
            <p><span>{name}</span></p>
            <ul>
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