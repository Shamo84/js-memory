var PrimaScelta = '';
var CoppieTrovate = 0;

document.getElementById('gioca').addEventListener('click',
function() {
  setTimeout(function(){
    document.getElementById('carta16').classList.add('container-animation');
  }, 100 );
  setTimeout(function(){
    document.getElementById('carta15').classList.add('container-animation');
  }, 200 );
  setTimeout(function(){
    document.getElementById('carta14').classList.add('container-animation');
  }, 300 );
  setTimeout(function(){
    document.getElementById('carta13').classList.add('container-animation');
  }, 400 );
  setTimeout(function(){
    document.getElementById('carta12').classList.add('container-animation');
  }, 500 );
  setTimeout(function(){
    document.getElementById('carta11').classList.add('container-animation');
  }, 600 );
  setTimeout(function(){
    document.getElementById('carta10').classList.add('container-animation');
  }, 700 );
  setTimeout(function(){
    document.getElementById('carta9').classList.add('container-animation');
  }, 800 );
  setTimeout(function(){
    document.getElementById('carta8').classList.add('container-animation');
  }, 900 );
  setTimeout(function(){
    document.getElementById('carta7').classList.add('container-animation');
  }, 1000 );
  setTimeout(function(){
    document.getElementById('carta6').classList.add('container-animation');
  }, 1100 );
  setTimeout(function(){
    document.getElementById('carta5').classList.add('container-animation');
  }, 1200 );
  setTimeout(function(){
    document.getElementById('carta4').classList.add('container-animation');
  }, 1300 );
  setTimeout(function(){
    document.getElementById('carta3').classList.add('container-animation');
  }, 1400 );
  setTimeout(function(){
    document.getElementById('carta2').classList.add('container-animation');
  }, 1500 );
  setTimeout(function(){
    document.getElementById('carta1').classList.add('container-animation');
  }, 1600 );
  setTimeout(function(){
    document.getElementById('carta1').classList.add('container-animation-back');
  }, 3000 );
  setTimeout(function(){
    document.getElementById('carta2').classList.add('container-animation-back');
  }, 3100 );
  setTimeout(function(){
    document.getElementById('carta3').classList.add('container-animation-back');
  }, 3200 );
  setTimeout(function(){
    document.getElementById('carta4').classList.add('container-animation-back');
  }, 3300 );
  setTimeout(function(){
    document.getElementById('carta5').classList.add('container-animation-back');
  }, 3400 );
  setTimeout(function(){
    document.getElementById('carta6').classList.add('container-animation-back');
  }, 3500 );
  setTimeout(function(){
    document.getElementById('carta7').classList.add('container-animation-back');
  }, 3600 );
  setTimeout(function(){
    document.getElementById('carta8').classList.add('container-animation-back');
  }, 3700 );
  setTimeout(function(){
    document.getElementById('carta9').classList.add('container-animation-back');
  }, 3800 );
  setTimeout(function(){
    document.getElementById('carta10').classList.add('container-animation-back');
  }, 3900 );
  setTimeout(function(){
    document.getElementById('carta11').classList.add('container-animation-back');
  }, 4000 );
  setTimeout(function(){
    document.getElementById('carta12').classList.add('container-animation-back');
  }, 4100 );
  setTimeout(function(){
    document.getElementById('carta13').classList.add('container-animation-back');
  }, 4200 );
  setTimeout(function(){
    document.getElementById('carta14').classList.add('container-animation-back');
  }, 4300 );
  setTimeout(function(){
    document.getElementById('carta15').classList.add('container-animation-back');
  }, 4400 );
  setTimeout(function(){
    document.getElementById('carta16').classList.add('container-animation-back');
  }, 4500 );
  setTimeout(function(){
    for (var i = 1; i <= 16; i++) {
      document.getElementById('carta' + i).classList.add('order' + Math.floor(Math.random() * 16 + 1));
    }
    document.getElementById('container').classList.add('direction' + Math.floor(Math.random() * 4));
    document.getElementById('container').classList.add('zindexauto');
  }, 7800 );

  }
);

