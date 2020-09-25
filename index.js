var english = {
  article:"Hello, I'm Cihat. I am a Frontend Developer at <strong class='strong'> <a href='https://gaissecurity.com'>@gaissecurity</a></strong>. I graduated from Gazi University, Computer Engineering.('20). I am constantly trying to learn new things. I share my personal works on github account. I love listening to instrumental music. Sometimes I play the <strong class='kalimba'>kalimba</strong> as a amator "
}
var turkish = {
  article: "Merhaba, Ben Cihat. Şu an Frontend Developer olarak <strong class='strong'> <a href='https://gaissecurity.com'>@gaissecurity</a></strong>'de çalışıyorum. Gazi Üniversitesi Bilgisayar Mühendisliği mezunuyum('20). Sürekli yeni şeyler öğrenmek için çabalıyorum. Kişisel çalışmalarımı Github hesabımda paylaşıyorum. Enstrümantal müzik dinlemeyi seviyorum. Amatör olarak <strong class='kalimba'>kalimba</strong> çalıyorum."
}
var translator = new Translator();
var en = translator.add('en', english)  
var tr = translator.add('tr', turkish)
var langs = document.getElementsByClassName('toggle')
for(var i = 0; i<langs.length; i++){
langs[i].addEventListener( 'click', function() {
  var lang = this.value; 
  if(lang==='TR'){
    en.translatePageTo('tr');
  } 
  else if(lang==='EN'){
    en.translatePageTo('en');
  }
  else {
    en.translatePageTo('tr');
  }
});
}