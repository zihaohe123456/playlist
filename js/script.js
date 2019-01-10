/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ['Downpour','Stay','Gotta Go','Time for moon night', 'Ddu du ddu du', 'Solo'];
var images_link = ['https://i1.wp.com/colorcodedlyrics.com/wp-content/uploads/2017/01/IOI-downpour.jpg?fit=600%2C600&ssl=1', 'https://c-sf.smule.com/sf/s60/arr/6b/88/aec91115-b714-4058-afcb-4f4272ca6e10.jpg', ''];
var atists = ['ioi', 'Blackpink', 'Chungha', 'Gfriend', 'Chungha', 'Jennie'];
var song_lengths = ['3:53', ];
var links =['https://www.youtube.com/watch?v=kbdW2LaKlnw', 'https://www.youtube.com/watch?v=FzVR_fymZw4', 'https://www.youtube.com/watch?v=HlN2BXNJzxA', 'https://www.youtube.com/watch?v=_XyBa8QsVQU', 'https://www.youtube.com/watch?v=IHNzOHi8sJs', 'https://www.youtube.com/watch?v=b73BI9eUkjM', 'https://www.billboard.com/files/styles/article_main_image/public/media/chung-ha-2018-cr-MNH-Entertainment-billboard-1548.jpg', 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/GFriend_Time_for_Moon_Night_Album_Artwork.jpg/220px-GFriend_Time_for_Moon_Night_Album_Artwork.jpg', 'https://i.ytimg.com/vi/IHNzOHi8sJs/maxresdefault.jpg', 'https://i.pinimg.com/originals/a9/c6/b3/a9c6b36b871bd4d664d492ff0e42cea4.jpg'];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above




    // BELOW Use forEach Loop to display the data from each of your array's in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
