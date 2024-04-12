const thumb = document.getElementById("thumb")

let startX;
thumb.ondragstart = (pos)=>{
    startX = pos.screenX
}

thumb.ondrag = (pos)=>{
    const x = pos.screenX
    const movement = x - startX
    thumb.style.left = `${movement}px`
    // thumb.style.cursor = "pointer"
}





