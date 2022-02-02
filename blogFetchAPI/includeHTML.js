let root = document.querySelector(".root");

let AJAXQuery = async(url) => {
    try{
        let res = await fetch(url);
        let html = res.text();
        return html;
    }catch(err){
        console.log(err);
    }
}

let innerDocument = async () => {
    let hash = window.location.hash;
    if(hash === ""){
        root.innerHTML = await AJAXQuery("home.html");
    }else{
        root.innerHTML = await AJAXQuery(`${hash.split("#")[1]}.html`);
    }
}

window.addEventListener("load", (e) => {
    innerDocument();
});

window.addEventListener("hashchange", ()=>{
    innerDocument();
})