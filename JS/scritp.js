/*Navbar*/
function toggleNavbar() {
    var navbar = document.querySelector('.navbar');
    if (navbar.style.right === '0%' || navbar.style.right === '') {
        navbar.style.right = '-20%';
    } else {
        navbar.style.right = '0%';
    }
}

/*Avaliação dos Trabalhadores*/
function rate(stars) {
    alert('Você avaliou com ' + stars + ' estrela(s)!');
}

/*Lista de Profissionais*/
document.querySelectorAll('.select-box').forEach((selectBox) => {
    selectBox.addEventListener('focus', (event) => {
        event.target.previousElementSibling.classList.add('hidden');
    });
    selectBox.addEventListener('blur', (event) => {
        if (event.target.value === 'all') {
            event.target.previousElementSibling.classList.remove('hidden');
        }
    });
    selectBox.addEventListener('change', (event) => {
        if (event.target.value !== 'all') {
            event.target.previousElementSibling.classList.add('hidden');
        }
    });
});
/*Disponibilizar Consulta*/
const gridButtons = document.querySelectorAll('.gridButton');

function handleButtonClick(event) {
    const button = event.target;
    button.classList.toggle('clicado');
}
gridButtons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});