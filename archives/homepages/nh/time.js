youbi_kanji = ['日','月','火','水','木','金','土'];

clock = () => {
  hiduke = new Date();
  tosi = hiduke.getUTCFullYear();
  getu = hiduke.getUTCMonth() + 1;

  niti = hiduke.getUTCDate();
  jikan = hiduke.getHours();
  hun = hiduke.getMinutes();
  
  youbi = youbi_kanji[ hiduke.getDay() ];

  if (jikan >= 12) $(".clock").html(`午後${jikan}時${hun}分`);
  else $(".clock").html(`午前${jikan}時${hun}分`);

  $(".date").html(`${tosi}年${getu}月${niti}日（${youbi}）`);
}

clock(); setInterval(() => {clock()}, 10000);