var notes;

function Notes() {
  
  var nav = document.getElementById('nav');

  this.profile = {
    default: {
      background: '#335',
      fontColor: '#ffd',
      fontSize: '20px',
      fontFamily: 'Arial'
    }
  };

  this.menu = function() {
    this.toggleClass(nav, 'hide');
    return false;
  };

  this.setProfile = function(name) {
    var body = document.getElementsByTagName('body')[0];
    
    body.style.background = this.profile[name].background;
    body.style.color = this.profile[name].fontColor;
    body.style.fontFamily = this.profile[name].fontFamily;
    body.style.fontSize = this.profile[name].fontSize; // this doesn't work
  };

  this.toggleClass = function(item, checkClass) {
    var c = item.getAttribute('class').split(' '),
      index = c.indexOf(checkClass);
    index != -1 ? c.splice(index,1) : c.push('hide');
    item.setAttribute('class', (c.length > 0) ? c.join(' ') : '');
  };

}

window.onload = function() {
  notes = new Notes();
};

/*
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
*/
