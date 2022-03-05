// const { response } = require("express")

const deleteText = document.querySelectorAll('.del')
Array.from(deleteText).forEach((element) =>{
    element.addEventListener('click', deleteMovie)
})

// Delete or DELETE /info
async function deleteMovie(){
    const mName = this.parentNode.childNodes[1].innerText
    const importance = this.parentNode.childNodes[3].innerText
    try{
        const response = await fetch('/deleteMovie', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'movieNameS': mName,
                // 'importanceS': importance,
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }
    catch(err){
        console.log(err)
    }
    
}
// Update or PUT /info 
// Create or POST /addmovie

// PUT function not working, eventlistener not activating. 

// const checkboxes = document.querySelector('checkbox')
// Array.from(checkboxes).forEach((element) =>{
//     element.addEventListener('click', alert("Clicked!"))
// })

// async function seen() {
//     console.log("started")
//     const checked = this.checked
//     try{
//         const response = await fetch ('checkbox', {
//             method: 'put',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({
//                 'checkbox': checked,
//             })
//         })
//     const data = await response.json()
//     console.log(data)
//     location.reload()
//     }catch {
//         error 
//     }
// }