const bioPage = () => {
  // const $audio = $('<audio>').attr('src', './media/Cat-sound-meow.mp3').attr('id', 'cat').attr('type', 'audio/mpeg')
  console.log('meow');
  // $('body').append($audio)
  $('audio#cat')[0].play();
  // setTimeout(function() {
  //   $('#audio-goes-here').empty()
  // }, 4000);
}

const fonts = [
  {
    url: 'https://fonts.googleapis.com/css2?family=Questrial&display=swap',
    fontFamily: '\'Questrial\', sans-serif'
  },
  {
    url: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,500&display=swap',
    fontFamily: '\'Lora\', serif'
  },
  {
    url: 'https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap',
    fontFamily: "\'Ms. Madi\', cursive"
  },
  {
    url: 'https://fonts.googleapis.com/css2?family=Anton&display=swap',
    fontFamily: '\'Anton\', sans-serif'
  },
  {
    url: 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap',
    fontFamily: '\'Pacifico\', cursive'
  },
  {
    url: 'https://fonts.googleapis.com/css2?family=Righteous&display=swap',
    fontFamily: '\'Righteous\', cursive'
  }
]

let fontChoice = 0

const changeFonts = () => {
  console.log(fontChoice);
  console.log('changing fonts');
  const $font = $('<link>').attr('href', fonts[fontChoice].url).attr('rel', "stylesheet").addClass('font')

  $('.font').remove()
  $('head').append($font)
  $('.container').css("font-family", fonts[fontChoice].fontFamily)
  if (fontChoice < fonts.length) {
    fontChoice++
  } else {
    fontChoice = 0
  }
}

let currentImgIndex = 0

let numOfImages = $('.carousel-images').children().length-1


$(() => {
  $('#bio-pic').hover(bioPage)
  $('.extrude').on('click', changeFonts)
  $('.next').on('click', () => {
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
    if (currentImgIndex < numOfImages) {
      currentImgIndex++
    } else {
      currentImgIndex = 0
    }
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
  })
})
