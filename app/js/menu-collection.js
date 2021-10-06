//parent class for menu items
class Menulist {
    constructor(options) {
        this.name = options.name;
        this.price = options.price;
        this.text = options.text;
    }
    getFirstRow() {
        return this.name + '. . . ' + this.price + ' USD';
    }
    getSecondRow() {
        return this.text;
    }
}

//wines
let wine = [{
        name: 'wine',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'wine',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'wine',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'wine',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'wine',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }

]

//pastas
let pasta = [{
        name: 'pasta',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'pasta',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'pasta',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'pasta',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'pasta',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }

]

//deserts
let desert = [{
        name: 'desert',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'desert',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'desert',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'desert',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'desert',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }

]

//beers
let beer = [{
        name: 'beer',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'beer',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'beer',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'beer',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'beer',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }

]

//drinks
let drinks = [{
        name: 'drinks',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'drinks',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'drinks',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'drinks',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'drinks',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'drinks',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'drinks',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'drinks',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'drinks',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }

]

//pizzas
let pizza = [{
        name: 'pizza',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'pizza',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'pizza',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'pizza',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'pizza',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }

]

//soupes
let soupe = [{
        name: 'soupe',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'soupe',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'soupe',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'soupe',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }, {
        name: 'soupe',
        price: '55.14',
        text: 'Integer ullamcorper neque eu purus euismod'
    }

]