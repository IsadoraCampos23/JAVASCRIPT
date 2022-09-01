function carregar (){
    var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data= new Date() 
var hora = data.getHours()
var hora= 19
msg.innerHTML= `agora são ${hora} horas.`

if(hora>=0 && hora<12){
    //BOM DIA!
    img.src= 'img/Sem título.png'
    document.body.style.background= '#e2cd9f'

} else if(hora>=12 && hora<18){
//DOA TARDE!
img.src= 'img/Sem título1.png'
document.body.style.background ='#b9846f'
} else{
//DOA NOITE!
img.src = 'img/Sem título2.png'
document.body.style.background = '#515154'
}
}
