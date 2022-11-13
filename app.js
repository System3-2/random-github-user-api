const main = document.getElementById('root');
const url = 'https://api.github.com/users';

fetch(url).then(resp => resp.json()).then(data => {
  fetchUsers(data);
})

function fetchUsers(data) {
 // console.log(data);
 const element = document.createElement('div');
 return  data.map((item) => {
    console.log(item);
    
    const { avatar_url, login, html_url, id  } = item;
    //console.log(id, url, avatar_url, login);

    return main.innerHTML += (`
    <div class="container" key=${id}>
    <div class="img-container">
    <img src=${ avatar_url } alt="${ avatar_url }">
    </div>
    <h3>${ login }</h3>
    <p><a href="${ html_url }">${ html_url }</a></p>
  </div>
    `)
  })
  
}