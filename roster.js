const megaRoster = [];
{
    const updateList = () => {
        
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