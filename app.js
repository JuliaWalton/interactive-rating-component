const form = document.querySelector("[data-js-form]");
const submitBtn = document.querySelector('.button');
const success = document.querySelector('.success');
const wrapper = document.querySelector('[data-js-wrapper]');
const closeBtn = document.querySelector('.close-btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const rating = new FormData(e.target).get("rate");
    console.log(rating);
    if (rating) {
        wrapper.innerHTML = success.innerHTML.replace(/{{ XXX }}/, rating);
    } else {
        submitBtn.textContent = `Please submit a rating`;
    }
    // console.log(e.target);
});

// closeBtn.addEventListener('click', () => {
//     if (success.innerHTML = wrapper.innerHTML)
//     console.log(idk);
//     })

