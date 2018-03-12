(function(){
    window.onload=function(){    
    
      var matrizJogo = {
          a1:'',
          a2:'',
          a3:'',
          b1:'',
          b2:'',
          b3:'',
          c1:'',
          c2:'',
          c3:'',
      };

      var placar = { 
          x : 0,
          bola :0
      };
      
      var block = false;

      var ganhador = 'todos'
      
      somaPlacar();

      function openModal(texto){
        var textoModal = document.getElementById('texto-modal');
        
        textoModal.innerHTML = texto;

        var element = document.getElementById('modalCustom');
        element.classList.add('showModal');
      
        var fundoModal = document.getElementById('fundoModal');
        fundoModal.classList.add('openFundoModal');

        
      }

      function closeModal(){
          var element = document.getElementById('modalCustom');
          element.classList.remove('showModal');

          var fundoModal = document.getElementById('fundoModal');
          fundoModal.classList.remove('openFundoModal');
      }


      document.getElementById("btnCloseModal").addEventListener('click', function(){
        closeModal();                  
      });


      document.getElementById("a1").addEventListener('click', function(){          
          if(block)
            return;         
          if(document.getElementById("a1").innerHTML.length === 0){
            
              
            if(putDesenho('a1')){
              block = true;
              maquinaJoga();
            }          
          }      
         
      });

      document.getElementById("a2").addEventListener('click', function(){
        if(block)
            return;
            if(document.getElementById("a2").innerHTML.length === 0){
            
                putDesenho('a2');   
                if(putDesenho('a2')){
                  block = true;
                  maquinaJoga();
                }          
            }    
                  
      });


     document.getElementById("a3").addEventListener('click', function(){
        if(block)
            return; 
            if(document.getElementById("a3").innerHTML.length === 0){
            
                   
                if(putDesenho('a3')){
                  block = true;
                  maquinaJoga();
                }          
            }
        
      });


    document.getElementById("b1").addEventListener('click', function(){
        if(block)
        return; 
        if(document.getElementById("b1").innerHTML.length === 0){
            
              
            if(putDesenho('b1')){
              block = true;
              maquinaJoga();
           }          
        } 
         
    });


    document.getElementById("b2").addEventListener('click', function(){
        if(block)
        return;  
        if(document.getElementById("b2").innerHTML.length === 0){
            
             
            if(putDesenho('b2')){
              block = true;
              maquinaJoga();
            }   
        }      
        
    });



    document.getElementById("b3").addEventListener('click', function(){
        if(block)
        return;  
        if(document.getElementById("b3").innerHTML.length === 0){
            
               
            if(putDesenho('b3')){
              block = true;
              maquinaJoga();
            }
        }    
        
    });



    document.getElementById("c1").addEventListener('click', function(){
        if(block)
            return; 
            if(document.getElementById("c1").innerHTML.length === 0){
            
                  
                if(putDesenho('c1')){
                  block = true;
                  maquinaJoga();
                }
            }    
        
    });


    document.getElementById("c2").addEventListener('click', function(){
        if(block)
            return; 
            if(document.getElementById("c2").innerHTML.length === 0){
            
                   
                if(putDesenho('c2')){
                  block = true;
                  maquinaJoga();
                }
            }    
        
    });


    document.getElementById("c3").addEventListener('click', function(){
        if(block)
            return;
            if(document.getElementById("c3").innerHTML.length === 0){           
                 
                if(putDesenho('c3')){
                  block = true;
                  maquinaJoga();
                }
            }    
         
       
    });

    function somaPlacar(){
        if(ganhador === 'todos'){
            placar.x = 0;
            placar.bola = 0;
        }else{
            placar[ganhador]++;
        }

        document.getElementById('placarX').innerHTML = placar['x'];
        document.getElementById('placarBola').innerHTML = placar['bola'];
        limpaElementos();
    }
    
    function limpaElementos(){
        document.getElementById('a1').innerHTML= '';
        document.getElementById('a2').innerHTML= '';
        document.getElementById('a3').innerHTML= '';
        document.getElementById('b1').innerHTML= '';
        document.getElementById('b2').innerHTML= '';
        document.getElementById('b3').innerHTML= '';
        document.getElementById('c1').innerHTML= '';
        document.getElementById('c2').innerHTML= '';
        document.getElementById('c3').innerHTML= '';
        matrizJogo.a1 = '';
        matrizJogo.a2 = '';
        matrizJogo.a3 = '';
        matrizJogo.b1 = '';
        matrizJogo.b2 = '';
        matrizJogo.b3 = '';
        matrizJogo.c1 = '';
        matrizJogo.c2 = '';
        matrizJogo.c3 = '';
    }

    function putDesenho(bloco, img){
        
       if(document.getElementById(bloco).innerHTML.length === 0 ){   
         if(img){
             var imagemValendo = img;
         }else{
             var imagemValendo = 'x'
         }     
         document.getElementById(bloco).innerHTML=`<img src="img/${imagemValendo}.png" class="img-responsive" style="margin: 0 auto !important;">`;
         matrizJogo[bloco] = imagemValendo;
                 
       }    
       if(verificaGanhador()){
          //alert(ganhador +'  venceu a partida =)');
          openModal(ganhador +'  venceu a partida =)');
          somaPlacar();
          block = false;
          return false;
       }
         
       return true;
    }

    function isVazio(bloco){        
        return document.getElementById(bloco).innerHTML.length === 0 
    }

    function verificaGanhador(){
        // X
      
        if(matrizJogo['a1'] === 'x' && matrizJogo['a2'] === 'x' && matrizJogo['a3'] === 'x'){
            
            ganhador = 'x';   
            return true;                      
        }else if(matrizJogo['b1'] === 'x' && matrizJogo['b2'] === 'x' && matrizJogo['b3'] === 'x'){
            
            ganhador = 'x';
            return true;
        }else if(matrizJogo['c1'] === 'x' && matrizJogo['c2'] === 'x' && matrizJogo['c3'] === 'x'){
            ganhador = 'x';
            return true;
        }else if(matrizJogo['a1'] === 'x' && matrizJogo['b1'] === 'x' && matrizJogo['c1'] === 'x'){
            ganhador = 'x';
            return true;
        }else if(matrizJogo['a2'] === 'x' && matrizJogo['b2'] === 'x' && matrizJogo['c2'] === 'x'){
            ganhador = 'x';
            return true;
        }else if(matrizJogo['a3'] === 'x' && matrizJogo['b3'] === 'x' && matrizJogo['c3'] === 'x'){
            ganhador = 'x';
            return true;
        }else if(matrizJogo['a1'] === 'x' && matrizJogo['b2'] === 'x' && matrizJogo['c3'] === 'x'){
            ganhador = 'x';
            return true;
        }else if(matrizJogo['b2'] === 'x' && matrizJogo['a3'] === 'x' && matrizJogo['c1'] === 'x'){
            ganhador = 'x';
            return true; // Agora o bola
        }else if(matrizJogo['a1'] === 'bola' && matrizJogo['a2'] === 'bola' && matrizJogo['a3'] === 'bola'){
            ganhador = 'bola'; 
            return true;                      
        }else if(matrizJogo['b1'] === 'bola' && matrizJogo['b2'] === 'bola' && matrizJogo['b3'] === 'bola'){
            ganhador = 'bola'; 
            return true;
        }else if(matrizJogo['c1'] === 'bola' && matrizJogo['c2'] === 'bola' && matrizJogo['c3'] === 'bola'){
            ganhador = 'bola'; 
            return true;
        }else if(matrizJogo['a1'] === 'bola' && matrizJogo['b1'] === 'bola' && matrizJogo['c1'] === 'bola'){
            ganhador = 'bola'; 
            return true;
        }else if(matrizJogo['a2'] === 'bola' && matrizJogo['b2'] === 'bola' && matrizJogo['c2'] === 'bola'){
            ganhador = 'bola'; 
            return true;
        }else if(matrizJogo['a3'] === 'bola' && matrizJogo['b3'] === 'bola' && matrizJogo['c3'] === 'bola'){
            ganhador = 'bola'; 
            return true;
        }else if(matrizJogo['a1'] === 'bola' && matrizJogo['b2'] === 'bola' && matrizJogo['c3'] === 'bola'){
            ganhador = 'bola'; 
            return true;
        }else if(matrizJogo['b2'] === 'bola' && matrizJogo['a3'] === 'bola' && matrizJogo['c1'] === 'bola'){
            ganhador = 'bola'; 
            return true;
        }else{
            return false;
        }
    }

    function temEspaco(joga){
        var tem = false;
        var auxobj = [];
        for(var obj in matrizJogo){
            if(!matrizJogo[obj]){
                auxobj.push(obj);                
                tem =  true;                
            }
        }
       
        
        if(tem){
            if(joga){
              var max = auxobj.length;
              var ramdon = Math.floor(Math.random() * (max - 0)) + 0;
              putDesenho(auxobj[ramdon],'bola');
            }
            return true;
        }
          
       
        openModal('DEU VELHA =(');
        limpaElementos();
        block = false;
        return false;
    }

    function maquinaJoga(){
       
        setTimeout(() => {
            if(temEspaco()){                
                //ofensiva 
                 if(matrizJogo['a1'] === 'bola' && matrizJogo['a2'] === 'bola' && isVazio('a3')){
                    putDesenho('a3', 'bola');                     
                }else if(matrizJogo['a1'] === 'bola' && matrizJogo['a2'] === 'bola' && isVazio('a3')){
                    putDesenho('a3', 'bola');
                }else if(matrizJogo['c3'] === 'bola' && matrizJogo['b2'] === 'bola' && isVazio('a3')){
                    putDesenho('a3', 'bola');
                }else if(matrizJogo['b1'] === 'bola' && matrizJogo['b2'] === 'bola' && isVazio('b3')){
                    putDesenho('b3', 'bola');
                }else if(matrizJogo['a3'] === 'bola' && matrizJogo['c3'] === 'bola' && isVazio('b3')){
                    putDesenho('b3', 'bola');
                }else if(matrizJogo['a1'] === 'bola' && matrizJogo['a3'] === 'bola' && isVazio('a2')){
                    putDesenho('a2', 'bola');
                }else if(matrizJogo['a3'] === 'bola' && matrizJogo['c1'] === 'bola' && isVazio('b2')){
                    putDesenho('b2', 'bola');
                }else if(matrizJogo['a2'] === 'bola' && matrizJogo['a3'] === 'bola' && isVazio('a1')){
                    putDesenho('a1', 'bola');
                }else if(matrizJogo['b1'] === 'bola' && matrizJogo['b2'] === 'bola' && isVazio('b3')){
                    putDesenho('b3', 'bola');
                }else if(matrizJogo['b2'] === 'bola' && matrizJogo['b3'] === 'bola' && isVazio('b1')){
                    putDesenho('b1', 'bola');
                }else if(matrizJogo['c1'] === 'bola' && matrizJogo['c2'] === 'bola' && isVazio('c3')){
                    putDesenho('c3', 'bola');
                }else if(matrizJogo['c2'] === 'bola' && matrizJogo['c3'] === 'bola' && isVazio('c1')){
                    putDesenho('c1', 'bola');
                }else if(matrizJogo['a1'] === 'bola' && matrizJogo['b1'] === 'bola' && isVazio('c1')){
                    putDesenho('c1', 'bola');
                }else if(matrizJogo['a2'] === 'bola' && matrizJogo['b2'] === 'bola' && isVazio('c2')){
                    putDesenho('c2', 'bola');
                }else if(matrizJogo['a3'] === 'bola' && matrizJogo['b3'] === 'bola' && isVazio('c3')){
                    putDesenho('c3', 'bola');
                }else if(matrizJogo['a1'] === 'bola' && matrizJogo['c1'] === 'bola' && isVazio('b1')){
                    putDesenho('b1', 'bola');
                }else if(matrizJogo['a1'] === 'bola' && matrizJogo['b2'] === 'bola' && isVazio('c3')){
                    putDesenho('c3', 'bola');
                }else if(matrizJogo['a2'] === 'bola' && matrizJogo['c2'] === 'bola' && isVazio('b2')){
                    putDesenho('b2', 'bola');
                }else if(matrizJogo['a3'] === 'bola' && matrizJogo['c3'] === 'bola' && isVazio('b3')){
                    putDesenho('b3', 'bola');// Agora a ofensiva
                }else if(matrizJogo['a1'] === 'x' && matrizJogo['a3'] === 'x' && isVazio('a2')){
                    putDesenho('a2', 'bola');
                }else if(matrizJogo['a3'] === 'x' && matrizJogo['a2'] === 'x' && isVazio('a1')){
                    putDesenho('a1', 'bola');
                }else if(matrizJogo['c1'] === 'x' && matrizJogo['b2'] === 'x' && isVazio('a3')){
                    putDesenho('a3', 'bola');
                }else if(matrizJogo['b1'] === 'x' &&  matrizJogo['b2'] === 'x' && isVazio('b3')){
                    putDesenho('b3', 'bola');
                }else if(matrizJogo['b1'] === 'x' && matrizJogo['b3'] === 'x' && isVazio('b2')){
                    putDesenho('b2', 'bola');
                }else if(matrizJogo['b3'] === 'x' && matrizJogo['b2'] === 'x' && isVazio('b1')){
                    putDesenho('b1', 'bola');
                }else if(matrizJogo['c1'] === 'x' &&  matrizJogo['c3'] === 'x' && isVazio('c2')){
                    putDesenho('c2', 'bola');
                }else if(matrizJogo['c1'] === 'x' && matrizJogo['c2'] === 'x' && isVazio('c3')){
                    putDesenho('c3', 'bola');
                }else if(matrizJogo['c3'] === 'x' && matrizJogo['c2'] === 'x' && isVazio('c1')){
                    putDesenho('c1', 'bola');
                }else if(matrizJogo['a1'] === 'x' && matrizJogo['b1'] === 'x' && isVazio('c1')){
                    putDesenho('c1', 'bola');
                }else if(matrizJogo['a2'] === 'x' && matrizJogo['b2'] === 'x' && isVazio('c2')){
                    putDesenho('c2', 'bola');
                }else if(matrizJogo['c3'] === 'x' && matrizJogo['b3'] === 'x' && isVazio('c3')){
                    putDesenho('c3', 'bola');
                }else if(matrizJogo['a1'] === 'x' && matrizJogo['c1'] === 'x' && isVazio('b1')){
                    putDesenho('b1', 'bola');
                }else if(matrizJogo['a2'] === 'x' && matrizJogo['c2'] === 'x' && isVazio('b2')){
                    putDesenho('b2', 'bola');
                }else if(matrizJogo['a3'] === 'x' && matrizJogo['c3'] === 'x' && isVazio('b3')){
                    putDesenho('b3', 'bola');
                }else if(matrizJogo['a1'] === 'x' && matrizJogo['c3'] === 'x' && isVazio('b2')){
                    putDesenho('b2', 'bola');
                }else if(matrizJogo['a3'] === 'x' && matrizJogo['c1'] === 'x' && isVazio('b2')){
                    putDesenho('b2', 'bola');
                }else if(matrizJogo['a3'] === 'x' && matrizJogo['b2'] === 'x' && isVazio('c1')){
                    putDesenho('c1', 'bola');
                }else if(matrizJogo['c3'] === 'x' && matrizJogo['b2'] === 'x' && isVazio('a1')){
                    putDesenho('a1', 'bola');
                }else if(matrizJogo['c1'] === 'x' && matrizJogo['b2'] === 'x' && isVazio('a3')){
                    putDesenho('a3', 'bola');
                }else if(matrizJogo['a1'] === 'x' && matrizJogo['b2'] === 'x' && isVazio('c3')){
                    putDesenho('c3', 'bola');
                }else if(matrizJogo['a3'] === 'x' && matrizJogo['b3'] === 'x' && isVazio('c3')){
                    putDesenho('c3', 'bola');// A partir daqui é a ofensiva
                }else if(matrizJogo['c3'] === 'x' && matrizJogo['b3'] === 'x' && isVazio('a3')){
                    putDesenho('a3', 'bola');// A partir daqui é a ofensiva
                }else if(matrizJogo['a3'] === 'x' && matrizJogo['c3'] === 'x' && isVazio('b3')){
                    putDesenho('b3', 'bola');// A partir daqui é a ofensiva
                }else if(matrizJogo['b1'] === 'x' && matrizJogo['c1'] === 'x' && isVazio('a1')){
                    putDesenho('a1', 'bola');// A partir daqui é a ofensiva
                }else if(matrizJogo['a1'] === 'x' && matrizJogo['a2'] === 'x' && isVazio('a3')){
                    putDesenho('a3', 'bola');// A partir daqui é a ofensiva
                }else{
                    temEspaco(true);
                }
                
                block = false;
                
            }    
        }, 1000);
            
    
    }

}  
})();