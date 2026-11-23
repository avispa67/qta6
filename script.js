(function(){
  var $=function(i){return document.getElementById(i)};
  var ov=$('overlay'),pf=$('pfill'),mt=$('mtext'),mp=$('mpct'),mc=$('mclose'),mtitle=$('mtitle'),timer=null,tries=0;

  // fecha de lanzamiento "falsa" siempre = hoy
  $('rd').textContent=new Date().toLocaleDateString('es-ES')+' (hoy, tú sabe)';

  // contador de visitas
  var visits=Math.floor(100000+Math.random()*800000);
  function showV(){var s=String(visits);while(s.length<6)s='0'+s;$('counter').textContent=s}
  showV();setInterval(function(){visits+=Math.floor(Math.random()*3);showV()},2000);

  // usuarios online y descargas hoy
  var on=1337;setInterval(function(){on+=Math.floor(Math.random()*21)-10;$('online').textContent=on.toLocaleString('en-US')},1500);
  var td=48213;setInterval(function(){td+=Math.floor(Math.random()*5);$('todayDl').textContent=td.toLocaleString('en-US')},1200);

  // tamaño de archivo cambiante
  var sizes=['78.4 GB','78.4 GB','0.004 KB (en realidad)','78.4 GB','2 pilas AAA'],k=0;
  setInterval(function(){k++;$('sz').textContent=sizes[k%sizes.length]},2500);

  // cuenta atrás falsa que se reinicia
  var secs=600;setInterval(function(){secs--;if(secs<0)secs=600;var m=Math.floor(secs/60),s=secs%60;$('cd').textContent=(m<10?'0':'')+m+':'+(s<10?'0':'')+s},1000);

  // últimas descargas falsas
  var names=['Pablito','Kevin','El Dominicano','Yeison','xX_Goku_Xx','Mamá de Kevin','Luisito','Carlos'],
      places=['Santo Domingo','Badalona','Santiago','Madrid','Miami','Bogotá','México DF','Barcelona'],
      devs=['una Casio fx-350EX','Windows XP','una nevera Samsung','una tostadora','Windows 7','un Nokia 3310'],
      list=[];
  function addLast(){
    var r=function(a){return a[Math.floor(Math.random()*a.length)]};
    list.unshift('<b>'+r(names)+'</b> ('+r(places)+')<br>en '+r(devs)+'<hr>');
    if(list.length>4)list.pop();$('last').innerHTML=list.join('');
  }
  addLast();addLast();addLast();setInterval(addLast,3000);

  // modal de descarga falsa
  var msgs=['Verificando que eres humano…','Conectando con servidor de Rockstar (jajaja)…','Craqueando cifrado con una Casio…','Calculando raíz cuadrada de GTA…','Pidiendo permiso a la nevera Samsung…','Buscando la tecla SHIFT…'];
  function start(){
    clearInterval(timer);tries++;var p=0;
    ov.className='on';mc.style.display='none';mtitle.textContent='Windows Download Manager';pf.style.width='0';
    timer=setInterval(function(){
      p+=p<90?Math.random()*7:.4;
      if(p>=99){p=99;clearInterval(timer);
        mtitle.textContent='Error crítico 0x000CASIO';
        mt.innerHTML='😂 <b>TE CACHAMOS</b><br>99%… Math ERROR.<br>Esto es un meme, no hay descarga. Espera al lanzamiento oficial y no descargues cosas raras.<br><span class="small">Intento número '+tries+(tries>2?' (ya déjalo, rey)':'')+'</span>';
        mp.textContent='99%';mc.style.display='inline-block';
      }else{mt.textContent=msgs[Math.floor(p/17)%msgs.length];mp.textContent=Math.floor(p)+'%'}
      pf.style.width=p+'%';
    },300);
  }
  [].forEach.call(document.querySelectorAll('.dl'),function(b){b.addEventListener('click',function(e){e.preventDefault();start()})});
  mc.addEventListener('click',function(){ov.className='';clearInterval(timer)});
  [].forEach.call(document.querySelectorAll('a[href="#"]'),function(a){if(!a.classList.contains('dl'))a.addEventListener('click',function(e){e.preventDefault()})});

  // popup "eres el visitante 1,000,000"
  setTimeout(function(){if(ov.className!=='on'){alert('¡FELICIDADES! Eres el visitante 1,000,000.\nHas ganado un iPhone 4 y una calculadora Casio fx-350EX.\n(Pulsa Aceptar para reclamar tu premio)');start()}},9000);

  // comentarios
  var cc=5;
  $('cs').addEventListener('click',function(){
    var n=$('cn').value.trim()||'Anónimo',t=$('ct').value.trim();
    if(!t){alert('Escribe algo, rey.');return}
    var d=document.createElement('div');d.className='cm';
    var b=document.createElement('b');b.textContent=n;
    var s=document.createElement('span');s.className='small';s.textContent=' justo ahora';
    d.appendChild(b);d.appendChild(s);d.appendChild(document.createElement('br'));d.appendChild(document.createTextNode(t));
    $('clist').insertBefore(d,$('clist').firstChild);
    $('cc').textContent=++cc;$('cn').value='';$('ct').value='';
  });
})();