document.getElementById('carta1').addEventListener('click',
function() {
  document.getElementById('carta1').classList.add('unclickable');
  setTimeout(function(){document.getElementById('carta1').classList.add('python')}, 600);
  document.getElementById('carta1').classList.add('rotate');
  if (PrimaScelta == '') {
    PrimaScelta = 'carta1';
  } else {
    document.getElementById('container').classList.remove('zindexauto');
    setTimeout(function(){document.getElementById('container').classList.add('zindexauto');}, 2700);
    if (PrimaScelta == 'carta2') {
      alert('Bravo, hai trovato una coppia!');
      CoppieTrovate += 1;
      setTimeout(function(){
      document.getElementById(PrimaScelta).classList.add('hidden');
      document.getElementById('carta1').classList.add('hidden');
      if (CoppieTrovate == 2) {
        setTimeout(function(){alert('Bravo, hai completato il gioco!');}, 1500);
      }
    }, 2100);
    } else {
      setTimeout(function(){
      document.getElementById(PrimaScelta).classList.remove('unclickable', 'rotate');
      document.getElementById('carta1').classList.remove('unclickable', 'rotate');
    }, 2100);
      setTimeout(function(){
        document.getElementById(PrimaScelta).classList.remove('python', 'java', 'bootstrap', 'csharp', 'css3', 'html5', 'laravel', 'php');
        document.getElementById('carta1').classList.remove('python');
    }, 2700);
    }
    setTimeout(function(){PrimaScelta = '';}, 2700);
    setTimeout(function(){
      document.getElementById('messaggio').innerHTML = 'hai sbagliato devi ricominciare :)';
      document.getElementById('overlay').classList.remove('display-none');
    }, 2700);}
});

document.getElementById('carta2').addEventListener('click',
function() {
  document.getElementById('carta2').classList.add('unclickable');
  setTimeout(function(){document.getElementById('carta2').classList.add('python')}, 600);
  document.getElementById('carta2').classList.add('rotate');
  if (PrimaScelta == '') {
    PrimaScelta = 'carta2';
  } else {
    document.getElementById('container').classList.remove('zindexauto');
    setTimeout(function(){document.getElementById('container').classList.add('zindexauto');}, 2700);
    if (PrimaScelta == 'carta1') {
      setTimeout(function(){
      alert('Bravo, hai trovato una coppia!');
      CoppieTrovate += 1;
      document.getElementById(PrimaScelta).classList.add('hidden');
      document.getElementById('carta2').classList.add('hidden');
      if (CoppieTrovate == 2) {
        setTimeout(function(){alert('Bravo, hai completato il gioco!');}, 1500);
      }
}, 2100);
    } else {
      setTimeout(function(){
      document.getElementById(PrimaScelta).classList.remove('unclickable', 'rotate');
      document.getElementById('carta2').classList.remove('unclickable', 'rotate');
    }, 2100);
      setTimeout(function(){
        document.getElementById(PrimaScelta).classList.remove('python', 'java', 'bootstrap', 'csharp', 'css3', 'html5', 'laravel', 'php');
        document.getElementById('carta2').className = 'carta';
    }, 2700);
    }
    setTimeout(function(){PrimaScelta = '';}, 2700);}
});

