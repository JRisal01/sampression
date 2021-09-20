
document.getElementsByClassName('filter__icon')[0].addEventListener('click', function () {
    var filter = document.getElementsByClassName("filter__radio");
    
    if(filter[0].style.display == 'none'){
        filter[0].style.display = 'flex';
    }
    else{
        filter[0].style.display = 'none';
    }
    
})