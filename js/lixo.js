// regra de negocio
                if(matrizJogo['b2'] === 'bola' && !matrizJogo['b3']){
                    putDesenho('b3', 'bola');                     
                }else if(matrizJogo['b2'] === 'bola' && !matrizJogo['b1']){
                    putDesenho('b1', 'bola');
                }else if(matrizJogo['a1'] === 'bola' && !matrizJogo['a2']){
                    putDesenho('a2', 'bola');
                }else if(matrizJogo['a2'] === 'bola' && !matrizJogo['a3']){
                    putDesenho('a3', 'bola');
                }else if(matrizJogo['a2'] === 'bola' && !matrizJogo['a1']){
        
                    putDesenho('a3', 'bola');
                }else if(!matrizJogo['a1']){
                    putDesenho('a1', 'bola');
                }else if(matrizJogo['a1'] === 'x' && matrizJogo['a3'] === 'x'){
                    putDesenho('a2', 'bola');
                }

               // Math.floor(Math.random() * (max - min)) + min;