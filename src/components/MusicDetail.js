import React from 'react';

const MusicDetail = (props) => {
    
    return (
        <li>{props.title} ~ {props.artist}</li>
    )
}

export default MusicDetail;