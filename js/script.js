var PrimaScelta = '';
var SecondaScelta = '';
var CoppieTrovate = 0;

document.getElementById('carta1').addEventListener('click',
function() {
  document.getElementById('carta1').classList.add('unclickable', 'rotate');
  setTimeout(function(){document.getElementById('carta1').classList.add('python')}, 600);
  if (PrimaScelta == '') {
    PrimaScelta = 'carta1';
  }
  else {
    SecondaScelta = 'carta1';
        setTimeout(function(){document.getElementById('container').classList.add('zindexauto');}, 2700);
    if (PrimaScelta == 'carta2') {
      CoppieTrovate += 1;
      setTimeout(function(){
      document.getElementById(PrimaScelta).classList.add('transparent');
      document.getElementById('carta1').classList.add('transparent');
        if (CoppieTrovate == 2) {
          setTimeout(function(){
            document.getElementById('messaggio').innerHTML = 'Hai completato il gioco!!';
            document.getElementById('overlay').classList.remove('display-none');
            document.getElementById('gioca').classList.add('display-none');
            document.getElementById('ok').classList.remove('display-none');
          }, 1500);
        }
        else {
          setTimeout(function(){PrimaScelta = '';}, 2200);
          setTimeout(function(){
            document.getElementById('messaggio').innerHTML = 'Bravo, hai trovato una coppia!';
            document.getElementById('overlay').classList.remove('display-none');
            document.getElementById('gioca').classList.add('display-none');
          }, 1000);
          setTimeout(function(){document.getElementById('overlay').classList.add('display-none');}, 2500);
        }
      }, 2100);
    }
    else {
      setTimeout(function(){
        document.getElementById('messaggio').innerHTML = 'hai sbagliato devi ricominciare :)';
        document.getElementById('overlay').classList.remove('display-none');
        document.getElementById('gioca').classList.add('display-none');
        document.getElementById('ok').classList.remove('display-none');
      }, 2700);
    }
  }
});

