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
        backgroundImage: "https://scontent.fbog4-1.fna.fbcdn.net/v/t39.2081-6/11891365_726141290823610_1062843466_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=bzQT_q0vwxQAX-sCwnX&_nc_ht=scontent.fbog4-1.fna&oh=00_AfCZHYa-oNqPCg9575E4KV4Rc-0bM2Gt_5cMQlNOAlj0CQ&oe=63C6018A"
    },
    {
        name: "Angry Birds Friends",
        location: 0,
        backgroundImage: "https://scontent.fbog4-1.fna.fbcdn.net/v/t39.2081-6/37826797_1419176584850865_8749714633905930240_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=0hT7m1WMitcAX_IuerL&_nc_ht=scontent.fbog4-1.fna&oh=00_AfAnezQ-H5L0WJ02Hjg30m5ccI9V6R1ycl0H3AYno9M7Rw&oe=63C4A1F7",
    },
    {
        name: "Candy Crush Saga",
        location: 0,
        backgroundImage: "https://scontent.fbog4-1.fna.fbcdn.net/v/t39.2081-6/22088589_1654976451201719_5191478939503034368_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=El876jJQymsAX9dbXzd&_nc_ht=scontent.fbog4-1.fna&oh=00_AfC1PP8jIOiKdmosL3UDZs5B2J3KKHvoq5n4Xx5JUMSE5w&oe=63C50582"
    },
    {
        name: "Criminal Case",
        location: 0,
        backgroundImage: "https://scontent.fbog4-1.fna.fbcdn.net/v/t39.2081-6/12057001_427250474066399_2006674606_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=Q1u5pUG0ZQoAX96BMdM&_nc_ht=scontent.fbog4-1.fna&oh=00_AfAjIcVE1nZtIRHh2R1_X4gjIkhcpclF6R8SkogkV7MKGw&oe=63C6027C"
    },
    {
        name: "Dragon City",
        location: 0,
        backgroundImage: "https://scontent.fbog4-1.fna.fbcdn.net/v/t39.2081-6/28129135_1686685264729832_3956709029115330560_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=Geor3I2YNAUAX-5_xP-&_nc_ht=scontent.fbog4-1.fna&oh=00_AfA0ecPg8Luv4uzxWltQ-bscb0fapuJ-PZhvCmm8aRh5bA&oe=63C4B869"
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