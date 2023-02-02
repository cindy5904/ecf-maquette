var btn = document.querySelector('.btn');
var text = document.querySelector('.text')

function Ajout(){
    
   text.innerHTML = "Votre commande est prête"
    
}
console.log(Ajout)

btn.addEventListener("click" , function(e){
    console.log(e)
    text.innerHTML = "votre commande a été prise en compte"
})




var frame = document.querySelector('.video')
var video = document.querySelector('#circle')

video.addEventListener("click", function(e) {

    console.log(e)
    frame.innerHTML = '<iframe width="443" height="295" border-radius="10px" src="https://www.youtube.com/embed/_GuOjXYl5ew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    


} )

var ajout = document.querySelector('.ajout');
var nombre = document.querySelector('#change')

nombre.innerHTML = 5
var compt= 5

ajout.addEventListener('click', function (e){
        compt+=1
        nombre.innerHTML = compt
        
})

var nombre1 = document.querySelector('#nombre1');
var nombre2 = document.querySelector('#nombre2');
var nombre3 = document.querySelector('#nombre3');
var btnrandom = document.querySelector('.aleatoire');




btnrandom.addEventListener("click", function(e) {
    nombre1.innerHTML = Math.floor(Math.random() * 100000)
    nombre2.innerHTML = Math.floor(Math.random() * 100000)
    nombre3.innerHTML = Math.floor(Math.random() * 100000)
})

var input = document.querySelector('#input');
var btnInput = document.querySelector('.btnInput')
var valeur = input.value;

btnInput.addEventListener('click', function(e){
    alert('Merci' + {valeur}) 
})






