import React from 'react';
import './../css/SlotMachine.css';

class SlotMachine extends React.Component {
    render() {
        const { s1, s2, s3 } = this.props;
        const winner = (s1 === s2) && (s2 === s3);
        return <div>
            <p className="emoji">{s1}{s2}{s3}</p>
            <p className={winner ? 'slotWin result' : 'slotLose result'}>{winner ? '😍 Win 🤩' : '🥴 Lose 🤪'}</p>
        </div>
    }
}

export default SlotMachine;