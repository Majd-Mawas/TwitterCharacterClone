const textarea_element = document.querySelector('#txt_area');
const counter_element = document.querySelector('#counter');
const tweet_element = document.querySelector('#tweet');


function characterCount(){
    let length = textarea_element.value.length;
    counter_element.innerHTML = length + '/280';

    if(length > 280)
    {
        tweet_element.setAttribute('disabled', 1);
        tweet_element.classList.replace('btn-primary','btn-danger');
        counter_element.classList.replace('text-bg-secondary','text-bg-danger');
    }
    else
    {
        tweet_element.removeAttribute('disabled');
        tweet_element.classList.replace('btn-danger','btn-primary');
        counter_element.classList.replace('text-bg-danger','text-bg-secondary');
    }
}

textarea_element.addEventListener('keyup', characterCount);