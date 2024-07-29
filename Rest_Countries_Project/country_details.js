  
 let langs; 
  
  function addcountry(result){
    let langs;

  for (const [key,value] of Object.entries(result.languages)){
  langs = value;

}

 
 let newSpace = document.createElement('div');
  newSpace.innerHTML = `<div class="mid">
<div id="main-content">
 <div class="image">
    <img src=${result.flags.svg} id="flag" alt=${result.name.common} >
 </div> 
 <div class="more-details">
<h3 id="name"> ${result.name.common}</h3><br>

<span><b>Native Name :</b> ${result.name.official}</span>
<span><b>Population :</b> ${result.population.toLocaleString('en-IN')}</span>
<span><b>Region :</b> ${result.region}</span>
<span><b>Sub Region :</b> ${result.subregion}</span>
<span><b>Capital :</b> ${result.capital}</span>
<span><b>Top Level Domain :</b> ${result.tld} </span>
<span><b>Currencies :</b>  ${Object.entries( result.currencies)[0][1].name}</span>
<span><b>Language :</b>${langs}</span>







 </div>  
</div>



</div>

`

let body = document.querySelector('body');
body.appendChild(newSpace);
 
}
 
 
 
  let btn =   document.getElementById('btn'); 
btn.addEventListener('click',()=>{

  history.back();
})
let name = new URLSearchParams(window.location.search).get('name');
let URL = `https://restcountries.com/v3.1/name/${name}?fullText=true`;
console.log(name);
fetch(URL).then((res)=>{
  return res.json();
}).then((el)=>{
const result = el[0];
let myLanguage = result.languages;

console.log(langs);
 
 addcountry(result,langs);

})