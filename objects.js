var playlist = {}

function updatePlaylist(playlist, artist, song){
  playlist[artist]= song;
  
  //object.assign ({}, playlist, {artist:song})
  return (playlist);
}
