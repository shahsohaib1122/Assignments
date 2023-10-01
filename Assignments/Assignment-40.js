"use strict";
function makeAlbum(artist, title, tracks) {
    const album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Creating three albums
const album1 = makeAlbum('Artist 1', 'Album 1');
const album2 = makeAlbum('Artist 2', 'Album 2', 10);
const album3 = makeAlbum('Artist 3', 'Album 3');
// Printing the album information
console.log(album1);
console.log(album2);
console.log(album3);
