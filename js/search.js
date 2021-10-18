
   async function Search(){

    let value = document.getElementById("search").value;

    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&q=${value}&apiKey=2bbdb0658c3246f198d118f464abdacf`);

    let data = await res.json();
    // console.log('data:', data)

    searches(data.articles);

}
let parent = document.getElementById("stories");

console.log('parent:', parent)

function searches(data){

    parent.innerHTML = null;

    data.forEach(({author,content,description,publishedAt,title,urlToImage})=> {
        
        let div = document.createElement("div");

        let t = document.createElement("h2")
        t.textContent = "\""+ title +"\"";
        
        let img = document.createElement("img");
        img.src=urlToImage;
        
        let aut = document.createElement("h4");
        aut.textContent = author;

        let time = document.createElement("p");
        time.textContent=publishedAt;

        let dis = document.createElement("p");
        dis.textContent = description;

        let con = document.createElement("p");
        con.textContent = content;

        div.append(img,t,aut,time,dis,con);

        parent.append(div);

    });

}