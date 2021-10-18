async function topStories() {
  let res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=2bbdb0658c3246f198d118f464abdacf"
  );

  data = await res.json();

  appendnews(data.articles);
}
topStories();

let parent = document.getElementById("stories");

function appendnews(a) {
  a.forEach((n) => {
    // console.log('n:', n)
    let main_div = document.createElement("div");
    // main_div.style.cursor = "pointer";
    main_div.addEventListener("click", () => {
      location.href = "/news.html";
      // detailsnews(n);
    });

    let div1 = document.createElement("div");

    let title = document.createElement("h2");

    title.textContent = n.title;
    // console.log('title:', title)

    let author = document.createElement("h4");

    author.textContent = n.author;
    // console.log('author:', author)

    let time = document.createElement("p");

    time.textContent = n.publishedAt;

    // console.log('time:', time)

    div1.append(title, author, time);

    let div2 = document.createElement("div");

    let dis = document.createElement("p");

    dis.textContent = n.description;
    // console.log('dis:', dis)

    div2.append(dis);

    let div3 = document.createElement("div");

    let img = document.createElement("img");
    img.src = n.urlToImage;
    // console.log('img:', img)

    div3.append(img);

    main_div.append(div1, div2, div3);

    parent.append(main_div);
  });
}
