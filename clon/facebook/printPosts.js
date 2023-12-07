export async function printPosts(){
    // Get Data
    async function getPosts(){
        let request = await fetch('posts.json', {method: "GET"});
        let res = await request.json();
    
        return res;
    }
    let postsData = await getPosts();

    let $postsTemplate = document.getElementById('postsTemplate').content,
        $fragment2 = document.createDocumentFragment(),
        $postsSpace = document.querySelector(".posts");
    
    postsData.forEach(el => {
        $postsTemplate.querySelector(".name").textContent = el.name;
        $postsTemplate.querySelector(".message").textContent = el.message;
        $postsTemplate.querySelector(".likesCount").textContent = el.likes;
        $postsTemplate.querySelector(".timeCount").textContent = `${el.time} • `;
        $postsTemplate.querySelector(".time i").setAttribute("class", el.type);
        $postsTemplate.querySelector(".profile img").setAttribute("src", el.profile);
        if(el.comments === 0){
            $postsTemplate.querySelector(".commentsCount").style.display = "none";
        }else{
            $postsTemplate.querySelector(".commentsCount").style.display = "inline-block";
            $postsTemplate.querySelector(".commentCount").textContent = el.comments;
            if(el.comments !== 1){
                $postsTemplate.querySelector(".commentS").textContent = "s";
            }else{
                $postsTemplate.querySelector(".commentS").textContent = "";
            }
        }
        if(el.shared === 0){
            $postsTemplate.querySelector(".shared").style.display = "none";
        }else{
            $postsTemplate.querySelector(".shared").style.display = "inline-block";
            $postsTemplate.querySelector(".sharedCount").textContent = el.shared;
            if(el.shared !== 1){
                $postsTemplate.querySelector(".sharedCountS").textContent = "ces";
            }else{
                $postsTemplate.querySelector(".sharedCountS").textContent = "z";
            }
        }

        if(el.type === "friends"){
            $postsTemplate.querySelector("#shareBtn").style.display = "none";
        }else{
            $postsTemplate.querySelector("#shareBtn").style.display = "block";
        }

        // Display images
        let imgGrid = $postsTemplate.querySelector(".imgGrid");
        imgGrid.innerHTML = '';

        let imgSize = [];
        if(el.imgs.length === 1){
            imgSize[0] = "grid-column: span 6; grid-row: span 2;";
        }else if(el.imgs.length === 2){
            imgSize[0] = "grid-column: span 3; grid-row: span 2";
            imgSize[1] = "grid-column: span 3; grid-row: span 2";
        }else if(el.imgs.length === 3){
            imgSize[0] = "grid-column: span 3;";
            imgSize[1] = "grid-column: span 3;";
            imgSize[2] = "grid-column: span 6;";
        }else if(el.imgs.length === 4){
            imgSize[0] = "grid-column: span 3;";
            imgSize[1] = "grid-column: span 3;";
            imgSize[2] = "grid-column: span 3;";
            imgSize[3] = "grid-column: span 3;";
        }else{
            imgSize[0] = "grid-column: span 3;";
            imgSize[1] = "grid-column: span 3;";
            imgSize[2] = "grid-column: span 2;";
            imgSize[3] = "grid-column: span 2;";
            imgSize[4] = "grid-column: span 2;";
        }

        el.imgs.forEach((imgs,i) => {
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class", "img");
            newDiv.style = `background-image: url(${imgs}); ${imgSize[i]}`;
            imgGrid.appendChild(newDiv);
        });

        let $clone = document.importNode($postsTemplate, true);
        $fragment2.appendChild($clone);
    });
    $postsSpace.appendChild($fragment2);
}