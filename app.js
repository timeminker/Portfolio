const bioPage = () => {
  // const $audio = $('<audio>').attr('src', './media/Cat-sound-meow.mp3').attr('id', 'cat').attr('type', 'audio/mpeg')
  console.log('meow');
  // $('body').append($audio)
  $('audio#cat')[0].play();
  // setTimeout(function() {
  //   $('#audio-goes-here').empty()
  // }, 4000);
}

const projectModal = () => {
  const $div = $('<div>').attr('id', 'modal').append($('<h1>').text('Coming Soon!').css('font-size', '24pt')).append($('<button>').attr('id', 'modal-button').text('Close'))
  $('.modal-here').append($div)
  $div.css('z-index', '1')
  $div.css('top', '50%')
  $div.css('left', '41%')
  $div.css('position', 'fixed')
  $div.css('text-align', 'center')
  $div.css('background', '#58E')
  $div.css('width', '500px')
  $div.css('max-width', '100%')
  $div.css('height', '400px')
  $div.css('max-height', '100%')
}

const closeModal = () => {
  $('#modal').remove()
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
  $('body').css("font-family", fonts[fontChoice].fontFamily)
  $('button').css("font-family", fonts[fontChoice].fontFamily)
  if (fontChoice < fonts.length-1) {
    fontChoice++
  } else {
    fontChoice = 0
  }
}

// let currentImgIndex = 0
//
// let numOfImages = $('.carousel-images').children().length-1


$(() => {
  let currentImgIndex = 0
  let numOfImages = $('.carousel-images').children().length-1

  $('.modal-here').on('click', '#modal-button', closeModal)
  $('.project-image').on('click', projectModal)
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

  $('.previous').on('click', () => {
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
    if (currentImgIndex > 0) {
      currentImgIndex--
    } else {
      currentImgIndex = numOfImages
    }
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
  })
})
