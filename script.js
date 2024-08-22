function addtask(){

    const val = document.getElementById("inp")
    val.value = val.value.trim();

    if(!val.value==""){
        const para = document.createElement("p")
        const Li = document.getElementById("list")
        para.innerHTML = `<span> ${val.value}  <button id="btn" onclick="eleminate(event)">❌</button> </span` ;
        Li.appendChild(para);
        val.value = ""
    }else{
        alert("🚨 Please Enter Something ⚠️ ")

    }
}
function eleminate(event){
    event.target.parentElement.remove() //#FF0033
}
