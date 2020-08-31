const songsReducer = () => {
    return [
        { title: 'No Lie', duration: '3:45' },
        { title: 'Ocean', duration: '2:35' },
        { title: 'Surf Life', duration: '1:45' },
        { title: 'Cali Vibe', duration: '4:45' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};