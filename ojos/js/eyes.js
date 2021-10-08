try{
    const balls = document.getElementsByClassName("ball")

    const movimiento = document.onmousemove = () => {
    
        let x = event.clientX * 100 / window.innerWidth + "%"
        let y = event.clientY * 100 / window.innerHeight + "%"
    
        for(let i = 0; i < 2; i++){

            balls[i].style.left = x
            balls[i].style.top = y
            balls[i].style.transform = `traslate(-${x}, -${y})`
        }
    }

}catch(err){
    console.log(err)
}finally{
    console.log("Porfavor No Toques Nada Aquí Porque Puedes Ser Victima De Ataques")
}