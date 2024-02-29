const dataElement = JSON.parse(temporary);

const navbar = document.querySelector('.navbar');
const logoDiv = document.querySelector('.logo');
const temporaryCont = document.querySelector(".temporary_content");

dataElement.forEach((element) => {
    const logo = document.createElement("img");
    logo.src = element.src;
    logo.alt = element.alt;

    logoDiv.prepend(logo);
});


// Фиксировання шапка с меню
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }

});

// Объект кнопка прокрутки содержимого вверх
const btnUp = {
    el: document.querySelector('.scrollup__button'),
    show() {
        // удалим у кнопки класс btn_hide
        this.el.classList.remove('btn_hide');
    },
    hide() {
        // добавим к кнопке класс btn_hide
        this.el.classList.add('btn_hide');
    },
    addEventListener() {
        // при прокрутке содержимого страницы
        window.addEventListener('scroll', () => {
            // определяем величину прокрутки
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
            scrollY > 400 ? this.show() : this.hide();
        });
        // при нажатии на кнопку .scrollup__button
        document.querySelector('.scrollup__button').onclick = () => {
            // переместим в начало страницы
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}

btnUp.addEventListener();