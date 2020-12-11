import SpotifyWebApi from '../../node_modules/spotify-web-api-js/src/spotify-web-api.js'
const spotifyApi = new SpotifyWebApi()

window.addEventListener('load', () => {
    getAccessToken(true)
        .then(token => {
            console.log(token);
            spotifyApi.setAccessToken(token);
            spotifyApi.getShowEpisodes('6IG1OHtBSa95QpTLdiUfMW', {
                market: 'US',
            })
                .then(data  => {
                    data.items.forEach((episode) => {
                        const iframe = createPodcastPlayer(episode);
                        document.querySelector('#podcast-list').appendChild(iframe);
                    })
                });
        });
});

/**
 * <iframe src="https://open.spotify.com/embed-podcast/show/2UtdM2mvBQesTqGTyiKn8w" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
 * <iframe src="https://open.spotify.com/embed-podcast/episode/6rmqdeg3V5VQCYy9lQxSG3" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
 */

function createPodcastPlayer(episode) {
    const li = document.createElement('li');
    li.classList.add('podcast__list-item')
    const iframe = document.createElement('iframe');
    iframe.src = `https://open.spotify.com/embed-podcast/episode/${episode.id}`;
    iframe.width = '100%';
    iframe.height = 232;
    iframe.frameborder = 0;
    iframe.allowtransparency = true;
    iframe.allow = 'encrypted-media';
    li.appendChild(iframe);
    return li;
}

function getAccessToken(forceReload) {
    if (!forceReload && sessionStorage.getItem(SESSION_STORAGE_TOKEN_KEY)) {
        return Promise.resolve(sessionStorage.getItem(SESSION_STORAGE_TOKEN_KEY));
    } else {
        return fetch('http://localhost:3000/api/token')
            .then(response => response.json())
            .then(response => {
                return response.access_token;
            })
    }
}