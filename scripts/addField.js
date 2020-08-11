// procurar  o botão 
  document.querySelector("#add-time")

  //Quando clicar no botão 
  .addEventListener('click', cloneField)

// Executar  uma ação
 function cloneField(){

      // Duplicar os campos 
    const newFiledContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos 
    const fields = newFiledContainer.querySelectorAll('input')
    
    //paracada campo limpar
    fields.forEach(function(field){
        // pegar o field do momento e limpa 
        field.value = ""
    })
   

     // Colocar na página
     document.querySelector('#schedule-items').appendChild(newFiledContainer)
 }
    
    
      
 