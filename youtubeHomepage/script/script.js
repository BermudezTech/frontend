const $firstSection = document.querySelector("#firstSection"),
    $trend = document.querySelector("#trend"),
    $news = document.querySelector("#news"),
    $template = document.querySelector("#video-template").content,
    $fragment1 = document.createDocumentFragment(),
    $fragment2 = document.createDocumentFragment(),
    $fragment3 = document.createDocumentFragment(),
    firstSectionVideos = [
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
    ],
    newsVideos = [
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
    ],
    trendVideos = [
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
        {
            title: "Este es el título del video",
            channel: "Channel name",
            views: "1M de visitas",
            since: "hace 7 días",
            duration: "4:30"
        },
    ];
    let contador = 1;

    firstSectionVideos.forEach((el) => {
        let imgUrl = `https://picsum.photos/1280/720?random=${contador}`;
        $template.querySelector(".thumbnail").querySelector("img").setAttribute("src", imgUrl);
        $template.querySelector(".thumbnail").querySelector("p").textContent = el.duration;
        imgUrl = `https://picsum.photos/200/200?random=${contador+1}`;
        $template.querySelector(".info").querySelector("img").setAttribute("src", imgUrl);
        $template.querySelector(".info").querySelector("h4").textContent = el.title;
        $template.querySelector(".info").querySelector("#channel").textContent = el.channel;
        $template.querySelector(".info").querySelector("#video-info").textContent = `${el.views} · ${el.since}`;
        contador = contador + 2;

        let $clone = document.importNode($template, true);
        $fragment1.appendChild($clone);
    });

$firstSection.appendChild($fragment1);

newsVideos.forEach((el) => {
    let imgUrl = `https://picsum.photos/1280/720?random=${contador}`;
    $template.querySelector(".thumbnail").querySelector("img").setAttribute("src", imgUrl);
    $template.querySelector(".thumbnail").querySelector("p").textContent = el.duration;
    imgUrl = `https://picsum.photos/200/200?random=${contador+1}`;
    $template.querySelector(".info").querySelector("img").setAttribute("src", imgUrl);
    $template.querySelector(".info").querySelector("h4").textContent = el.title;
    $template.querySelector(".info").querySelector("#channel").textContent = el.channel;
    $template.querySelector(".info").querySelector("#video-info").textContent = `${el.views} · ${el.since}`;
    contador = contador + 2;

    let $clone = document.importNode($template, true);
    $fragment2.appendChild($clone);
});

$news.appendChild($fragment2);

trendVideos.forEach((el) => {
    let imgUrl = `https://picsum.photos/1280/720?random=${contador}`;
    $template.querySelector(".thumbnail").querySelector("img").setAttribute("src", imgUrl);
    $template.querySelector(".thumbnail").querySelector("p").textContent = el.duration;
    imgUrl = `https://picsum.photos/200/200?random=${contador+1}`;
    $template.querySelector(".info").querySelector("img").setAttribute("src", imgUrl);
    $template.querySelector(".info").querySelector("h4").textContent = el.title;
    $template.querySelector(".info").querySelector("#channel").textContent = el.channel;
    $template.querySelector(".info").querySelector("#video-info").textContent = `${el.views} · ${el.since}`;
    contador = contador + 2;

    let $clone = document.importNode($template, true);
    $fragment3.appendChild($clone);
});

$trend.appendChild($fragment3);