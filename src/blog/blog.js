import moment from '../../node_modules/moment';

window.addEventListener('load', () => {
  fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40jatinkhanna722&api_key=gvzjddnlmcf6trrtuytye0br6i1giododsykvvnk', {
      headers: {
          'Content-Type': 'application/json'
      }
  })
    .then(response => response.json())
    .then(data  => data.items.filter(item => item.categories.length > 0))
    .then(articles => {
        console.log(articles);
        articles.forEach(article => {
            const articleListItem = createBlogEntry(article);
            document.querySelector('#blog-entries__list').appendChild(articleListItem);
        });
    });
});

function createBlogEntry(article) {
    const wrapper = document.createElement('LI');
    wrapper.classList.add('blog-entry__wrapper');
    // wrapper.classList.add('text-content');

    const titleDiv = document.createElement('DIV');
    titleDiv.classList.add('blog-entry__title-wrapper')

    const thumbnailWrapper = document.createElement('DIV');
    thumbnailWrapper.classList.add('blog-entry__thumbnail')
    const thumbnail = new Image()
    thumbnail.onload = () => {
        const height = thumbnail.height;
        const width = thumbnail.width;
        const widthRation = width/height;
        thumbnail.style.height = '125px';
        thumbnail.style.width = widthRation * 125 + 'px';
    }
    thumbnail.src = article.thumbnail;
    titleDiv.appendChild(thumbnailWrapper);
    thumbnailWrapper.appendChild(thumbnail);

    const title = document.createElement('H1')
    title.classList.add('blog-entry__title')
    title.innerHTML = article.title;
    titleDiv.appendChild(title);

    wrapper.appendChild(titleDiv);

    // const description = document.createElement('P');
    // description.classList.add('blog-entry__description');
    // description.innerHTML = article.description;
    // wrapper.appendChild(description);

    const articleDate = moment(article.pubDate);
    console.log(articleDate.format('MMM do YY'));

    return wrapper;
}