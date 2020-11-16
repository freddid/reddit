document.querySelectorAll('.key').forEach(element => {
    element.addEventListener('click', function (e) {
        // *Написать проверку...
        e.target.classList.add('delete');
        return e.target;
    })
});

