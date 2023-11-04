let imagem;
function alterarStatus(tag){
    if(tag == 1){
        let texto = document.getElementById("game-1").querySelector("a");
        if(texto.innerHTML == "Alugar"){
            texto.classList.replace("dashboard__item__button", "dashboard__item__button--return");
            texto.innerHTML = "Devolver";

            imagem = document.getElementById("game-1").querySelector("div");
            imagem.classList.replace("dashboard__item__img", "dashboard__item__img--rented");
        }else{
            texto.innerHTML = "Alugar";
            texto.classList.replace("dashboard__item__button--return", "dashboard__item__button");
           
            imagem = document.getElementById("game-1").querySelector("div");
            imagem.classList.replace("dashboard__item__img--rented", "dashboard__item__img");
        }        
    }
    if(tag == 2){
        let texto = document.getElementById("game-2").querySelector("a");
        if(texto.innerHTML == "Alugar"){
            texto.innerHTML = "Devolver";
            texto.classList.replace("dashboard__item__button", "dashboard__item__button--return");

            imagem = document.getElementById("game-2").querySelector("div");
            imagem.classList.replace("dashboard__item__img", "dashboard__item__img--rented");            
        }else{
            texto.innerHTML = "Alugar";
            texto.classList.replace("dashboard__item__button--return", "dashboard__item__button");

            imagem = document.getElementById("game-2").querySelector("div");
            imagem.classList.replace("dashboard__item__img--rented", "dashboard__item__img");            
        } 
    }
    if(tag == 3){
        let texto = document.getElementById("game-3").querySelector("a");
        if(texto.innerHTML == "Alugar"){
            texto.innerHTML = "Devolver";
            texto.classList.replace("dashboard__item__button", "dashboard__item__button--return");

            imagem = document.getElementById("game-3").querySelector("div");
            imagem.classList.replace("dashboard__item__img", "dashboard__item__img--rented");            
        }else{
            texto.innerHTML = "Alugar";
            texto.classList.replace("dashboard__item__button--return", "dashboard__item__button");
            
            imagem = document.getElementById("game-3").querySelector("div");
            imagem.classList.replace("dashboard__item__img--rented", "dashboard__item__img");            
        }
    }
}
