function transpose() {
  var chords = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'],
    text = document.getElementById('original').value.split('');
    transposed = document.getElementById('transposed'),
    steps = parseInt(document.getElementById('steps').value),
    c_len = chords.length;

  for(l in text) {
    if(chords.indexOf(text[l].toUpperCase()) != -1) {
      var change = chords.indexOf(text[l].toUpperCase()) + steps;
      if(change < 0) {
        change += c_len;
      } else if(change >= c_len) {
        change -= c_len;
      }
      text[l] = chords[change];
    }
  }

  transposed.value = text.join('');
}
