const getPhoebeData = async function(){
   
    const response = await fetch ('https://rest.bandsintown.com/artists/Phoebe%20Bridgers/?app_id=426caffc63138441a125573b12af891c')
    if (response.status == 200){
        return response.json()
    }
    else {
        new Error(response.statusText)
    }

}
export {getPhoebeData}

const getPvrisData = async function(){
   
    const response = await fetch ('https://rest.bandsintown.com/artists/Pvris/?app_id=426caffc63138441a125573b12af891c')
    if (response.status == 200){
        return response.json()
    }
    else {
        new Error(response.statusText)
    }

}
export {getPvrisData}

const getClairoData = async function(){
   
    const response = await fetch ('https://rest.bandsintown.com/artists/Clairo/?app_id=426caffc63138441a125573b12af891c')
    if (response.status == 200){
        return response.json()
    }
    else {
        new Error(response.statusText)
    }

}
export {getClairoData}

const getDizzyData = async function(){
   
    const response = await fetch ('https://rest.bandsintown.com/artists/Dizzy/?app_id=426caffc63138441a125573b12af891c')
    if (response.status == 200){
        return response.json()
    }
    else {
        new Error(response.statusText)
    }

}
export {getDizzyData}

const getHayleyData = async function(){
   
    const response = await fetch ('https://rest.bandsintown.com/artists/Hayley%20Williams/?app_id=426caffc63138441a125573b12af891c')
    if (response.status == 200){
        return response.json()
    }
    else {
        new Error(response.statusText)
    }

}
export {getHayleyData}

const getBirdyData = async function(){
   
    const response = await fetch ('https://rest.bandsintown.com/artists/Birdy/?app_id=426caffc63138441a125573b12af891c')
    if (response.status == 200){
        return response.json()
    }
    else {
        new Error(response.statusText)
    }

}
export {getBirdyData}


// 'https://rest.bandsintown.com/artists/Hayley%20Williams/?app_id=426caffc63138441a125573b12af891c'
// https://rest.bandsintown.com/artists/Clairo/?app_id=426caffc63138441a125573b12af891c
// https://rest.bandsintown.com/artists/Dizzy/?app_id=426caffc63138441a125573b12af891c

// What to do : Page d'accueil avec listes des artistes du label
// Quand on clique sur un artistes on a la liste de ses concerts
// Faire un filtre en fonction de la date et un en fonction du lieu 
// Bonus event autour de toi ? MAP avec les différents concerts qui arrivent et leur localisation
