import '../styles/main.scss'

let hoverImg = document.querySelectorAll('.projects-list__image')

for (var i = 0; i < hoverImg.length; i++) {
  hoverImg[i].addEventListener('mouseenter', function () {
    var gifImage = this.querySelector('img')
    var gifImageSrc = gifImage.dataset.gifImage
    gifImage.src = gifImageSrc
  })

  hoverImg[i].addEventListener('mouseleave', function () {
    var gifImage = this.querySelector('img')
    var coverSrc = gifImage.dataset.image
    gifImage.src = coverSrc
  })
}

// document.querySelector(document).addEventListener(
//   {
//     mouseenter: function () {
//       var gifImage = document.querySelector(this).querySelector('img'),
//         gifImageSrc = gifImage.data('gif-image')
//       gifImage.attr('src', gifImageSrc)
//     },
//     mouseleave: function () {
//       var gifImage = document.querySelector(this).querySelector('img'),
//         coverSrc = gifImage.data('image')
//       gifImage.attr('src', coverSrc)
//     },
//   },
//   '[data-gif-trigger]'
// )
