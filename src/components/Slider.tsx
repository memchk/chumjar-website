import React, { useEffect, useRef, useState } from 'react';
import cx from "classnames";
import { useSprings, animated, config} from '@react-spring/web';

function Slider(props) {
    const len = React.Children.count(props.children);

    const idx = useRef(0);

    const [springs, api] = useSprings(len, i => ({
        opacity: i == 0 ? 1 : 0,
        config: config.molasses
    }));

    useEffect(() => {
        const id = setInterval(() => {
            idx.current = (idx.current + 1) % len;
            api.start(i => ({
                opacity: i == idx.current ? 1 : 0
            }));
        }, props.interval);

        return () => clearInterval(id);
    })

    return (
    <div className="overflow-hidden w-full relative" style={{height: props.height}}>
        {React.Children.map(props.children, (ch, i) =>
            <animated.div key={i} className="absolute h-full w-full" style={springs[i]}>
                {ch}
            </animated.div>
        )}
    </div>
    )
}

export default Slider;