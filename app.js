'use strict';

let filterListItem = document.querySelectorAll('.filter-list-item');
filterListItem.forEach(function (header) {
    header.addEventListener('click', function (event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});
