var cat_image = document.querySelector('main img');

function after_load() {
    document.getElementById('counter').innerHTML = this.responseText;
}

function cat_over() {
    var xhttp = new XMLHttpRequest();

    xhttp.onload = after_load;

    xhttp.open('GET', 'najechales.txt', true);
    xhttp.send();
}

cat_image.addEventListener('mouseover', cat_over);
