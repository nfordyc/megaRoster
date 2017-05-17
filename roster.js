const megaRoster = [];
{
    const createListEntry = (name,list) => {
        let listItem = document.createElement('li')
        let div = `
            <div class=${name}>
                <label>${name}</label>
                <button id="delete${name}">Delete</button>
                <button id="promote${name}">Promote</button>
            <div>`
        listItem.innerHTML = div

        list.insertBefore(listItem,list.childNodes[0])
    }

    const deleteMember = e => {
        //remove person from megaRoster array
        const name = e.path[1].className
        megaRoster.splice(megaRoster.indexOf(name),1)

        //remove html element from the list
        const container = e.path[2]
        container.remove()
    }

    const promoteMember = e => {
        //change border color to red
        const box = e.path[2]
        box.style.borderColor = 'red'
    }

    const updateList = () => {
        const list = document.querySelector('ul')

        megaRoster.forEach(name => {
            //check if name is already on list
            if(document.querySelector(`div.${name}`)) return

            //create new div
            createListEntry(name,list)

            const deleteButton = document.getElementById(`delete${name}`)
            const promoteButton = document.getElementById(`promote${name}`)

            deleteButton.addEventListener('click',deleteMember)
            promoteButton.addEventListener('click',promoteMember)
        })
    }

    const addMember = (e) => { //add new member to megaRoster array
        e.preventDefault()
        const name = document.querySelector('.name')

        //don't allow duplicates
        if(megaRoster.indexOf(name.value) > -1) return
        
        megaRoster.unshift(name.value)
        console.log(megaRoster)
        updateList()
    }

    const form = document.querySelector('form')
    form.addEventListener('submit',addMember)
}