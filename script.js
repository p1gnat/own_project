// Получаем элементы бургер-меню и его иконку
const burgerMenu = document.querySelector('.burger_menu');
const burgerIcon = document.querySelector('.burger_icon');
const menuUl = document.querySelector('.menu_ul');

// Добавляем обработчик события клика на иконку бургер-меню
burgerIcon.addEventListener('click', function() {
    // Переключаем класс active у бургер-меню и основного меню
    burgerMenu.classList.toggle('active');
    menuUl.classList.toggle('active');
});