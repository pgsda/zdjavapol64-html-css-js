var cat_image = document.querySelector('main img');

function after_load() {
    var dane_kotow = JSON.parse(this.responseText);
    var lista = '';
    for (var i = 0; i < dane_kotow.length; i++) {
        lista += '<li>' + dane_kotow[i].imie + ' ' + dane_kotow[i].nazwisko + '</li>';
    }
    // document.getElementById('imie_kota').innerHTML = dane_kota.imie;
    // document.getElementById('nazwisko_kota').innerHTML = dane_kota.nazwisko;
    document.getElementById('wszystkie_koty').innerHTML = lista;
}

function cat_over() {
    var xhttp = new XMLHttpRequest();

    xhttp.onload = after_load;

    xhttp.open('GET', 'dane_kotow.json', true);
    xhttp.send();
}

cat_image.addEventListener('mouseover', cat_over);
