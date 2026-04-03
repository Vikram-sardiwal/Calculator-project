function display(a){
let t = document.getElementById("t1")
t.value+=a

}

function result(){
    let b = document.getElementById("t1").value
    let c = eval(b)
    document.getElementById("t1").value=c
}
function clear1(){
    document.getElementById("t1").value=""
}
