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
    const { icon, variant, onClick } = props
    let classes = "btn-default";
    let new_icon;
    if (variant) {
        classes += " btn-" + props.variant
    }
    if (icon === "download") {
        new_icon = <img src={DownloadIcon} alt="download-icon" className="btn-icon" />;
    } else if (icon === "paint") {
        new_icon = <img src={PaintIcon} alt="paint-icon" className="btn-icon" />;
    }
    return (
        <a href={props.href} className="td-none">
            <button className={classes} style={props.style} onClick={onClick}>
                {new_icon}
                {props.children}
            </button>
        </a>
    )

}
