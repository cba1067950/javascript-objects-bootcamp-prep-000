var playlist = {Sia: ['Cheap Thrills']}

 //Object.assign()

function updatePlaylist (list, name, song){
  //list.assign({Artist: 'some ditty'});
  playlist.assign({}, list, {[name]: song});
  return list;
}

function removeFromPlaylist(list, name){
  
  return list;
}