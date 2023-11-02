async function api(){
  try{
  data = fetch('https://restcountries.com/v2/all')
    out = await data;
     prom = out.json();
     final = await prom;
     parent  = document.querySelector('.container')
    parent1 = document.querySelector('.row')
     final.forEach(element => {
        parent1.innerHTML+=`
          <div id="cardDetails" class="col-lg-4 col-sm-12">
          <div class="card h-400" style="width: 22rem;">
           <div class="card-header">
           <h5 class="card-title">${element.name}</h5>
          </div>
          <div class="card-body">  
          <img src="${element.flags.png}" class="card-img-top"><br>
          <br>
         <div class="card-text">
         <li class="list-group card-text"><b>Capital:${element.capital}</li>
         <li class="list-group card-text"><b>Region:${element.region}</li>
         <li class="list-group card-text"><b>Country Code:${element.alpha3Code}</li>
         
       </div>
        
        <br>
         <button class="btn btn-primary" target="_blank" value="${element.name}">Click for Weather</button>

          </div>
        </div>
        </div>
      
      `
      parent.append(parent1)
      
      let btn = document.querySelectorAll(".btn");
      btn.forEach((ele)=>{
        ele.addEventListener("click",()=>{
          let value = ele.value
          console.log(value)
          async function weather(){
            let res = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ele.value}&APPID=031a189db089792ef2d3157a674d72a6&units=metric`)
            let ress = await res
            let res11 = ress.json()
            let res1 = await res11

            console.log(res1)
            ele.innerHTML= `weather: ${res1.weather[0].description}<br>Temp: ${res1.main.temp}<br>Pressure: ${res1.main.pressure}<br>
            lon:${res1.coord.lon}<br>lat${res1.coord.lat}`
           
          }
          weather();
        })
      })
      
     });
    }
     catch(error){
      console.log(error)
     }
    
}
api()