var playlist = {}
var artistName;
var songTitle;

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle;
  playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.[artistName];
  playlist;
}
