



const getPhoebeData = async function(){
    // let toto
    // "jzioefije" + toto + "dzdjoizj"
    // `hdudhdiud${toto}`
    const response = await fetch ('https://rest.bandsintown.com/artists/Phoebe%20Bridgers/?app_id=426caffc63138441a125573b12af891c')
    if (response.status == 200){
        return response.json()
    }
    else {
        new Error(response.statusText)
    }

}
export {getPhoebeData}

const getPhoebeEventData = async function(){
   
    const response = await fetch ('https://rest.bandsintown.com/artists/Phoebe%20Bridgers/events/?app_id=426caffc63138441a125573b12af891c')
    if (response.status == 200){
        return response.json()
    }
    else {
        new Error(response.statusText)
    }

}
export {getPhoebeEventData}

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

const getTaylorData = async function(){
   
    const response = await fetch ('https://rest.bandsintown.com/artists/Taylor%20Swift/?app_id=426caffc63138441a125573b12af891c')
    if (response.status == 200){
        return response.json()
    }
    else {
        new Error(response.statusText)
    }

}
export {getTaylorData}

const getIsaacData = async function(){
   
    const response = await fetch ('https://rest.bandsintown.com/artists/Isaac%20Delusion/?app_id=426caffc63138441a125573b12af891c')
    if (response.status == 200){
        return response.json()
    }
    else {
        new Error(response.statusText)
    }

}
export {getIsaacData}

const getGreetingCommitteeData = async function(){
   
    const response = await fetch ('https://rest.bandsintown.com/artists/The%20Greeting%20Committee/?app_id=426caffc63138441a125573b12af891c')
    if (response.status == 200){
        return response.json()
    }
    else {
        new Error(response.statusText)
    }

}
export {getGreetingCommitteeData}

const getBoygeniusData = async function(){
   
    const response = await fetch ('https://rest.bandsintown.com/artists/Boygenius/?app_id=426caffc63138441a125573b12af891c')
    if (response.status == 200){
        return response.json()
    }
    else {
        new Error(response.statusText)
    }

}
export {getBoygeniusData}



//  What to do :
// Afficher les evenements sur la nouvelle page
// Quand on clique sur un artistes on a la liste de ses concerts (filtre)
// Faire un filtre en fonction de la date et un en fonction du lieu pour les events

// Améliorations : 
// Faire un tableau avec tous les artistes dès le .js ?
// Bonus event autour de toi ? MAP avec les différents concerts qui arrivent et leur localisation
// Le load est lent

// TO ASK POURQUOI EST CE QU'IL Y A DES PROBLEMES D'AFFICHAGE MAIS PAS TOUT LE TEMPS
//        POURQUOI EST CE QUE JE N'ARRIVE PAS A AFFICHER MES EVENTS DANS MA PAGE EVENT MAIS J'ARRIVE A LES AFFICHER SUR MA PAGE ARTISTS
//        COMMENT COMMUNIQUER UNE INFO SUR L'ENDROIT OU ON CLIQUE (EX: JE CLIQUE SUR CLAIRO, JE VEUX RECUP SON NOM POUR N'AVOIR QUE SES INFOS POUR LES EVENTS)

