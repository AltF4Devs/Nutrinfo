import React from 'react';
import './styles.css';
//Icons
import DownloadIcon from '../../assets/btn-baixar.png';
import PaintIcon from '../../assets/btn-colorir.png';

/*

variant {
    default
    yellow
}

icon {
    download
    paint
}

*/

export default function Button(props) {
    let classes = "btn-default";
    let icon;
    if(props.variant) {
        classes += " btn-" + props.variant
    }
    if(props.icon === "download") {
        icon = <img src={DownloadIcon} alt="download-icon" className="btn-icon" />;
    } else if(props.icon === "paint") {
        icon = <img src={PaintIcon} alt="paint-icon" className="btn-icon" />;
    }
    return(
        <button className={classes} style={props.style}>
            {icon}
            {props.children}
        </button>
    )

}
