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
        list.appendChild(listItem)
    }

    const deleteMember = e => {
        console.log(e)
        //remove person from megaRoster array
        const name = e.path[1].className
        megaRoster.splice(megaRoster.indexOf(name),1)

        //remove html element from the list
        const container = e.path[2]
        container.remove()
    }

    const promoteMember = e => {
        
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
        megaRoster.unshift(name.value)
        console.log(megaRoster)
        updateList()
    }

    const form = document.querySelector('form')
    form.addEventListener('submit',addMember)
}