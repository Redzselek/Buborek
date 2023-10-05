var max_w = window.innerWidth
var max_h = window.innerHeight

document.getElementById("badi").addEventListener("keypress", Letrehoz)

var id_counter = 0

var idozitok = []

function Letrehoz()
{
    id_counter++
    var w = Math.floor(Math.random()*200)+50
    var x = Math.floor(Math.random()*(max_w-w));    
    var y = Math.floor(Math.random()*(max_h-w));    
    document.getElementById("badi").innerHTML += "<img src='assets/images/bubi.gif' id='bubi_"+id_counter+"' style='position: absolute; top: "+y+"px; left: "+x+"px; width: "+w+"px;'>"
    setTimeout(Megszuntet, 1000, 'bubi_'+id_counter);
}

function Megszuntet(id) {
    document.getElementById(id).remove();
    var audio = new Audio('assets/audio/pukk.wav')
    audio.play();
}