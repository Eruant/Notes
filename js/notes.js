var notes;

function Notes() {

  var nav = document.getElementById('nav'),
    t = this;

  this.profile = {
    active: 'default',
    default: {
      background: '#335',
      fontColor: '#ffd',
      fontSize: '20px',
      fontFamily: 'Arial',
      linkColor: '#ccc',
      notes: '#779'
    },
    littleball: {
      background: '#3f3f35',
      fontColor: '#fff',
      fontSize: '20px',
      fontFamily: 'Monaco',
      linkColor: '#92cd9c',
      notes: '#caca7b'
    }
  };

  this.load = function() {
    if(window.localStorage !== null) {
      var profile = JSON.parse(localStorage.getItem('profile'));
      if(profile !== null) {
        t.setProfile(profile.active);
      } else {
        t.setProfile('default');
      }
    } else {
      t.setProfile('default');
    }
  };

  this.save = function() {
    if(window.localStorage !== null) {
      localStorage.setItem('profile',JSON.stringify(t.profile));
    }
  };

  this.menu = function() {
    this.toggleClass(nav, 'hide');
    return false;
  };

  this.page = function(name) {
    switch(name) {
      case 'options':
        var profiles = document.getElementById('profiles');
        for(var p in t.profile) {
          if(p !== 'active') {
            var div = document.createElement('div');
            div.setAttribute('class','item '+p);
            div.style.border = 'solid 1px '+t.profile[p].fontColor;
            div.style.background = t.profile[p].background;
            var html = '<p style="font-family:'+t.profile[p].fontFamily+';'
              + 'font-size:'+t.profile[p].fontSize+';'
              + 'color:'+t.profile[p].fontColor+';'
              + '">'+p+'<br/>Example text, <span style="'
              + 'color:'+t.profile[p].linkColor+';'
              + '">link</span>'
              + ' and <span style="'
              + 'color:'+t.profile[p].notes+';'
              + '">note</span></p>'
            div.innerHTML = html;
            profiles.appendChild(div);
          }
        }
      break;
      default:
        console.log('page not set');
      break;
    }
  };

  this.setProfile = function(name) {
    var body = document.getElementsByTagName('body')[0],
      links = document.getElementsByTagName('a'),
      i;

    body.style.background = this.profile[name].background;
    body.style.color = this.profile[name].fontColor;
    body.style.fontFamily = this.profile[name].fontFamily;
    body.style.fontSize = this.profile[name].fontSize;
    for(i=0;i<links.length;i++) {
      links[i].style.color = this.profile[name].linkColor;
    }

    t.profile.active = name;
    t.save();
  };

  this.toggleClass = function(item, checkClass) {
    var c = item.getAttribute('class').split(' '),
      index = c.indexOf(checkClass);
    index != -1 ? c.splice(index,1) : c.push('hide');
    item.setAttribute('class', (c.length > 0) ? c.join(' ') : '');
  };

  this.setNav = function() {
    var nav = document.getElementById('nav'),
      li = nav.getElementsByTagName('li'),
      i;
    for(i=0;i<li.length;i++) {
      li[i].onclick = function() {
        window.location = this.getElementsByTagName('a')[0].getAttribute('href');
      };
    }
  };

  this.init = function() {
    // load default profile
    this.load();
    this.setNav();
    this.page(current_page);
  };

  this.init();

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
