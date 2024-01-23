const sections = document.querySelectorAll('section');

sections.forEach(sec => {
    sec.classList.add('not-show');
});

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop / 5 * 4;
        const height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show');
        } else {
            sec.classList.remove('show');
        }
    })
};

alert('Este site está sendo atualizado.\n\nPara visualizar os projetos atualizados entre no link do GitHub na seção "Sobre".');