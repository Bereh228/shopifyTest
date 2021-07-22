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

// Product's swiper
new Swiper('.swiper-cont', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true
    },
    speed: 600,
    slidesPerView: 1,
    slidesPerGroup: 1,
    allowTouchMove: false
});
// Product's zoom
$('.swiper__img').zoom();

// collection

var showFilters = document.querySelector('.collection__filter');

// show Filters
function showFilterFunction() {
    showFilters.addEventListener('click', function () {
        $('.filter__block').fadeIn('fast');
        setTimeout(function () {
            $('.filter__block-wrapper').addClass('filter__block-wrapper_active');
        }, 300);
    });
}
showFilterFunction();
// hide Filters
function hideFilterFunction() {
    var hideFilters = document.querySelector('.filter__header-exit');
    hideFilters.addEventListener('click', function () {
        $('.filter__block-wrapper').removeClass('filter__block-wrapper_active');

        setTimeout(function () {
            $('.filter__block').fadeOut('fast');
        }, 600);
    });
}
hideFilterFunction();

function showCategoryHeaders() {
    var categoryHeaders = document.querySelectorAll('.category__header');
    categoryHeaders.forEach(function (item) {
        item.addEventListener('click', function () {
            item.nextElementSibling.classList.toggle('category__subcategories_active');
            if (item.firstElementChild.firstElementChild.nextElementSibling.innerHTML === '+') {
                item.firstElementChild.firstElementChild.nextElementSibling.innerHTML = '-';
            } else {
                item.firstElementChild.firstElementChild.nextElementSibling.innerHTML = '+';
            }
        });
    });
}
showCategoryHeaders();

// filters
var objHandle = {
    name: '/all/',
    url: ''
};

function labelItemFunction() {
    var labelItems = document.querySelectorAll('.label-item');

    labelItems.forEach(function (item) {
        item.addEventListener('click', function () {
            var optionsValue = document.querySelectorAll('.optionClass');
            // remove attributures if was select
            optionsValue.forEach(function (item) {
                item.removeAttribute('selected');
            });
            // add selected to first
            for (var index = 0; index < optionsValue.length; index++) {
                optionsValue[index].setAttribute('selected', '');
                break;
            }
            reloadContenturl(item.dataset.filter);
        });
    });
}
labelItemFunction();

// reloadContent
function reloadContenturl(url) {
    var arrayLink = [];
    setTimeout(function () {
        var inputItems = document.querySelectorAll('.input-item');
        inputItems.forEach(function (item) {
            if (item.checked) {
                var localUrlCat = 'category_' + item.getAttribute('name').toLowerCase() + ':';
                var localUrlVal = item.dataset.subname.toLowerCase();
                // console.log(item.dataset.subname.toLowerCase());
                var resultUrl = localUrlCat + localUrlVal;
                arrayLink.push(resultUrl);
            }
        });
    }, 0);

    setTimeout(function () {
        url = '/collections' + objHandle.name;

        for (var index = 0; index < arrayLink.length; index++) {
            // console.log(arrayLink[index]);
            if (index >= 0 && index != arrayLink.length - 1) url += arrayLink[index] + '+';else if (index >= 0 && index == arrayLink.length - 1) url += arrayLink[index];else url += arrayLink[index];
        }
    }, 0);

    setTimeout(function () {
        $.ajax({
            type: 'GET',
            url: url,
            data: {},
            complete: function complete(data) {
                $('.collection__wrapper').fadeOut('fast');
                setTimeout(function () {
                    $('.collection__wrapper').fadeIn();
                }, 500);
                $('.collection__wrapper').html($('.collection__wrapper', data.responseText).html());

                // reset to zero options
                var optionItems = document.querySelectorAll('.optionClass');
                optionItems.forEach(function (item) {
                    item.removeAttribute('selected');
                });
                // select order by as default
                selectOrderBy();

                objHandle.url = url;
                history.pushState({
                    page: url
                }, url, url);
                // labelItemFunction()
            }
        });
    }, 0);
}

// take all collections
var collectionItems = document.querySelectorAll('.collection__list-item');
collectionItems.forEach(function (item) {
    item.addEventListener('click', function () {
        reloadFilterAndCollectionContent(item.dataset.handle, item.dataset.hname);
    });
});

