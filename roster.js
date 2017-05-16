const megaRoster = [];
{
    const addMember = () => { //add new member to megaRoster array
        const name = document.querySelector('.name')
        megaRoster.unshift(name.value)
        console.log(megaRoster)
    }

    const addButton = document.querySelector('button')
    addButton.addEventListener('onclick',addMember)
}