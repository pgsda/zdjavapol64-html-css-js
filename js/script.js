var cat_image = document.querySelector('main img');

function cat_over_out(event) {
    if (event.type == 'mouseover') {
        cat_image.style.width = '500px';
    } else {
        cat_image.style.width = '200px';
    }
}

cat_image.addEventListener('mouseover', cat_over_out);
cat_image.addEventListener('mouseout', cat_over_out);
