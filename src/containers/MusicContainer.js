import React, {Component} from 'react';
import MusicList from '../components/MusicList';


class MusicContainer extends Component {
    constructor() {
        super();
        this.state = {
            entry: []
        };

        
        
    }

    componentDidMount() {
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
        fetch(url)
        .then(res => res.json())
        .then(topTwenty => this.setState({entry: topTwenty.feed.entry}))
        .catch(err => console.log(err));
    }

    render() {
        if(this.state.entry !== []) {
            return (
                <div className = "music-data">
                    <h2>Top 20 in the UK</h2>
                <MusicList entries={this.state.entry} />
                </div>
            )
        }
    }
}

export default MusicContainer;