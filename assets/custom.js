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
    if (link.innerHTML.slice(0, 12) === 'Grocery shop') link.classList.add('mega_menu');
    if (link.innerHTML.slice(0, 8) == 'About us') link.classList.add('about_menu');
    if (link.innerHTML.slice(0, 4) == 'Blog') link.classList.add('blog_menu');
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
window.addEventListener('DOMContentLoaded', prevDefGrocery);

document.body.addEventListener('click', function (event) {
    // open header nav
    if (event.target.className === 'header__hamburger' || event.target.className === 'hamburger__item' || event.target.className === 'header__nav-link mega_menu') headerNav.classList.add('header__nav_active');
    // close header nav
    if (event.target.className === 'header__nav-exit') headerNav.classList.remove('header__nav_active');
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
    if (showFilters) {
        showFilters.addEventListener('click', function () {
            $('.filter__block').fadeIn('fast');
            setTimeout(function () {
                $('.filter__block-wrapper').addClass('filter__block-wrapper_active');
            }, 300);
        });
    }
}
showFilterFunction();
// hide Filters
function hideFilterFunction() {
    // const hideFilters = document.querySelector('.filter__header-exit');
    document.querySelector('.filter__header-exit').addEventListener('click', function () {
        $('.filter__block-wrapper').removeClass('filter__block-wrapper_active');
        setTimeout(function () {
            $('.filter__block').fadeOut('fast');
        }, 600);
    });
}
hideFilterFunction();

function showCategoryHeaders() {
    document.querySelectorAll('.category__header').forEach(function (item) {
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
    document.querySelectorAll('.label-item').forEach(function (item) {
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

function showContentJQUERY(data) {
    $('.collection__wrapper').fadeOut('fast');
    setTimeout(function () {
        $('.collection__wrapper').fadeIn();
    }, 350);
    $('.collection__wrapper').html($('.collection__wrapper', data.responseText).html());
}

function reloadContenturl(url) {
    var arrayLink = [];
    setTimeout(function () {
        document.querySelectorAll('.input-item').forEach(function (item) {
            if (item.checked) arrayLink.push('category_' + item.getAttribute('name').toLowerCase() + ':' + item.dataset.subname.toLowerCase());
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
                showContentJQUERY(data);
                // reset to zero options
                document.querySelectorAll('.optionClass').forEach(function (item) {
                    return item.removeAttribute('selected');
                });
                // select order by as default
                selectOrderBy();

                objHandle.url = url;
                history.pushState({
                    page: url
                }, url, url);
                addContentOnPage();

                document.querySelector('.filter__clear').classList.add('filter__clear_show');
                countProductsOnPage();
                buttonReload();
            }
        });
    }, 0);
}
// take all collections
document.querySelectorAll('.collection__list-item').forEach(function (item) {
    item.addEventListener('click', function () {
        reloadFilterAndCollectionContent(item.dataset.handle, item.dataset.hname);
    });
});

// function reloadFucntion
function reloadFunction() {
    showCategoryHeaders();
    labelItemFunction();
    hideFilterFunction();
    addContentOnPage();
    clearFilter();
    countProductsOnPage();
}

function selectOrderBy() {
    document.querySelector('#SortBy').value = "";
}
window.addEventListener('DOMContentLoaded', selectOrderBy);

function reloadFilterAndCollectionContent(url, nameHandle) {
    objHandle.name = nameHandle;
    // remove all classes categories
    document.querySelectorAll('.collection__list-item').forEach(function (item) {
        if (item.classList.contains('collection__list-item_active')) item.classList.remove('collection__list-item_active');
    });
    $.ajax({
        type: 'GET',
        url: url,
        data: {},
        complete: function complete(data) {
            showContentJQUERY(data);
            $('.filter__block-wrapper').html($('.filter__block-wrapper', data.responseText).html());
            objHandle.url = url;
            // reset to zero options
            document.querySelectorAll('.optionClass').forEach(function (item) {
                item.removeAttribute('selected');
            });
            // select order by as default
            selectOrderBy();
            history.pushState({
                page: url
            }, url, url);
            // select active Collection
            document.querySelectorAll('.collection__list-item').forEach(function (item) {
                if (history.state.page.includes(item.dataset.hname.substring(0, item.dataset.hname.length - 1))) {
                    item.classList.add('collection__list-item_active');
                }
            });
            reloadFunction();
            buttonReload();
            clickArrow();
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
            showContentJQUERY(data);
            $('.filter__block-wrapper').html($('.filter__block-wrapper', data.responseText).html());
            history.pushState({
                page: resultUrl
            }, resultUrl, resultUrl);
            reloadFunction();
            buttonReload();
            clickArrow();
        }
    });
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

// clear filter
function clearFilter() {
    var filterClearButton = document.querySelector('.filter__clear');
    filterClearButton.addEventListener('click', function () {
        document.querySelectorAll('.input-item').forEach(function (item) {
            if (item.checked) item.checked = false;
        });
        $.ajax({
            type: 'GET',
            url: filterClearButton.dataset.handle,
            data: {},
            complete: function complete(data) {
                showContentJQUERY(data);
                $('.filter__block-wrapper').html($('.filter__block-wrapper', data.responseText).html());
                history.pushState({
                    page: filterClearButton.dataset.handle
                }, filterClearButton.dataset.handle, filterClearButton.dataset.handle);
                reloadFunction();
                buttonReload();
                clickArrow();
            }
        });
    });
}
clearFilter();

// how much displayed products
function countProductsOnPage() {
    $('.displayed__localCount').html(document.querySelectorAll('.collection__item').length + ' of');
}
countProductsOnPage();

window.addEventListener('DOMContentLoaded', function () {
    // 1 radio button after reload page
    document.querySelectorAll('.input-item').forEach(function (item) {
        if (history.state) {
            if (history.state.page.includes(item.dataset.subname.toLowerCase())) item.checked = true;
        }
    });
    // 2 class check categories
    if (document.querySelectorAll('.collection__list-item')) {
        document.querySelectorAll('.collection__list-item').forEach(function (item) {
            if (history.state) {
                if (history.state.page.includes(item.dataset.hname.substring(0, item.dataset.hname.length - 1))) item.classList.add('collection__list-item_active');
            }
        });
    }
    // 3 check url and add class collagen
    document.querySelectorAll('.collection__list-item').forEach(function (item) {
        if (item.dataset.handle.includes(window.location.pathname)) item.classList.add('collection__list-item_active');
    });
    // 4 show clear filter after reload page if at least one radio button checked
    var activeRadioButtons = document.querySelectorAll('.input-item');
    for (var index = 0; index < activeRadioButtons.length; index++) {
        if (activeRadioButtons[index].checked === true) {
            $('.filter__clear').addClass('filter__clear_show');
            break;
        }
    }
});

// reload page
var Reloaded = function Reloaded(newUrl) {
    if (newUrl) {
        var url = window.location.pathname;
        $.ajax({
            type: 'GET',
            url: url,
            data: {},
            complete: function complete(data) {
                showContentJQUERY(data);
                $('.filter__block-wrapper').html($('.filter__block-wrapper', data.responseText).html());
                history.pushState({
                    page: url
                }, url, url);
                reloadFunction();
                buttonReload();
                clickArrow();
            }
        });
    }
};

window.onload = function () {
    var loaded = sessionStorage.getItem('loaded');
    if (loaded) {
        var newUrl = false;
        if (window.location.href.includes('page')) newUrl = true;
        Reloaded(newUrl);
    } else {
        sessionStorage.setItem('loaded', true);
    }
};

function buttonReload() {
    createButtons();
    clickButton();
}

function createButtons() {
    var wrapperButton = document.querySelector('.load-more-wrap-noP');
    for (var index = 0; index < $('[data-total-pages]').val(); index++) {
        var button = document.createElement('button');
        button.classList.add('button__paginate');
        button.setAttribute('page', index + 1);
        button.innerHTML = index + 1;
        wrapperButton.appendChild(button);
    }
    var iElem = document.createElement('i');
    iElem.classList.add('fas');
    iElem.classList.add('fa-chevron-right');
    iElem.classList.add('arrow-right-load');
    if (wrapperButton) wrapperButton.appendChild(iElem);

    var buttons = document.querySelectorAll('.button__paginate');

    for (var _index = 0; _index < buttons.length; _index++) {
        if (_index > 2) buttons[_index].classList.add('button__paginate-none');
    }
}

window.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.load-more-wrap-noP')) {
        createButtons();
        clickButton();
    }
});

function clickButton() {
    document.querySelectorAll('.button__paginate').forEach(function (item) {
        item.addEventListener('click', function () {
            var url = window.location.pathname + ('?page=' + this.getAttribute('page'));
            $.ajax({
                type: 'GET',
                url: url,
                data: {},
                complete: function complete(data) {
                    showContentJQUERY(data);
                    history.pushState({
                        page: url
                    }, url, url);
                    // buttons
                    buttonReload();
                    countProductsOnPage();
                    // add class
                    var elementActive = void 0;
                    document.querySelectorAll('.button__paginate').forEach(function (item) {
                        if (window.location.href.substr(-6).includes(item.getAttribute('page'))) {
                            //  console.log(`Locale: ${}`);
                            item.classList.add('button__paginate_active');
                            elementActive = item;
                        }
                    });

                    document.querySelectorAll('.button__paginate').forEach(function (item) {
                        item.classList.add('button__paginate-none');
                    });

                    if (elementActive.previousElementSibling) {
                        elementActive.previousElementSibling.classList.remove('button__paginate-none');
                        elementActive.classList.remove('button__paginate-none');
                        if (elementActive.nextElementSibling) {
                            elementActive.nextElementSibling.classList.remove('button__paginate-none');
                        }
                    } else if (elementActive.innerHTML === '1') {
                        elementActive.classList.remove('button__paginate-none');
                        elementActive.nextElementSibling.classList.remove('button__paginate-none');
                        if (elementActive.nextElementSibling.nextElementSibling) {
                            elementActive.nextElementSibling.nextElementSibling.classList.remove('button__paginate-none');
                        }
                    } else {
                        elementActive.nextElementSibling.classList.remove('button__paginate-none');
                        elementActive.nextElementSibling.classList.remove('button__paginate-none');
                    }
                    clickArrow();
                }
            });
        });
    });
}

var objPrevElement = {
    id: 0
};
var objPage = {
    page: 1
};

function clickArrow() {
    // console.log('Click function');
    var arrowRight = document.querySelector('.arrow-right-load');
    var arrowLeft = document.querySelector('.arrow-left-load');
    arrowRight.addEventListener('click', function () {
        var buttonsPagination = document.querySelectorAll('.button__paginate');

        if (objPage.page <= buttonsPagination.length) objPage.page++;else objPage.page = buttonsPagination.length;

        console.log(buttonsPagination.length);

        if (buttonsPagination[buttonsPagination.length - 1].classList.contains('button__paginate-none') || objPage.page <= buttonsPagination.length) {
            for (var index = 0; index < buttonsPagination.length; index++) {
                if (buttonsPagination[index].classList.contains('button__paginate-none') && index >= objPrevElement.id) {
                    objPrevElement.id = index;
                    buttonsPagination[index].classList.remove('button__paginate-none');
                    buttonsPagination[index - 3].classList.add('button__paginate-none');
                    break;
                }
            }
            var url = window.location.pathname + ('?page=' + objPage.page);
            console.log(url);
            $.ajax({
                type: 'GET',
                url: url,
                data: {},
                success: function success(data) {

                    showContentJQUERY(data);
                    history.pushState({
                        page: url
                    }, url, url);
                    clickButton();
                    clickArrow();

                    document.querySelectorAll('.button__paginate').forEach(function (item) {
                        item.classList.remove('button__paginate_active');
                    });

                    document.querySelectorAll('.button__paginate').forEach(function (item) {
                        if (item.getAttribute('page') == objPage.page) {
                            item.classList.add('button__paginate_active');
                        }
                    });
                }
            });
        }
    });
    arrowLeft.addEventListener('click', function () {
        var buttonsPagination = document.querySelectorAll('.button__paginate');
        if (buttonsPagination[0].classList.contains('button__paginate-none')) {
            for (var index = 0; index < buttonsPagination.length; index++) {
                if (buttonsPagination[index].classList.contains('button__paginate') && index <= objPrevElement.id && !buttonsPagination[index].classList.contains('button__paginate-none')) {
                    objPrevElement.id = index + 1;
                    buttonsPagination[index - 1].classList.remove('button__paginate-none');
                    if (buttonsPagination[index + 2]) buttonsPagination[index + 2].classList.add('button__paginate-none');
                    break;
                }
            }
        }
    });
}

window.addEventListener('DOMContentLoaded', clickArrow);