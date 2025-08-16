// Фиксированное меню при прокрутке
const navbar = document.getElementById('navbar');
        
// Рассчитываем 70% высоты страницы
const scrollThreshold = document.body.scrollHeight * 0.1;

window.addEventListener('scroll', function() {
    if (window.scrollY > scrollThreshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Бургер-меню для мобильных
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', function() {
    // Переключение меню
    navLinks.classList.toggle('nav-active');
    // Анимация бургера
    burger.classList.toggle('toggle');
    // Анимация пунктов меню
    navItems.forEach((item, index) => {
if (item.style.animation) {
item.style.animation = '';
        } else {
item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Закрытие меню при клике на пункт (для мобильных)
navItems.forEach(item => {
    item.addEventListener('click', function() {
        navLinks.classList.remove('nav-active');
        burger.classList.remove('toggle');
        navItems.forEach(item => {
item.style.animation = '';
        });
    });
});

// Адаптация к изменению размера окна
window.addEventListener('resize', function() {
    // Пересчитываем порог прокрутки при изменении размера окна
    scrollThreshold = document.body.scrollHeight * 0.01;
    
    if (window.innerWidth > 768) {
        // На больших экранах убедимся, что меню видимо
        navLinks.classList.remove('nav-active');
        burger.classList.remove('toggle');
        navItems.forEach(item => {
item.style.animation = '';
        });
    }
});

// Текст для анимации печатания
//        const text = "My name is Maryna and I am Front End Developer";
//        const typingElement = document.getElementById('typing');
//        const typingElement = document.getElementById('typing');
//        let i = 0;
//        const speed = 100; // Скорость печати (меньше = быстрее)
        
//        function typeWriter() {
//            if (i < text.length) {
//                typingElement.innerHTML += text.charAt(i);
//                i++;
//                setTimeout(typeWriter, speed);
//            }
//        }
        
        // Запускаем анимацию при загрузке страницы
//        window.onload = function() {
//            setTimeout(typeWriter, 500); // Небольшая задержка перед началом
//        };
// Ждем полной загрузки страницы
