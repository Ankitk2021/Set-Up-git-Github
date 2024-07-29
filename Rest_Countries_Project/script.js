let URL ='https://restcountries.com/v3.1/all' ;
let input = document.querySelector('input');
   input.addEventListener('change',()=>{
      console.log('this is working');
   })
    


function addElement(element=0){

    let newCard = document.createElement('div');
    newCard.setAttribute("class","newCard");
    let pop;

    
    newCard.innerHTML = `<a href="country_details.html?name=${element.name.common}" class="redirect"><div class = 'cardContainer'> 
    <img src= ${element.flags.svg} >
    
       <div class='CountryDetails'>
        <h2>${element.name.common}</h2>
        <div >
         <div class='details'><b>Population :</b> <span>${element.population.toLocaleString('en-IN')}</span></div>
         <div class='details'><b>Region :</b><span>${element.region}</span></div>
         <div class='details'><b>Capital : </b><span>${element.capital}</span></div>
       </div>
       </div>
    </div> </a>`;
    let main = document.querySelector('.main');
   
    main.appendChild(newCard);
    let myPage = document.getElementsByClassName('redirect');

    
   newCard.addEventListener('click',(event)=>{
      
    window.Location.href = myPage.href;
    console.log(element);
    
    
   })


   
    

}

let   result =  fetch(URL).then((e)=>{

    return e.json();
    
    }).then((e)=>{


 e.forEach((element)=>{

   
    addElement(element);
    

    
   

 })


})

let popBox = document.querySelector('.box')

 let pop = document.querySelector('.box span')
;
document.querySelector('input').addEventListener('change',(e)=>{
   popBox.setAttribute('class','alert')

})


popBox.addEventListener('click',()=>{
   popBox.setAttribute('class','alertClose');
})