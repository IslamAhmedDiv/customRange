const thumb = document.getElementById("thumb")
const slider = document.getElementById("slider")
const width = slider.offsetWidth

let start_x, moving_x, end_x, movement

let mouseDown = (pos)=>{
    start_x = pos.screenX
    console.log("start_x", pos.screenX)
}


let mouseMove = (pos)=>{
    moving_x = pos.screenX
    movement = moving_x - start_x
    // console.log("moving_x", moving_x)
    thumb.style.left = `${movement}px`
}

let mouseUp = (pos)=>{
    end_x = pos.screenX
    console.log("mouseUp")

    // remove events listener
    thumb.removeEventListener("mousedown", mouseDown)
    thumb.removeEventListener("mousemove", mouseMove)
}


thumb.addEventListener("mousedown", (pos)=>{

    // call a function on click mouse down
    mouseDown(pos)

    // call a function on click mouse move
    thumb.addEventListener("mousemove", mouseMove)

    // call a function on click mouse up and clear events
    thumb.addEventListener("mouseup", (pos)=>{
        console.log("removed")
        mouseUp(pos)
    })

    // thumb.addEventListener("mouseleave", (pos)=>{
    //     console.log("removed")
    //     mouseUp(pos)
    // })

})




