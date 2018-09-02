var playlist = {}
const artistName;
const songTitle;

function updatePlaylist(playlist, artistName, songTitle){
  playlist[(artistName)]=(songTitle);
  playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  playlist;
}
