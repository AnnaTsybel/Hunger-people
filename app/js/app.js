//add anchors on page

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


//menu change

//get element with menu
let menuList = document.querySelector('.menu');

//get all elemts of categories in menu
let menuCategories = document.querySelectorAll('.menu-categories ul li button');

//list of menu items
let menu = {
    'soupe': soupe,
    'pizza': pizza,
    'pasta': pasta,
    'desert': desert,
    'wine': wine,
    'beer': beer,
    'drinks': drinks
}

//add event listener on all buttons of categories in menu
for (let keys of menuCategories) {

    keys.addEventListener('click', () => {
        let changeMenu = function(item) {
            //clear previous menu
            menuList.innerHTML = '';
            for (let i = 0; i < item.length; i++) {
                let currentMenu = new Menulist(item[i]);

                //create menu
                let menuElement = document.createElement("div");

                //set class to menu
                menuElement.classList.add('menu__item');

                //generate text of dish
                menuElement.innerHTML = `<p>${currentMenu.getFirstRow()}<span>${currentMenu.getSecondRow()}</span></p>`

                //append all the elements to menu
                menuList.appendChild(menuElement);
            }

        }

        //display current menu
        for (let [key, value] of Object.entries(menu)) {
            if (key === keys.getAttribute('id')) {
                changeMenu(value);
            }
        }
    })

}