addEventListener("load", () => {
    const h1 = document.getElementById('heading1')

    h1.addEventListener('mouseover',() => console.log("your hover over me"))
    let sum = 0
    const b = document.getElementById('button')
    b.addEventListener('click', () =>{
        sum ++
        console.log(sum)
    })
})

