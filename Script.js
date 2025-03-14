console.log("hello");
let title = document.getElementById("title");
title.onclick = () => {
    
    
   
    title.innerHTML +=  prompt("whats is ypur name")
}

for(let x = 1; x <2; x++){
title.innerHTML += "good bye  "
}console.log(title);
