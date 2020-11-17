document.querySelectorAll('.key').forEach(element => {
    element.addEventListener('click', function (e) {
        
        e.target.classList.add('delete');
        return e.target;
    })
});


function draw(timePassed) {

  train.style.left = timePassed / 5 + 'px';
}

