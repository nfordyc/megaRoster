const megaRoster = [];
{
    const updateList = () => {
        const list = document.querySelector('ul')
        megaRoster.forEach(name => {
            let listItem = document.createElement('li')
            let div = `
            <div class=${name}>
                <label>${name}</label>
                <button>Delete</button>
                <button>Promote</button>
            <div>`
            listItem.innerHTML = div
            list.appendChild(listItem)
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