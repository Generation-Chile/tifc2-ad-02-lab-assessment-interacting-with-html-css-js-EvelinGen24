
document.querySelector('h1').textContent = "Adiós";

document.querySelectorAll('h2')[1].style.color = "orange";

document.querySelectorAll('h2')[2].addEventListener('click', function() {
    this.style.color = "brown";
});
