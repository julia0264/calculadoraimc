let corpo=document.body; corpo.style.background="pink";
    let numero=0
    document.getElementById("redefinir").onclick=formRedefinir;
    registrar.onclick=function(){
        numero=numero+1
        let nome=document.getElementById("nome").value;
        let peso=document.getElementById("peso").value;
        peso=parseFloat(peso)
        let altura=document.getElementById("altura").value;
        altura=parseFloat(altura)
        if(peso>0 && altura>0 && nome.length>2){
            let valorIMC=(peso/(altura*altura)).toFixed(2);
            let text
            if(valorIMC<17){
                text=document.creatTextNode(valorIMC+" - Você está abaixo do peso")
            }else if(valorIMC>30){
                text=document.creatTextNode(valorIMC+" - Você está obeso")
            }else if(valorIMC>35){
                text=document.creatTextNode(valorIMC+" - Você está obeso mórbido")
            }
        
            let tabela=document.querySelector('#bodyTable')        
            let tr=document.createElement("tr");

            let campoNumero=document.createElement("td");
            campoNumero.append(numero);

            let campoNome=document.createElement("td");
            campoNome.append(nome);

            let campoPeso=document.createElement("td");
            campoPeso.append(peso);
            
            let campoAltura=document.createElement("td");
            campoAltura.append(altura);
             
            
            tr.append(campoNumero);
            tr.append(campoNome);
            tr.append(campoPeso);
            tr.append(campoAltura);
            tr.append(valorIMC);
            tabela.append(tr);
            nome=null; peso=null; altura=null;
            
        }
    }
    function formRedefinir(){ 
    document.getElementById("nome").value=""; 
    document.getElementById("peso").value="";
    document.getElementById("altura").value=""
}