'use strict';

var headerNavLink = document.querySelectorAll('.header__nav-link');
var arrowUpInMenu = document.querySelector('.arrow-up');
var headerMegaMenu = document.querySelector('.header__mega');
var container = document.querySelector('.container');

// mega menus
var headerNaxExitMega = document.querySelector('.header__nav-exit__mega');
var megaAbout = document.querySelector('.header__about-mega');

var exits = document.querySelectorAll('.header__mega-item__exit');
var arrow_about_about = document.querySelector('.arrow-up-about');
var triangleGrocery = document.querySelector('.header__triangle');
var triangleAbout = document.querySelector('.header__triangle-about');

// mega menu article
var megaArticleBlog = document.querySelector('.header__article');
var arrowBlog = document.querySelector('.arrow-up-blog');

// items from mega header
var itemsMegaHeader = document.querySelectorAll('.header__mega-item');

headerNavLink.forEach(function (link) {
    if (link.innerHTML.slice(0, 12) === 'Grocery shop') {
        link.classList.add('mega_menu');
    }
    if (link.innerHTML.slice(0, 8) == 'About us') {
        link.classList.add('about_menu');
    }
    if (link.innerHTML.slice(0, 4) == 'Blog') {
        link.classList.add('blog_menu');
    }
});
// take link with menu
var megaMenu = document.querySelector('.mega_menu');
var headerAboutLink = document.querySelector('.about_menu');
var blogMenuLink = document.querySelector('.blog_menu');

function checkAboutMenu() {
    if (megaAbout.classList.contains('header__about-mega_active')) {
        megaAbout.classList.remove('header__about-mega_active');
        arrow_about_about.classList.remove('arrow-up-about_rotate');
        triangleAbout.classList.remove('header__triangle-about_active');
    }
}

function checkMegaMenu() {
    if (headerMegaMenu.classList.contains('header__mega_active')) {
        headerMegaMenu.classList.remove('header__mega_active');
        arrowUpInMenu.classList.remove('arrow-up_rotate');
        triangleGrocery.classList.remove('header__triangle_active');
    }
}

function checkBlogMenu() {
    if (megaArticleBlog.classList.contains('header__article_active')) {
        megaArticleBlog.classList.remove('header__article_active');
        arrowBlog.classList.remove('arrow-up-blog_active');
    }
}

function showMegaMenu() {
    var innerWidth = Number(window.getComputedStyle(container).getPropertyValue('width').slice(0, -2));

    // check other mega menus
    checkAboutMenu();
    checkBlogMenu();

    if (innerWidth > 375) {
        arrowUpInMenu.classList.toggle('arrow-up_rotate');
        headerMegaMenu.classList.toggle('header__mega_active');
        triangleGrocery.classList.toggle('header__triangle_active');
    }
}

function showMegaMenuAbout() {
    var innerWidth = Number(window.getComputedStyle(container).getPropertyValue('width').slice(0, -2));

    // check other mega menus
    checkMegaMenu();
    checkBlogMenu();

    if (innerWidth > 375) {
        megaAbout.classList.toggle('header__about-mega_active');
        arrow_about_about.classList.toggle('arrow-up-about_rotate');
        triangleAbout.classList.toggle('header__triangle-about_active');
    }
}

function showMegaMenuBlog() {
    var innerWidth = Number(window.getComputedStyle(container).getPropertyValue('width').slice(0, -2));

    // check other mega menus
    checkMegaMenu();
    checkAboutMenu();

    if (innerWidth > 375) {
        megaArticleBlog.classList.toggle('header__article_active');
        arrowBlog.classList.toggle('arrow-up-blog_active');
    }
}

// mega menu
megaMenu.addEventListener('mouseover', showMegaMenu);
headerMegaMenu.addEventListener('mouseleave', showMegaMenu);

// mega menu about
headerAboutLink.addEventListener('mouseover', showMegaMenuAbout);
megaAbout.addEventListener('mouseleave', showMegaMenuAbout);

// mega menu blog
blogMenuLink.addEventListener('mouseover', showMegaMenuBlog);
megaArticleBlog.addEventListener('mouseleave', showMegaMenuBlog);

/* 375px */
var navMenuExit = document.querySelector('.header__nav-exit');
var headerNav = document.querySelector('.header__nav');

function prevDefGrocery() {
    megaMenu.setAttribute('href', '#');
    megaMenu.setAttribute('onclick', 'return false;');
}

window.addEventListener('resize', prevDefGrocery);
document.addEventListener('DOMContentLoaded', prevDefGrocery);

document.body.addEventListener('click', function (event) {
    // open header nav
    if (event.target.className === 'header__hamburger' || event.target.className === 'hamburger__item' || event.target.className === 'header__nav-link mega_menu') {
        headerNav.classList.add('header__nav_active');
    }

    // close header nav
    if (event.target.className === 'header__nav-exit') {
        headerNav.classList.remove('header__nav_active');
    }

    event.stopImmediatePropagation();
});

megaMenu.addEventListener('click', function () {
    headerMegaMenu.classList.toggle('header__mega_active');
});

headerNaxExitMega.addEventListener('click', function () {
    headerMegaMenu.classList.toggle('header__mega_active');
});

document.querySelector('.header__mega-wrapper').addEventListener('click', function (event) {
    if (event.target.className === 'header__mega-item__title') {
        event.target.nextElementSibling.classList.add('header__mega-item__descr_active');
    }
});

exits.forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.target.parentElement.classList.remove('header__mega-item__descr_active');
        event.stopImmediatePropagation();
    });
});

// Products
new Swiper('.swiper-cont', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    speed: 600,
    slidesPerView: 1,
    slidesPerGroup: 1
});

// zoom picture
$(document).ready(function () {
    // $('.imgSliderGoods').blowup();
    $('.imgSliderGoods').each(function (index) {
        $(this).blowup({
            "background": "transparent",
            "width": 400,
            "height": 500,
            "round": false,
            "scale": 0.35,
            "customClasses": "customSquare"
        });
    });
});