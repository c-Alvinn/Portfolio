// Email copy and popup animation

const emailBtn1 = document.querySelector("#email1");
const emailBtn2 = document.querySelector("#email2");
const popUp = document.querySelector(".email-popup");
const email = "alvaro.rdias14@gmail.com";

function copyEmail() {
    navigator.clipboard.writeText(email)
        .then(() => {
            console.log('Texto copiado para a área de transferência!');
        })
        .catch((error) => {
            console.error('Falha ao copiar texto para a área de transferência:', error);
        });
}

emailBtn1.addEventListener("click", () => {

    copyEmail();

    popUp.style.animation = "popUp 3s ease normal";
    setTimeout(() => popUp.style.animation = "", 3005);
});

emailBtn2.addEventListener("click", () => {
    
    copyEmail();

    popUp.style.animation = "popUp 3s ease normal";
    setTimeout(() => popUp.style.animation = "", 3005);
});