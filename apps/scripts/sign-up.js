var getEl = document.querySelector('.sign-up-container');
var getNextEl = document.querySelector('.user-details-wrapper');
var getVerifyBtn = document.querySelector('.verify-btn');
var togglePage = 'hide-page';

function redirect(){
    getEl.classList.add(togglePage);    
    getNextEl.classList.remove(togglePage);
    getVerifyBtn.classList.remove(togglePage);

}

function landingPage(){
    getEl.classList.remove(togglePage);
    getNextEl.classList.add(togglePage)
}