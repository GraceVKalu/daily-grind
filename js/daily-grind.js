/*

    What we need to change:

    Day of Week - day
    Coffee Name - name
    Coffee Pic - pic
    Alt tag - alt
    Coffee Description  - desc
    Color for coffee - color




*/

let myDate = new Date();
let myDay = "";
let today = "";
let coffee = "";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if(urlParams.has('day')){//Use query string data
    myDay = parseInt(urlParams.get('day'));
}
else{//Use date object
    myDay = myDate.getDay();
}

function coffeeTemplate(coffee){
    let myReturn = "";
    myReturn += `
    <p>
                <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
                <strong class="feature" id="coffee-highlight">${coffee.day}'s Coffee Special:</strong> 
                ${coffee.day}'s daily coffee special is <strong >${coffee.name}</strong>${coffee.desc}
            </p>
    `

    return myReturn;
}

switch(myDay){
    case 0:
        today = "Sunday";
        coffee = {
            name: "Mocha",
            color: "darkmagenta",
            day: "Sunday",
            pic: "images/mocha.jpg",
            alt: "A picture of a Mocha",
            desc: `. Mocha is made of a semi-sweet chocolate sauce inside of a latte, topped with whip cream.`
        };
        break;
    case 1:
        today = "Monday";
        coffee = {
            name: "Bubble Tea",
            color: "pink",
            day: "Monday",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of Bubble Tea",
            desc: `. Bubble tea is made of a certain type of tea with milk and sweeter. At the bottom it has chewy little balls called boba.`
        };
        break;
    case 2:
        today = "Tuesday";
        coffee = {
            name: "Caramel Latte",
            color: "saddlebrown",
            day: "Tuesday",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of a Caramel Latte",
            desc: `. Caramel Latte is a latte (espresso and steamed milk with foam) with Caramel syrup added.`
        };
        break;
    case 3:
        today = "Wednesday";
        coffee = {
            name: "Drip",
            color: "darkkhaki",
            day: "Wednesday",
            pic: "images/drip.jpg",
            alt: "A picture of a Drip Coffee",
            desc: `. Drip coffee is brewed coffee. The coffee beans used to make drip coffee are the the same as espresso. Espresso is much more caffinated. 2 shots is compared to 16 ounces of a drip caffine.`
        };
        break;
    case 4:
        today = "Thursday";
        coffee = {
            name: "Cold Brew",
            color: "black",
            day: "Thursday",
            pic: "images/cold-brew.jpg",
            alt: "A picture of a Cold Brew Coffee",
            desc: `. Cold brew is a much stronger version of drip coffee that is iced. Cold brew is an overnight process that is done in large buskets called kegs.`
        };
        break;
    case 5:
        today = "Friday";
        coffee = {
            name: "Pumpkin Spice",
            color: "orangered",
            day: "Friday",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picture of a Pumpkin Spice latte",
            desc: `. Pumpkin Spice Latte is a latte (espresso and steamed milk with foam) with Pumpkin sauce added. The pumpkin sauce is made of cinnamon, nutmeg, suagr, and pumpkin puree`
        };
        break;
    case 6:
        today = "Saturday";
        coffee = {
            name: "Frappaccino",
            color: "beige",
            day: "Saturday",
            pic: "images/frappaccino.jpg",
            alt: "A picture of a Frappaccino",
            desc: `. A frappaccino is made out of coffe roast, milk, a lot of ice blended then topped with whip cream. Frappacinos are very customizable and can be made with almost any flavor avalible a the store.`
        };
        break;
    default:
        break;
}

//console.log(queryString);
document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);

document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;
document.getElementById("coffee-highlight").style.color = coffee.color;

//alert("Hi, it's " + today);