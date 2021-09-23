fetch("https://api.chucknorris.io/jokes/random")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    // console.log("DATA is:",data);
   var joke=data.value;
   var jok=document.querySelector(".jokk");
   jok.innerHTML=joke;
})
.catch();

var reff=document.querySelector(".ref");
reff.addEventListener("click",()=>{
    location.reload();
});