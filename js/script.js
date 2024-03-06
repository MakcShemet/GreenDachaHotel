const dataElement = JSON.parse(logo);

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

const roomStandartOne = JSON.parse(galleryRoomsOne);
const roomStandartTwo = JSON.parse(galleryRoomsTwo);

const galleryRoomOne = document.querySelector('.one-room');
const galleryRoomTwo = document.querySelector('.two-rooms');

const galleryRoomOneArrows = galleryRoomOne.querySelector('.room__gallery-arrows');
const oneRoomPrev = galleryRoomOne.querySelector('.prev');
const oneRoomNext = galleryRoomOne.querySelector('.next');

const galleryRoomOneImage = document.createElement('img');
let galleryRoomOneImageIndex = roomStandartOne[0].id;
galleryRoomOneImage.src = roomStandartOne[galleryRoomOneImageIndex - 1].src;
galleryRoomOneImage.alt = roomStandartOne[galleryRoomOneImageIndex - 1].alt;

galleryRoomOne.prepend(galleryRoomOneImage);

galleryRoomOneArrows.addEventListener('click', (e) => {
    if (e.target === oneRoomNext) {
        galleryRoomOneImageIndex++;
        galleryRoomOneImage.src = roomStandartOne[galleryRoomOneImageIndex - 1].src;
        galleryRoomOneImage.alt = roomStandartOne[galleryRoomOneImageIndex - 1].alt;
    }
    if (e.target === oneRoomPrev) {
        galleryRoomOneImageIndex--;
        galleryRoomOneImage.src = roomStandartOne[galleryRoomOneImageIndex - 1].src;
        galleryRoomOneImage.alt = roomStandartOne[galleryRoomOneImageIndex - 1].alt;
    }
});

const galleryRoomTwoArrows = galleryRoomTwo.querySelector('.room__gallery-arrows');
const twoRoomPrev = galleryRoomTwo.querySelector('.prev');
const twoRoomNext = galleryRoomTwo.querySelector('.next');

const galleryRoomTwoImage = document.createElement('img');
let galleryRoomTwoImageIndex = roomStandartTwo[0].id;
galleryRoomTwoImage.src = roomStandartTwo[galleryRoomTwoImageIndex - 1].src;
galleryRoomTwoImage.alt = roomStandartTwo[galleryRoomTwoImageIndex - 1].alt;

galleryRoomTwo.prepend(galleryRoomTwoImage);

galleryRoomTwoArrows.addEventListener('click', (e) => {
    if (e.target === twoRoomNext) {
        galleryRoomTwoImageIndex++;
        galleryRoomTwoImage.src = roomStandartTwo[galleryRoomTwoImageIndex - 1].src;
        galleryRoomTwoImage.alt = roomStandartTwo[galleryRoomTwoImageIndex - 1].alt;
    }
    if (e.target === twoRoomPrev) {
        galleryRoomTwoImageIndex--;
        galleryRoomTwoImage.src = roomStandartTwo[galleryRoomTwoImageIndex - 1].src;
        galleryRoomTwoImage.alt = roomStandartTwo[galleryRoomTwoImageIndex - 1].alt;
    }
});

/* Modal window */
const dialog = document.getElementById('myDialog')
const dialogOpener = document.querySelectorAll('.booking')
const dialogCloser = document.querySelector('.closeDialogBtn')

function closeOnBackDropClick({ currentTarget, target }) {
    const dialog = currentTarget
    const isClickedOnBackDrop = target === dialog
    if (isClickedOnBackDrop) {
        dialog.close()
    }
}

function openModalAndLockScroll() {
    dialog.showModal()
    document.body.classList.add('scroll-lock')
}

function returnScroll() {
    document.body.classList.remove('scroll-lock')
}

function close() {
    dialog.close()
    returnScroll()
}

dialog.addEventListener('click', closeOnBackDropClick)
dialogOpener.forEach((buttonOpener) => {
    buttonOpener.addEventListener('click', openModalAndLockScroll)
})
dialogCloser.addEventListener('click', (event) => {
    event.stopPropagation()
    close()
})
