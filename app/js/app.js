/*ANCHORS*/

const anchor = document.querySelectorAll('ul li a[href*="#"],a.header__scroll[href*="#"]');
for (let key of anchor) {
    key.addEventListener('click', (e) => {
        e.preventDefault();
        const blockId = key.getAttribute('href');
        document.querySelector('' + blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

    })

}


/** @menu */

let menuList = document.querySelector('.menu');
let menuCategories = document.querySelectorAll('.menu-categories ul li button');
let menu = {
    'soupe': soupe,
    'pizza': pizza,
    'pasta': pasta,
    'desert': desert,
    'wine': wine,
    'beer': beer,
    'drinks': drinks
}
for (let keys of menuCategories) {
    keys.addEventListener('click', (e) => {
        let changeMenu = function(object) {
            menuList.innerHTML = '';
            for (let i = 0; i < object.length; i++) {
                let currentMenu = new Menulist(object[i]);
                let menuElement = document.createElement("div");
                menuElement.classList.add('menu__item');
                menuElement.innerHTML = `<p>${currentMenu.getFirstRow()}<span>${currentMenu.getSecondRow()}</span></p>`
                menuList.appendChild(menuElement);
            }

        }
        for (let [key, value] of Object.entries(menu)) {
            if (key === keys.getAttribute('id')) {
                changeMenu(value);
            }
        }
    })

}