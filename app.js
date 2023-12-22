const form = document.querySelector("[data-js-form]");
const submitBtn = document.querySelector('.button');
const success = document.querySelector('.success');
const wrapper = document.querySelector('[data-js-wrapper]');
const closeBtn = document.querySelector('.close-btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const rating = new FormData(e.target).get("rate");
    if (rating) {
        wrapper.innerHTML = success.innerHTML.replace(/{{ XXX }}/, rating);
    } 
});