document.getElementById('carta3').addEventListener('click',
function() {
  document.getElementById('carta3').classList.add('unclickable');
  setTimeout(function(){document.getElementById('carta3').classList.add('java')}, 600);
  document.getElementById('carta3').classList.add('rotate');
  if (PrimaScelta == '') {
    PrimaScelta = 'carta3';
  } else {
    document.getElementById('container').classList.remove('zindexauto');
    setTimeout(function(){document.getElementById('container').classList.add('zindexauto');}, 2700);
    if (PrimaScelta == 'carta4') {
      setTimeout(function(){
      alert('Bravo, hai trovato una coppia!');
      CoppieTrovate += 1;
      document.getElementById(PrimaScelta).classList.add('hidden');
      document.getElementById('carta3').classList.add('hidden');
      if (CoppieTrovate == 2) {
        setTimeout(function(){alert('Bravo, hai completato il gioco!');}, 1500);
      }
    }, 2100);
    } else {
      setTimeout(function(){
      document.getElementById(PrimaScelta).classList.remove('unclickable', 'rotate');
      document.getElementById('carta3').classList.remove('unclickable', 'rotate');
    }, 2100);
      setTimeout(function(){
        document.getElementById(PrimaScelta).classList.remove('python', 'java', 'bootstrap', 'csharp', 'css3', 'html5', 'laravel', 'php');
        document.getElementById('carta3').className = 'carta';
    }, 2700);
    }
    setTimeout(function(){PrimaScelta = '';}, 2700);}
});
document.getElementById('carta4').addEventListener('click',
function() {
  document.getElementById('carta4').classList.add('unclickable');
  setTimeout(function(){document.getElementById('carta4').classList.add('java')}, 600);
  document.getElementById('carta4').classList.add('rotate');
  if (PrimaScelta == '') {
    PrimaScelta = 'carta4';
  } else {
    document.getElementById('container').classList.remove('zindexauto');
    setTimeout(function(){document.getElementById('container').classList.add('zindexauto');}, 2700);
    if (PrimaScelta == 'carta3') {
      setTimeout(function(){
      alert('Bravo, hai trovato una coppia!');
      CoppieTrovate += 1;
      document.getElementById(PrimaScelta).classList.add('hidden');
      document.getElementById('carta4').classList.add('hidden');
      if (CoppieTrovate == 2) {
        setTimeout(function(){alert('Bravo, hai completato il gioco!');}, 1500);
      }
    }, 2100);
    } else {
      setTimeout(function(){
      document.getElementById(PrimaScelta).classList.remove('unclickable', 'rotate');
      document.getElementById('carta4').classList.remove('unclickable', 'rotate');
    }, 2100);
      setTimeout(function(){
        document.getElementById(PrimaScelta).classList.remove('python', 'java', 'bootstrap', 'csharp', 'css3', 'html5', 'laravel', 'php');
        document.getElementById('carta4').className = 'carta';
    }, 2700);
    }
    setTimeout(function(){PrimaScelta = '';}, 2700);}
});
document.getElementById('carta5').addEventListener('click',
function() {
  document.getElementById('carta5').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'blue';
  } else {
    if (PrimaScelta == 'blue') {
      alert('Bravo, hai trovato una coppia!');
CoppieTrovate += 1;
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta6').addEventListener('click',
function() {
  document.getElementById('carta6').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'blue';
  } else {
    if (PrimaScelta == 'blue') {
      alert('Bravo, hai trovato una coppia!');
CoppieTrovate += 1;
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta7').addEventListener('click',
function() {
  document.getElementById('carta7').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'green';
  } else {
    if (PrimaScelta == 'green') {
      alert('Bravo, hai trovato una coppia!');
CoppieTrovate += 1;
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta8').addEventListener('click',
function() {
  document.getElementById('carta8').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'green';
  } else {
    if (PrimaScelta == 'green') {
      alert('Bravo, hai trovato una coppia!');
CoppieTrovate += 1;
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta9').addEventListener('click',
function() {
  document.getElementById('carta9').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'pink';
  } else {
    if (PrimaScelta == 'pink') {
      alert('Bravo, hai trovato una coppia!');
CoppieTrovate += 1;
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta10').addEventListener('click',
function() {
  document.getElementById('carta10').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'pink';
  } else {
    if (PrimaScelta == 'pink') {
      alert('Bravo, hai trovato una coppia!');
CoppieTrovate += 1;
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta11').addEventListener('click',
function() {
  document.getElementById('carta11').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'purple';
  } else {
    if (PrimaScelta == 'purple') {
      alert('Bravo, hai trovato una coppia!');
CoppieTrovate += 1;
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta12').addEventListener('click',
function() {
  document.getElementById('carta12').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'purple';
  } else {
    if (PrimaScelta == 'purple') {
      alert('Bravo, hai trovato una coppia!');
CoppieTrovate += 1;
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta13').addEventListener('click',
function() {
  document.getElementById('carta13').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'lightgreen';
  } else {
    if (PrimaScelta == 'lightgreen') {
      alert('Bravo, hai trovato una coppia!');
CoppieTrovate += 1;
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta14').addEventListener('click',
function() {
  document.getElementById('carta14').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'lightgreen';
  } else {
    if (PrimaScelta == 'lightgreen') {
      alert('Bravo, hai trovato una coppia!');
CoppieTrovate += 1;
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta15').addEventListener('click',
function() {
  document.getElementById('carta15').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'beige';
  } else {
    if (PrimaScelta == 'beige') {
      alert('Bravo, hai trovato una coppia!');
CoppieTrovate += 1;
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta16').addEventListener('click',
function() {
  document.getElementById('carta16').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'beige';
  } else {
    if (PrimaScelta == 'beige') {
      alert('Bravo, hai trovato una coppia!');
CoppieTrovate += 1;
    } else {
      alert('riprova');
    }
  }
});
