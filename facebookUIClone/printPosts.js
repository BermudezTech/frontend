export async function printPosts(){
    // Get Data
    async function getPosts(){
        let request = await fetch('posts.json', {method: "GET"});
        let res = await request.json();
    
        return res;
    }
    let postsData = await getPosts();
}