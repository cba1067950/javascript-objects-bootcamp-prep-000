var playlist = {ArtistName: "songTitle"};

 //Object.assign()

function updatePlaylist (list, name, song){
  list[name] = song;
  return playlist;
}

function removeFromPlaylist(playlist, name){
  delete playlist[name];
  return playlist;
}