import { printPosts } from "./printPosts.js";

let $mainMenu = document.querySelector(".main-menuItems"),
    $shorcutsMenu = document.querySelector(".shorcuts-menu"),
    $friendsMenu = document.querySelector(".friends-menu"),
    $groupsMenu = document.querySelector(".groups-menu"),
    $templateMenuBtn = document.getElementById("template-menu-btn").content,
    $fragment = document.createDocumentFragment();

let menuItems = [
    {
        name: "Amigos",
        location: 9,
    },
    {
        name: "Más recientes",
        location: 0,
        backgroundImage: "https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png"
    },
    {
        name: "Grupos",
        location: 3,
    },
    {
        name: "Marketplace",
        location: 12,
    },
    {
        name: "Watch",
        location: 15,
    },
    {
        name: "Ver más",
        location: 0,
        backgroundImage: "img/icons/downArrow.svg",
        class: "downArrow",
    }
];

let menuShorcuts = [
    {
        name: "Agar.io",
        location: 0,
        backgroundImage: "img/gameIcons/agar.png"
    },
    {
        name: "Angry Birds Friends",
        location: 0,
        backgroundImage: "img/gameIcons/angryBirdsFriends.png",
    },
    {
        name: "Candy Crush Saga",
        location: 0,
        backgroundImage: "img/gameIcons/candyCrushSaga.jpg"
    },
    {
        name: "Criminal Case",
        location: 0,
        backgroundImage: "img/gameIcons/criminalCase.png"
    },
    {
        name: "Dragon City",
        location: 0,
        backgroundImage: "img/gameIcons/dragonCity.jpeg"
    },
    {
        name: "Ver más",
        location: 0,
        backgroundImage: "img/icons/downArrow.svg",
        class: "downArrow",
    }
]
let friends = [
    {
        name: "Brandon Mason",
        location: 0,
        backgroundImage: "https://picsum.photos/1280/720?random=1",
    },
    {
        name: "Freddie Matthews",
        location: 0,
        backgroundImage: "https://picsum.photos/1280/720?random=2",
    },
    {
        name: "William Dean",
        location: 0,
        backgroundImage: "https://picsum.photos/1280/720?random=3",
    },
    {
        name: "Harry Cunningham",
        location: 0,
        backgroundImage: "https://picsum.photos/1280/720?random=4",
    },
    {
        name: "Henry Pearson",
        location: 0,
        backgroundImage: "https://picsum.photos/1280/720?random=5",
    },
    {
        name: "Deegan Mclaughlin",
        location: 0,
        backgroundImage: "https://picsum.photos/1280/720?random=6",
    },
    {
        name: "Mitchell Gregory",
        location: 0,
        backgroundImage: "https://picsum.photos/1280/720?random=7",
    },
    {
        name: "Camren Bush",
        location: 0,
        backgroundImage: "https://picsum.photos/1280/720?random=8",
    },
    {
        name: "Craig Clark",
        location: 0,
        backgroundImage: "https://picsum.photos/1280/720?random=9",
    },
    {
        name: "Jonathon Howell",
        location: 0,
        backgroundImage: "https://picsum.photos/1280/720?random=10",
    },
]

let group = [
    {
        name: "Cuknix",
        location: 0,
        backgroundImage: "https://picsum.photos/1280/720?random=11",
    },
    {
        name: "Trol",
        location: 0,
        backgroundImage: "https://picsum.photos/1280/720?random=12",
    },
    {
        name: "Drev'id",
        location: 0,
        backgroundImage: "https://picsum.photos/1280/720?random=13",
    },
    {
        name: "Gilkads",
        location: 0,
        backgroundImage: "https://picsum.photos/1280/720?random=14",
    },
    {
        name: "Bilphan",
        location: 0,
        backgroundImage: "https://picsum.photos/1280/720?random=15",
    },
    {
        name: "Crear nuevo grupo",
        location: 0,
        backgroundImage: "img/icons/plus.svg",
        class: "downArrow"
    },
]

let createButtons = (el) => {
    let position = (el.location-1)*36;
    $templateMenuBtn.querySelector("label").textContent = el.name;
    $templateMenuBtn.querySelector("i").style.backgroundPositionY = `-${position}px`;
    if(el["location"] === 0){
        $templateMenuBtn.querySelector("i").style.backgroundImage = `url(${el.backgroundImage})`;
    }else{
        let backgroundDefault = "https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/BHDNlEdwMgn.png";
        $templateMenuBtn.querySelector("i").style.backgroundImage = `url(${backgroundDefault})`;
    }
    if(el["class"] !== undefined){
        $templateMenuBtn.querySelector("i").style.backgroundSize = "60%";
        $templateMenuBtn.querySelector("i").style.backgroundPosition = "center";
        $templateMenuBtn.querySelector("i").style.backgroundRepeatX = "no-repeat";
        $templateMenuBtn.querySelector("i").style.backgroundRepeatY = "no-repeat";
        $templateMenuBtn.querySelector("i").style.backgroundColor = "#242526";
        $templateMenuBtn.querySelector("i").style.borderRadius = "100%";
    }else{
        $templateMenuBtn.querySelector("i").style.backgroundSize = "";
        $templateMenuBtn.querySelector("i").style.backgroundRepeatX = "";
        $templateMenuBtn.querySelector("i").style.backgroundColor = "";
    }

    let $clone = document.importNode($templateMenuBtn, true);
    $fragment.appendChild($clone);
}

menuItems.forEach(el => createButtons(el));
$mainMenu.appendChild($fragment);
$templateMenuBtn.querySelector("i").style.borderRadius = "10px";

$fragment = document.createDocumentFragment();
menuShorcuts.forEach(el => createButtons(el));
$shorcutsMenu.appendChild($fragment);

$fragment = document.createDocumentFragment();
friends.forEach(el => createButtons(el));
$friendsMenu.appendChild($fragment);

$fragment = document.createDocumentFragment();
group.forEach(el => createButtons(el));
$groupsMenu.appendChild($fragment);

printPosts();