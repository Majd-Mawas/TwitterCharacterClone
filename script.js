const textarea_element = document.querySelector('#txt_area');
const counter_element = document.querySelector('#counter');
const tweent_element = document.querySelector('#tweet');


function characterCount(){
    let length = textarea_element.value.length;
    counter_element.innerHTML = length + '/280';

    if(length > 280)
    {
        tweent_element.setAttribute('disabled', 1);
    }
    else
    {
        tweent_element.removeAttribute('disabled');
    }
}

textarea_element.addEventListener('keyup', characterCount);