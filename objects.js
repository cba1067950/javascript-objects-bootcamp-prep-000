var playlist = {ArtistName: "songTitle"};

 //Object.assign()

function updatePlaylist (playlist, name, song){
  playlist[name] = song;
  return playlist;
}

function removeFromPlaylist(playlist, name){
  delete playlist[name];
  return playlist;
}