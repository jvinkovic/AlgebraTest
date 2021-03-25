import React from 'react';
import Brojac from './Brojac';

export default function BoljiBrojac({step, begin}){
    const [count, setCount] = React.useState(0);

    const handleCountUp = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    return (<div>
            <p>Event okinut {count} puta</p>
            <Brojac korak={step} start={begin} onDesetice={handleCountUp}></Brojac>
        </div>);
}
