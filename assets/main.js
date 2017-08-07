const data = JSON.parse(decodeURIComponent(location.search.slice(1)));

const $ = document.querySelector.bind(document);

$('h1').textContent = data.title;
$('.description').textContent = data.description;
$('pre').textContent = data.changelog;
$('.extra').textContent = data.extraText;
$('.path').textContent = data.placeholder;
$('button').textContent = data.button;

$('path').style.color = '#ddd';
