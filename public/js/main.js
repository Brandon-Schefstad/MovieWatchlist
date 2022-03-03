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