document.getElementById('carta2').addEventListener('click',
function() {
  document.getElementById('carta2').classList.add('unclickable', 'rotate');
  setTimeout(function(){document.getElementById('carta2').classList.add('python')}, 600);
  if (PrimaScelta == '') {
    PrimaScelta = 'carta2';
  }
  else {
    SecondaScelta = 'carta2';
        setTimeout(function(){document.getElementById('container').classList.add('zindexauto');}, 2700);
    if (PrimaScelta == 'carta1') {
      CoppieTrovate += 1;
      setTimeout(function(){
        document.getElementById('messaggio').innerHTML = 'Bravo, hai trovato una coppia!';
        document.getElementById('overlay').classList.remove('display-none');
        document.getElementById('gioca').classList.add('display-none');
      }, 1500);
      setTimeout(function(){document.getElementById('overlay').classList.add('display-none');}, 3000);
      setTimeout(function(){
      document.getElementById(PrimaScelta).classList.add('transparent');
      document.getElementById('carta2').classList.add('transparent');
        if (CoppieTrovate == 2) {
          setTimeout(function(){alert('Bravo, hai completato il gioco!');}, 1500);
        }
      }, 2100);
      setTimeout(function(){PrimaScelta = '';}, 2700);
    }
    else {
      setTimeout(function(){
        document.getElementById('messaggio').innerHTML = 'hai sbagliato devi ricominciare :)';
        document.getElementById('overlay').classList.remove('display-none');
        document.getElementById('gioca').classList.add('display-none');
        document.getElementById('ok').classList.remove('display-none');
      }, 2700);
    }
  }
});
document.getElementById('carta3').addEventListener('click',
function() {
  document.getElementById('carta3').classList.add('unclickable', 'rotate');
  setTimeout(function(){document.getElementById('carta3').classList.add('java')}, 600);
  if (PrimaScelta == '') {
    PrimaScelta = 'carta3';
  }
  else {
    SecondaScelta = 'carta3';
        setTimeout(function(){document.getElementById('container').classList.add('zindexauto');}, 2700);
    if (PrimaScelta == 'carta4') {
      CoppieTrovate += 1;
      setTimeout(function(){
        document.getElementById('messaggio').innerHTML = 'Bravo, hai trovato una coppia!';
        document.getElementById('overlay').classList.remove('display-none');
        document.getElementById('gioca').classList.add('display-none');
      }, 1500);
      setTimeout(function(){document.getElementById('overlay').classList.add('display-none');}, 3000);
      setTimeout(function(){
      document.getElementById(PrimaScelta).classList.add('transparent');
      document.getElementById('carta3').classList.add('transparent');
        if (CoppieTrovate == 2) {
          setTimeout(function(){alert('Bravo, hai completato il gioco!');}, 1500);
        }
      }, 2100);
      setTimeout(function(){PrimaScelta = '';}, 2700);

    }
    else {
      setTimeout(function(){
        document.getElementById('messaggio').innerHTML = 'hai sbagliato devi ricominciare :)';
        document.getElementById('overlay').classList.remove('display-none');
        document.getElementById('gioca').classList.add('display-none');
        document.getElementById('ok').classList.remove('display-none');
      }, 2700);
    }
  }
});
document.getElementById('carta4').addEventListener('click',
function() {
  document.getElementById('carta4').classList.add('unclickable', 'rotate');
  setTimeout(function(){document.getElementById('carta4').classList.add('java')}, 600);
  if (PrimaScelta == '') {
    PrimaScelta = 'carta4';
  }
  else {
    SecondaScelta = 'carta4';
        setTimeout(function(){document.getElementById('container').classList.add('zindexauto');}, 2700);
    if (PrimaScelta == 'carta3') {
      CoppieTrovate += 1;
      setTimeout(function(){
        document.getElementById('messaggio').innerHTML = 'Bravo, hai trovato una coppia!';
        document.getElementById('overlay').classList.remove('display-none');
        document.getElementById('gioca').classList.add('display-none');
      }, 1500);
      setTimeout(function(){document.getElementById('overlay').classList.add('display-none');}, 3000);
      setTimeout(function(){
      document.getElementById(PrimaScelta).classList.add('transparent');
      document.getElementById('carta4').classList.add('transparent');
        if (CoppieTrovate == 2) {
          setTimeout(function(){alert('Bravo, hai completato il gioco!');}, 1500);
        }
      }, 2100);
      setTimeout(function(){PrimaScelta = '';}, 2700);

    }
    else {
      setTimeout(function(){
        document.getElementById('messaggio').innerHTML = 'hai sbagliato devi ricominciare :)';
        document.getElementById('overlay').classList.remove('display-none');
        document.getElementById('gioca').classList.add('display-none');
        document.getElementById('ok').classList.remove('display-none');
      }, 2700);
    }
  }
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

// Gioca
document.getElementById('gioca').addEventListener('click',
function() {
  document.getElementById('overlay').classList.add('display-none');
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
      document.getElementById('carta' + i).classList.add('unclickable', 'rotate');
    }
    document.getElementById('container').classList.add('direction' + Math.floor(Math.random() * 4));
  }, 7800 );
  setTimeout(function(){
    document.getElementById('carta1').classList.add('python');
    document.getElementById('carta2').classList.add('python');
    document.getElementById('carta3').classList.add('java');
    document.getElementById('carta4').classList.add('java');
    document.getElementById('carta5').classList.add('php');
    document.getElementById('carta6').classList.add('php');
    document.getElementById('carta7').classList.add('laravel');
    document.getElementById('carta8').classList.add('laravel');
    document.getElementById('carta9').classList.add('html5');
    document.getElementById('carta10').classList.add('html5');
    document.getElementById('carta11').classList.add('css3');
    document.getElementById('carta12').classList.add('css3');
    document.getElementById('carta13').classList.add('csharp');
    document.getElementById('carta14').classList.add('csharp');
    document.getElementById('carta15').classList.add('bootstrap');
    document.getElementById('carta16').classList.add('bootstrap');
  }, 8400 );
  setTimeout(function(){
    for (var i = 1; i <= 16; i++) {
      document.getElementById('carta' + i).classList.remove('unclickable', 'rotate');
    }
  }, 11400 );
  setTimeout(function(){
    document.getElementById('carta1').classList.remove('python');
    document.getElementById('carta2').classList.remove('python');
    document.getElementById('carta3').classList.remove('java');
    document.getElementById('carta4').classList.remove('java');
    document.getElementById('carta5').classList.remove('php');
    document.getElementById('carta6').classList.remove('php');
    document.getElementById('carta7').classList.remove('laravel');
    document.getElementById('carta8').classList.remove('laravel');
    document.getElementById('carta9').classList.remove('html5');
    document.getElementById('carta10').classList.remove('html5');
    document.getElementById('carta11').classList.remove('css3');
    document.getElementById('carta12').classList.remove('css3');
    document.getElementById('carta13').classList.remove('csharp');
    document.getElementById('carta14').classList.remove('csharp');
    document.getElementById('carta15').classList.remove('bootstrap');
    document.getElementById('carta16').classList.remove('bootstrap');
    document.getElementById('container').classList.add('zindexauto');
  }, 12000 );
});
// OK
document.getElementById('ok').addEventListener('click',
  function() {
    for (var i = 1; i <= 16; i++) {
      document.getElementById('carta' + i).classList.remove("transparent");
    }
    document.getElementById('overlay').classList.add('display-none');
    document.getElementById(PrimaScelta).classList.remove('unclickable', 'rotate');
    document.getElementById(SecondaScelta).classList.remove('unclickable', 'rotate');
    setTimeout(function(){
      document.getElementById(PrimaScelta).classList.remove('python', 'java', 'bootstrap', 'csharp', 'css3', 'html5', 'laravel', 'php');
      document.getElementById(SecondaScelta).classList.remove('python', 'java', 'bootstrap', 'csharp', 'css3', 'html5', 'laravel', 'php');
      PrimaScelta = '';
      SecondaScelta = '';
    }, 600);
    setTimeout(function(){
      for (var i = 1; i <= 16; i++) {
        document.getElementById('carta' + i).className = "carta";
      }
      document.getElementById('container').className = "container";
      document.getElementById('messaggio').innerHTML = "Benvenuto a Memory, sei pronto?";
      document.getElementById('gioca').classList.remove('display-none');
      document.getElementById('ok').classList.add('display-none');
      document.getElementById('overlay').classList.remove('display-none');
    }, 2000);
});
