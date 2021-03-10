var cat_image = document.querySelector('main img');
var c = 0;

function cat_over() {
    c++;
    document.getElementById('counter').innerHTML = c;
}

cat_image.addEventListener('mouseover', cat_over);
