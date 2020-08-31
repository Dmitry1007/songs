import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
    var songDetail = ""
    if (props.song !== null) {
        songDetail = props.song
    }
    return (
        <div className="item"> Song Detail
            <div className="content">{songDetail.title}</div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);