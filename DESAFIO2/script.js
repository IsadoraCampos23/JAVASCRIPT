function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value>ano ) ){
        window.alert('[ERRO!] Por favor, verifique os dados e tente novamente!')
    } else{
       var fsex= document.getElementsByName('radsex')
       var idade= ano-Number(fano.value) 
       var genero= ''
       var img= document.createElement('img')
       img.setAttribute('id', 'foto')
       

       if(fsex[0].checked){
        genero ='Homem'

if(idade>=0 && idade<10){
    //criança
    img.setAttribute('src', 'img2/menino.png')
}else if( idade<21){
    //jovem
    img.setAttribute('src', 'img2/jovemH.png')
}else if(idade<50){
    //adulto
    img.setAttribute('src', 'img2/homem.png')
} else{
    //idoso
    img.setAttribute('src', 'img2/idoso.png')
}

       }else if(fsex[1].checked){
genero= 'Mulher'

if(idade>=0 && idade<10){
    //criança
    img.setAttribute('src', 'img2/menina.png')
}else if( idade<21){
    //jovem
    img.setAttribute('src', 'img2/jovemM1.png')
}else if(idade<50){
    //adulto
    img.setAttribute('src', 'img2/mulher.png')
} else{
    //idoso
    img.setAttribute('src', 'img2/idosa.png')
}
       }
       res.style.textAlign= 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
       res.appendChild(img)
    }

}