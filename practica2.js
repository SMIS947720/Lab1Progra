const fetch = require('node-fetch');
const fs = require('fs');
fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
 .then((response) =>{
     return response.json();
 })
  .then((data) =>{
      console.log(data)
  })
   .catch((error) =>{
       console.log(error)
   })

   async function bitcon(){
    try{
        const response = await fetch ('https://restcountries.com/v2/all');
        const data = await response.json();
        let bitsList = "";
        Array.from(data).forEach(bit => {
            bitsList+= `${bit['rate']}`;
        });

        fs.writeFile('Bitcoin.csv', bitsList, (error) => {
            if (error){
                console.log(error);
                return;
            }
            console.log('se ha creado el archivo');
        })

        //console.log(data)
    }catch(error){
        console.log(error)
    }
    
}
bitcon();

  
