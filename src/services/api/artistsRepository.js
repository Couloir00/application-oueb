const getArtistsData = async function(){
   
    const response = await fetch ('https://rest.bandsintown.com/artists/Phoebe%20Bridgers/?app_id=426caffc63138441a125573b12af891c')
    if (response.status == 200){
        return response.json()
    }
    else {
        new Error(response.statusText)
    }
}
export {getArtistsData}

// 'https://rest.bandsintown.com/artists/Hayley%20Williams/?app_id=426caffc63138441a125573b12af891c'
// https://rest.bandsintown.com/artists/Clairo/?app_id=426caffc63138441a125573b12af891c
// https://rest.bandsintown.com/artists/Dizzy/?app_id=426caffc63138441a125573b12af891c

// What to do : Page d'accueil avec listes des artistes du label
// Quand on clique sur un artistes on a la liste de ses concerts
// Faire un filtre 
// Bonus event autour de toi ? MAP avec les différents concerts qui arrivent et leur destination
