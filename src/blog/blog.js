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
    /**
     * <div class="blog-entry__wrapper">
     *  <div class="blog-entry__thumbnail"></div>
     *  <div class="blog-entry__content">
     *      <div class="blog-entry__title"></div>
     *      <div class="blog-entry__description"></div>
     *  </div>
     * </div>
    */
    const wrapperLi = document.createElement('LI');
    wrapperLi.classList.add('blog-entry__wrapper');

    const thumbnailWrapperDiv = document.createElement('DIV');
    thumbnailWrapperDiv.classList.add('blog-entry__thumbnail');
    const thumbnailLink = document.createElement('a');
    thumbnailLink.href = article.link;
    thumbnailLink.target = "_blank";
    thumbnailLink.appendChild(thumbnailWrapperDiv);

    const contentDiv = document.createElement('DIV');
    contentDiv.classList.add('blog-entry__content');

    const title = document.createElement('H1');
    title.classList.add('blog-entry__title');
    const titleLink = document.createElement('a');
    titleLink.classList.add('blog-entry__title-link');
    titleLink.href = article.link;
    titleLink.target = "_blank";
    titleLink.appendChild(title);

    // const descriptionDiv = document.createElement('DIV');
    // descriptionDiv.classList.add('blog-entry__description');

    const dateDiv = document.createElement('DIV');
    dateDiv.classList.add('blog-entry__date');

    const readMoreLink = document.createElement('a');
    readMoreLink.innerHTML = 'Read more >';
    readMoreLink.classList.add('blog-entry__read-more-link');
    readMoreLink.href = article.link;
    readMoreLink.target = "_blank";

    wrapperLi.appendChild(thumbnailLink);
    wrapperLi.appendChild(contentDiv);
    contentDiv.appendChild(titleLink);
    contentDiv.appendChild(dateDiv);
    // contentDiv.appendChild(descriptionDiv);
    contentDiv.appendChild(readMoreLink);

    const thumbnail = new Image()
    thumbnailWrapperDiv.appendChild(thumbnail);


    const articleDate = moment(article.pubDate);
    const articleTitle = article.title;
     // TODO wtf
    // const articleDescription = 'Guidelines for mending the toxic division in our relationships, our lives, and our country';
    const articleThumbnail = article.thumbnail;
    
    thumbnail.onload = () => {
        const height = thumbnail.height;
        const width = thumbnail.width;
        const widthRation = width/height;
        thumbnail.style.height = '125px';
        thumbnail.style.width = widthRation * 125 + 'px';
    }

    thumbnail.src = articleThumbnail;
    title.innerHTML = articleTitle;
    // descriptionDiv.innerHTML = articleDescription;
    dateDiv.innerHTML = articleDate.format('MMM do YY');

    return wrapperLi;
}