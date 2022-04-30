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
  const $blackout = $('<div>').attr('id', 'blackout')
  $('.modal-here').append($div).append($blackout)
  $div.css('z-index', '110')
  $div.css('top', '50%')
  $div.css('left', '50%')
  $div.css('position', 'fixed').css('margin-left', '-250px').css('margin-top', '-200px')
  $div.css('text-align', 'center')
  $div.css('background', '#58E').css('border-radius', '12px')
  $div.css('width', '500px')
  $div.css('max-width', '100%')
  $div.css('height', '400px')
  $div.css('max-height', '100%')
  $blackout.css('z-index', '100').css('background', 'orange').css('opacity', '0.5').css('position', 'fixed').css('top', '0').css('left', '0').css('width', '100%').css('height', '100%')
}

const closeModal = () => {
  $('.modal-here').empty()
}

const closeEmail = () => {
  $('.email-here').empty()
}

const sendEmail = () => {
  const $emailContainer = $('<div>').addClass('email-container').append($('<form>').attr('action', 'action_page.php').attr('method', 'post'))
  const $name = $('<label>').attr('for', 'name').text('Name')
  const $input = $('<input>').attr('type', 'text').attr('id', 'name').attr('name', 'fullname').attr('placeholder', 'Your Name')
  const $message = $('<label>').attr('for', 'subject').text('Your Message')
  const $textArea = $('<textarea>').attr('id', 'subject').attr('name', 'subject').attr('placeholder', 'Say something nice!').attr('style', 'height:200px')
  const $submit = $('<input>').attr('type', 'submit').attr('value', 'Submit').attr('id', 'submit-message')
  const $blackout = $('<div>').attr('id', 'blackout')

  $('.email-here').append($emailContainer)
  $emailContainer.append($name, $input, $message, $textArea, $submit)
  $('.email-here').append($blackout)
  $emailContainer.css('z-index', '110')
  $emailContainer.css('top', '50%')
  $emailContainer.css('left', '50%').css('display', 'flex').css('flex-direction', 'column')
  $emailContainer.css('position', 'fixed').css('margin-left', '-250px').css('margin-top', '-200px')
  $emailContainer.css('text-align', 'center')
  $emailContainer.css('background', '#58E').css('border-radius', '12px')
  $emailContainer.css('width', '500px')
  $emailContainer.css('max-width', '100%')
  $emailContainer.css('height', '400px')
  $emailContainer.css('max-height', '100%')
  $blackout.css('z-index', '100').css('background', 'orange').css('opacity', '0.5').css('position', 'fixed').css('top', '0').css('left', '0').css('width', '100%').css('height', '100%')

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

  $('.email-here').on('click', '#submit-message', closeEmail)
  $('#email-button').on('click', sendEmail)
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
