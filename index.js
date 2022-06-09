
//let greenCharacter = document.createElement('img')
//greenCharacter.src = 'assets/green-character.gif'
//greenCharacter.style.position = 'fixed'
//greenCharacter.style.left = '100px'
//greenCharacter.style.bottom = '100px'
//document.body.append(greenCharacter)



//let PineTree = document.createElement('img')
//PineTree.src = 'assets/pine-tree.png'
//PineTree.style.position = 'fixed'
//PineTree.style.left = '450px'
//PineTree.style.bottom = '200px'
//document.body.append(PineTree)

//Refractor Using Function//


function newImage(asset, left, bottom){
    let greenCharacter = document.createElement('img')
    greenCharacter.src = asset
    greenCharacter.style.position = 'fixed'
    greenCharacter.style.left = left + 'px'
    greenCharacter.style.bottom = bottom + 'px'
    document.body.append(greenCharacter)
    return greenCharacter
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

function newItem(url, left, bottom){
    let player = newImage(url, left, bottom)

    player.addEventListener('dblclick', () => {
        player.remove()
    })
}

newItem('assets/sword.png', 500, 405)
//I don't know why sheild img will not show up, i have sowrd and staff to show up
newItem('assets/staff.png', 600, 100)
