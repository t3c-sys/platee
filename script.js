// Добавляет кнопки в меню снизу и позволяет по ним кликать
const footer = document.querySelector('footer');
const section = document.querySelector('section');
const articles = Array.from(section.children);


const show = (article) => {
    articles.forEach(one => one.style.display = 'none');
    article.style.display = 'flex';
    window.history.pushState({ page: article.id }, article.id, '#' + article.id);
}

articles.forEach(article => {

    if (!article.id) return;
    const div = document.createElement('div');
    div.onclick = () => show(article);

    div.textContent = article.id;
    footer.appendChild(div);
    article.style.display = 'none';
});

// Если есть якорь, открыть соответствующий текст
const anchor = decodeURI(window.location.hash).slice(1);
const current = anchor && document.getElementById(anchor);
current && show(current);