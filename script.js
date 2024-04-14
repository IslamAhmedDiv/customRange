const thumb = document.getElementById("thumb")
const slider = document.getElementById("slider")
const body = document.body
const width = slider.offsetWidth
let start_x, moving_x, movement, place

// get position of an element
function positionElement(elm){
    let clickEvent = new MouseEvent("click", {});
    let posX, posY
    elm.addEventListener("click", (p)=>{
        posX = p.offsetX
        posY = p.offsetY
    })
    elm.dispatchEvent(clickEvent);
    return {posX, posY}
}
let slider_pos_x = (positionElement(slider).posX) * -1

// events to the thumb
let mouseDown = ()=>{
    // let screen_x = pos.screenX
    // let point_slider = screen_x - slider_pos_x
}

let mouseMove = (pos)=>{
    moving_x = pos.screenX
    movement = moving_x - slider_pos_x
    if(movement < 0 ){movement = 0
    }else if(movement > width){movement = width}

    thumb.style.left = `${movement}px`

    // set value to the slider
    place = (movement / width ) * 100
    slider.dataset.value = place
    body.style.cursor = "grab"
}

let mouseUp = ()=>{
    // remove events listener
    body.style.cursor = "auto"
    thumb.removeEventListener("mousedown", mouseDown)
    body.removeEventListener("mousemove", mouseMove)
}


thumb.addEventListener("mousedown", ()=>{

    // call a function on click mouse move
    body.addEventListener("mousemove", mouseMove)

    // call a function on click mouse up and clear events
    body.addEventListener("mouseup", mouseUp)
    body.addEventListener("mouseleave",mouseUp)
    thumb.addEventListener("dragstart",mouseMove)

})


let mouseDown_thumb = (pos)=>{
    start_x = pos.offsetX
    thumb.style.left = `${start_x}px`

    // call a function on click mouse move
    body.addEventListener("mousemove", mouseMove)
    body.addEventListener("mouseup", mouseUp)
    body.addEventListener("mouseleave",mouseUp)
    thumb.addEventListener("dragstart",mouseMove)
}

slider.addEventListener("mousedown", mouseDown_thumb)


