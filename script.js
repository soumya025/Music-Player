let player;

// Load the IFrame Player API code asynchronously.
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: '',
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // Player is ready
}

function login() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    if (phoneNumber) {
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('main-page').classList.remove('hidden');
    } else {
        alert('Please enter your phone number!');
    }
}

function playSong() {
    const songSearch = document.getElementById('songSearch').value;
    let videoId = extractVideoID(songSearch);
    
    if (videoId) {
        player.loadVideoById(videoId);
    } else {
        alert('Invalid YouTube URL or Video ID!');
    }
}

function redirectToYouTube() {
    const songSearch = document.getElementById('songSearch').value;
    let videoId = extractVideoID(songSearch);
    
    if (videoId) {
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    } else {
        alert('Invalid YouTube URL or Video ID!');
    }
}

function extractVideoID(url) {
    const regExp = /^.*(youtu.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[2].length == 11) ? match[2] : null;
}