// fix selected
function selectOrderBy() {
    var optionItems = document.querySelectorAll('.optionClass');
    optionItems.forEach(function (item) {
        if (item.innerHTML === 'Sort by') {
            item.setAttribute('selected', '');
        }
    });
}
window.addEventListener('DOMContentLoaded', selectOrderBy);

function reloadFilterAndCollectionContent(url, nameHandle) {
    objHandle.name = nameHandle;

    // remove all classes categories
    var collectionsButtons = document.querySelectorAll('.collection__list-item');
    collectionsButtons.forEach(function (item) {
        if (item.classList.contains('collection__list-item_active')) {
            item.classList.remove('collection__list-item_active');
        }
    });

    $.ajax({
        type: 'GET',
        url: url,
        data: {},
        complete: function complete(data) {
            $('.collection__wrapper').fadeOut('fast');
            setTimeout(function () {
                $('.collection__wrapper').fadeIn();
            }, 500);
            $('.filter__block-wrapper').html($('.filter__block-wrapper', data.responseText).html());
            $('.collection__wrapper').html($('.collection__wrapper', data.responseText).html());
            objHandle.url = url;

            // reset to zero options
            var optionItems = document.querySelectorAll('.optionClass');
            optionItems.forEach(function (item) {
                item.removeAttribute('selected');
            });
            // select order by as default
            selectOrderBy();

            history.pushState({
                page: url
            }, url, url);

            // select active Collection
            var collectionsButtons = document.querySelectorAll('.collection__list-item');
            collectionsButtons.forEach(function (item) {
                var dataHname = item.dataset.hname.substring(0, item.dataset.hname.length - 1);
                if (history.state.page.includes(dataHname)) {
                    item.classList.add('collection__list-item_active');
                }
            });

            showCategoryHeaders();
            labelItemFunction();
            hideFilterFunction();
        }
    });
}

// sort products ************************
Shopify.queryParams = {};
if (location.search.length) {
    for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
        aKeyValue = aCouples[i].split('=');
        if (aKeyValue.length > 1) {
            Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
        }
    }
}
jQuery('#SortBy').val('{{ collection.sort_by | default: collection.default_sort_by | escape }}').bind('change', function () {
    Shopify.queryParams.sort_by = jQuery(this).val();
    var resultUrl = objHandle.url + '?' + jQuery.param(Shopify.queryParams).replace(/\+/g, '%20');
    $.ajax({
        type: 'GET',
        url: resultUrl,
        data: {},
        complete: function complete(data) {
            $('.collection__wrapper').fadeOut('fast');
            setTimeout(function () {
                $('.collection__wrapper').fadeIn();
            }, 500);
            $('.filter__block-wrapper').html($('.filter__block-wrapper', data.responseText).html());
            $('.collection__wrapper').html($('.collection__wrapper', data.responseText).html());
            history.pushState({
                page: resultUrl
            }, resultUrl, resultUrl);
            showCategoryHeaders();
            labelItemFunction();
            hideFilterFunction();
        }
    });
});

// radio button after reload page
window.addEventListener('DOMContentLoaded', function () {
    var selectedRadioButtons = document.querySelectorAll('.input-item');
    selectedRadioButtons.forEach(function (item) {
        if (history.state) {
            if (history.state.page.includes(item.dataset.subname.toLowerCase())) {
                item.checked = true;
            }
        }
    });
});

// class check categories
window.addEventListener('DOMContentLoaded', function () {
    var collectionsButtons = document.querySelectorAll('.collection__list-item');
    if (collectionsButtons) {
        collectionsButtons.forEach(function (item) {
            var dataHname = item.dataset.hname.substring(0, item.dataset.hname.length - 1);
            if (history.state) {
                if (history.state.page.includes(dataHname)) {
                    item.classList.add('collection__list-item_active');
                }
            }
        });
    }
});

// close filter
document.querySelector('.filter__block').addEventListener('click', function (event) {
    if (event.target.className === 'filter__block') {
        $('.filter__block-wrapper').removeClass('filter__block-wrapper_active');
        setTimeout(function () {
            $('.filter__block').fadeOut('slow');
        }, 600);
    }
});