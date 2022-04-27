const bioPage = () => {
  const $audio = $('<audio>').attr('src', './media/Cat-sound-meow.mp3').attr('id', 'cat').attr('type', 'audio/mpeg')

  $('body').append($audio)
  $('audio#cat')[0].play();
  // setTimeout(function() {
  //   $('#audio-goes-here').empty()
  // }, 4000);
}

const changeFonts = () => {
  console.log('changing fonts');
  const $font = $('<link>').attr('href', 'https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap').attr('rel', "stylesheet").addClass('font')

  $('.font').remove()
  $('head').append($font)
  $('.container').css("font-family", "\'Ms. Madi\'")
}






(() => {
  $('#bio-pic').on('click', bioPage)
  $('.extrude').on('click', changeFonts)
})
