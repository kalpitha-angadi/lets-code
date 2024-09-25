function marks() {
    var name = document.getElementById("NAME").value;
    var pass = 100 * Math.random();
    var result = document.getElementById("Results");
    result.innerHTML = name + ", YOU HAVE SCORED : " + pass.toFixed(2)+"%";
}
if(marks >= 0 && marks <= 35){
    
}