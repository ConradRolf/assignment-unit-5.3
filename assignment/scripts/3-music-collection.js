console.log('***** Music Collection *****')

let collection = []

function addToCollection(title, artist, release) {
    let album = {
        title, artist, release
    }
    collection.push(album);
    return album;
}
addToCollection('American Idiot (Deluxe)', 'Green Day', '2004')
console.log(collection[0])
addToCollection('Sleeptalk', 'Dayseeker', '2019')
addToCollection('Dark Sun', 'Dayseeker', '2022')
addToCollection('When Life Gives You Lemons, You Paint That Shit Gold', 'Atmosphere', '2008')
addToCollection('Doom OST', 'Mick Gordan', '2016')
addToCollection('beerbongs & bentleys', 'Post Malone', '2018')
addToCollection('Stoney (Deluxe)', 'Post Malone', '2016')

function showCollection(){
    for (i in collection)
        console.log(album.title, 'by', album.artist, 'published in', album.release[i])
}
showCollection();
console.log(collection);