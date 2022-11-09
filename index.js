const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

heart = document.getElementById("heart");

renderHtml = document.getElementById("rendering");

let body = "";
finalBody = "";
secondpart = "";
function rendering(list) {
  for (let i = 0; i < list.length; i++) {
    body = `

<section>
    <div class="profile-wrapper">
    <img id="profile-pic" src= "${list[i].avatar}" alt="" />
    <div class="name-country">
        <h3 id = "user-name" >${list[i].name}</h3>
        <h4 id = "user-location" >${list[i].location}"</h3>
    </div>
    </div>
</section>
<img id = "main-img" src="${list[i].post}" alt="">
<div class="icons">
          <img class = "likes" id="heart" src="images/icon-heart.png" onclick="clicked(${i})" />
          <img id="com" src="images/icon-comment.png" alt="" />
          <img id="dm" src="images/icon-dm.png" alt="" />
        </div>
<footer>
    <div class="comment-like">
    <p  id = "likes-${i}">${list[i].likes} likes</p>
    <p id = "comments"><span>gus1819 &nbsp</span>${list[i].comment}</p>
    </div>
    </footer>
  `;

    finalBody += body + secondpart;
  }

  return finalBody;
}

renderHtml.innerHTML = rendering(posts);

function clicked(i) {
  likes = document.getElementById(`likes-${i}`);
  current = posts[i].likes;
  current += 1;
  posts[i].likes = current;
  likes.innerHTML = `${current} likes`;
}
