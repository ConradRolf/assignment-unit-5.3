console.log('***** Music Collection *****')

let collection = []
// creating an array called 'collection'
function addToCollection(title, artist, yearPublished) {
    let album = {
        'title': title, 
        'artist': artist, 
        'yearPublished': yearPublished
    
    }
    console.log(album);
    return album;
}

// creating a function that will take input parameters and create an 'album' to be put into 'collection'
collection.push(addToCollection('American Idiot (Deluxe)', 'Green Day', '2004'))
collection.push(addToCollection('Sleeptalk', 'Dayseeker', '2019'))
collection.push(addToCollection('Dark Sun', 'Dayseeker', '2022'))
collection.push(addToCollection('When Life Gives You Lemons, You Paint That Shit Gold', 'Atmosphere', '2008'))
collection.push(addToCollection('Doom OST', 'Mick Gordan', '2016'))
collection.push(addToCollection('beerbongs & bentleys', 'Post Malone', '2018'))
collection.push(addToCollection('Stoney (Deluxe)', 'Post Malone', '2016'))
// adding 'albums' into the 'collection'
console.log(collection);

function showCollection() {
    
    for (i in collection)
    console.log(collection[i].title, 'by', collection[i].artist + ', published in', collection[i].yearPublished)
}
showCollection();

// name is where to input the artist name
let results = []
function findByArtist( name ) {
    let artistFound = false
    for (i in collection)
        if (collection[i].artist === name) {
            console.log('Artist Found.')
            results.push(collection[i])
            artistFound = true
        }
    if (!artistFound)
        console.log('Artist not found.')

}
findByArtist('Green Day')
findByArtist('Post Malone')
findByArtist('Hannibal Lecter')
console.log(results)