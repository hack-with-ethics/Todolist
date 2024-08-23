function addtask(){

    // sock()

    const val = document.getElementById("inp")
    val.value = val.value.trim();
    const Lst = ["👍","🍁","🤩","👽","🥷","🤖"]
    if(!val.value==""){

        if(val.value.includes("gym")){
            val.value+="💪"}
        else if(val.value.includes("game")){
            val.value+="🎰"
        }else if(val.value.includes("code")){
            val.value += "👩‍💻"
        }else if(val.value.includes(".com")){
            val.value+= "🕸️"
        }else if(val.value.includes("learn")){
            val.value+="🏫"}
        else{
            val.value+=`${Lst[Math.round(Math.random()*5)]}`
        }

        const para = document.createElement("p")
        const Li = document.getElementById("list")
        const btn = document.createElement("button")
        btn.textContent = "❌"
        const sp = document.createElement("span")
        sp.textContent = val.value
        btn.setAttribute("id","btn")
        btn.setAttribute("onclick","eleminate(event)")
        Li.appendChild(para).appendChild(sp).appendChild(btn)
        val.value = ""
        }else{
        alert("🚨 Please Enter Something ⚠️ ")

        }
    }



function eleminate(event){
    event.target.parentElement.remove() //#FF0033
}
