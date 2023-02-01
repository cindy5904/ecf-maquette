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




var frame = document.querySelector('.assiette')
var video = document.querySelector('#circle')

video.addEventListener("click", function(e) {

    console.log(e)
    frame.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/_GuOjXYl5ew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    


} )

// var ajout = document.querySelector('.ajout');
// var nombre = document.querySelector('#change')

// nombre.innerHTML ='5'


// ajout.addEventListener('click', function (e){
//         var compt= +1
//         nombre.innerHTML = nombre + compt
// })

var nombre = 0
function Compt() {
    nombre ++;
    document.queryselector(".ajout").textContent = nombre

}

document.querySelector('#change').addEventListener("click", Compt)


