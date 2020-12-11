import SpotifyWebApi from '../../node_modules/spotify-web-api-js/src/spotify-web-api.js'
const spotifyApi = new SpotifyWebApi()

const SESSION_STORAGE_TOKEN_KEY = 'SPOTIFY_API_TOKEN';

window.addEventListener('load', () => {
    getAccessToken()
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

function getAccessToken() {
    if (sessionStorage.getItem(SESSION_STORAGE_TOKEN_KEY)) {
        return Promise.resolve(sessionStorage.getItem(SESSION_STORAGE_TOKEN_KEY));
    } else {
    const body = {
        'grant_type': 'client_credentials',
    };
    const searchParams = Object.keys(body).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(body[key]);
    }).join('&');
    return fetch('https://accounts.spotify.com/api/token', {
            method: 'post',
            body: searchParams,
            headers: new Headers({
                'Authorization': 'Basic MzJiNDE3NzBmODU5NDA1N2JjZTE1OTA4ODllZDJjYTI6Y2ZkYzQxNTRjODU5NGM5ZDkwYzZmZWUxOTVkMDRmZDQ=',
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        })
        .then(response => response.json())
        .then(response => response.access_token)
    }
}