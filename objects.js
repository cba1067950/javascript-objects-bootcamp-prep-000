var playlist = {ArtistName: "songTitle"};

 //Object.assign()

function updatePlaylist (list, name, song){
  
  return playlist.assign({}, list,{[name]: song});
}

function removeFromPlaylist(list, name){
  
  return list;
}