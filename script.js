//Usar oninput com uma função para atualizar dados automaticamente 
//input deve ser do tipo text ou number dependendo do que for inserido nele 
//deve haver uma mensagem de erro caso o usuário digite algo errado. usar uma função com estrutura condicional para isso

function fillStringData(input){
    let data= document.getElementById("cardFrontName");
    data.innerHTML = input.value; 
}
function fillIntData(input){
    let data=document.getElementById("cardFrontNumber");
    data.innerHTML = input.value;
}
function fillIntData1(input){
    let data=document.getElementById("cardFrontDateMM");
    data.innerHTML = input.value;
}
function fillIntData2(input){
    let data=document.getElementById("cardFrontDateYY");
    data.innerHTML = input.value;
}
function fillIntData3(input){
    let data=document.getElementById("cardBackNumber");
    data.innerHTML = input.value;
}
//Tentei implementar a mensagem cant be blanck pra todos os campos do formulário em uma única função. não deu certo
//parece que o jeito que daria certo seria implementar uma função pra cada campo, mas parece pouco inteligente
function cantbeblank(){
    let inputMM= document.getElementById('inputMM');
    let inputYY= document.getElementById('inputYY');
    let erroMM= document.getElementById("erroMM");
    if(inputMM.value==0 || inputYY.value==0){
        inputMM.style.borderColor="hsl(0, 100%, 66%)";
        inputYY.style.borderColor="hsl(0, 100%, 66%)";
        erroMM.innerHTML="Can't be blanck";
        erroMM.style.color="hsl(0, 100%, 66%)";
    }
    
}


function cantbeblanck1(){
    let inputname= document.getElementById('inputname');
    let erroname= document.getElementById("erroname");
    if(inputname.value==""){
        inputname.style.borderColor="hsl(0, 100%, 66%)";
        erroname.innerHTML="Can't be blanck";
        erroname.style.color="hsl(0, 100%, 66%)";
    }
}

function cantbeblank2(){
    let inputnumber= document.getElementById('inputnumber');
    let erronumber= document.getElementById("erronumber");
    if(inputnumber.value==0){
        inputnumber.style.borderColor="hsl(0, 100%, 66%)";
        erronumber.innerHTML="Can't be blanck";
        erronumber.style.color="hsl(0, 100%, 66%)";
    }
}
function cantbeblank3(){
    let inputcvc= document.getElementById('inputcvc');
    let errocvc= document.getElementById("errocvc");
    if (inputcvc.value==0){
        inputcvc.style.borderColor="hsl(0, 100%, 66%)";
        errocvc.innerHTML="Can't be blanck";
        errocvc.style.color="hsl(0, 100%, 66%)";
    }   
}








//Função inacabada
function filled(input){
    let erroMM= document.getElementById("erroMM");
    let erronumber= document.getElementById("erronumber");
    let errocvc= document.getElementById("errocvc");
    if(input.value!=0){
        erroMM.innerHTML="";
    }
}

function ChangeOriginalColor(input){
    input.style.borderColor="hsl(270, 3%, 87%)";
}
