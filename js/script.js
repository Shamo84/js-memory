var PrimaScelta = '';
var CoppieTrovate = 0;

document.getElementById('gioca').addEventListener('click',
function() {
for (var i = 1; i <= 16; i++) {
  document.getElementById('carta' + i).classList.add('order' + Math.floor(Math.random() * 16 + 1));
}
document.getElementById('container').classList.add('direction' + Math.floor(Math.random() * 2));
document.getElementById('carta1').classList.add('container-animation');
document.getElementById('carta2').classList.add('container-animation');
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
        document.getElementById(PrimaScelta).className = 'carta';
        document.getElementById('carta1').className = 'carta';
    }, 2700);
    }
    setTimeout(function(){PrimaScelta = '';}, 2700);}
});

document.getElementById('carta2').addEventListener('click',
function() {
  document.getElementById('carta2').classList.add('unclickable');
  setTimeout(function(){document.getElementById('carta2').classList.add('python')}, 600);
  document.getElementById('carta2').classList.add('rotate');
  if (PrimaScelta == '') {
    PrimaScelta = 'carta2';
  } else {
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
        document.getElementById(PrimaScelta).className = 'carta';
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
        document.getElementById(PrimaScelta).className = 'carta';
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
        document.getElementById(PrimaScelta).className = 'carta';
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
