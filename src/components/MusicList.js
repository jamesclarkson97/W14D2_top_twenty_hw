import React from 'react';
import MusicDetail from './MusicDetail.js';

const MusicList = (props) => {
    
    const musicNodes = props.entries.map((song) => {
        return (
            <MusicDetail key={song.id.attributes['im:id']} title={song['im:name'].label} artist={song['im:artist'].label}/>
        )
    });
    return (
        <>
        <ol>{musicNodes}</ol>
    
        </>
        
    )
}

export default MusicList;