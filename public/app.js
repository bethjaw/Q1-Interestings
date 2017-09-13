console.log('hey')
$(document).ready(function(){

var catForm = document.getElementById('categoryForm')

var main = document.getElementById('mainDiv')

catForm.addEventListener('submit', function(event){
  event.preventDefault()
  // console.log(event)

  var category = event.target.elements.category.value
  // console.log(category)

  var catURL = 'https://newsapi.org/v1/sources?language=en&apiKey=8ff32c3c49ce4b68bc809217451302ef&category=' + category
  // console.log(catURL)

  fetch(catURL)
  .then(function(response){
    return response.json()
    .then(function(catData){
      console.log(catData)

      main.innerHTML = ''

      for(var i=0; i < catData.sources.length; i++){
        var catName = document.createElement('h2')
          catName.className =  "subtitle"
        var catDescrip = document.createElement('p')
        var catLink = document.createElement('a')
        var catDiv = document.createElement('div')
          catDiv.className = "column articleDiv"

        var favSpan = document.createElement('span')
        var favI = document.createElement('i')
        var favLink = document.createElement('a')

        var catContent = document.getElementsByClassName('is-three-quarters')[0]

          catName.innerText = catData.sources[i].name
          catDescrip.innerText = catData.sources[i].description
          catLink.innerText = "Browse Site"
          catLink.setAttribute('href', catData.sources[i].url)
          catLink.target = "_blank"
          catLink.className = 'button is-primary is-outlined'


        var tweetLink = document.createElement('a')
          tweetLink.setAttribute('href', "https://twitter.com/intent/tweet?text=" + catLink)
          catLink.target = "_blank"
        var tweetI = document.createElement('i')
          tweetI.className = "icon is-small fa fa-lg fa-twitter"
          tweetI.style = "color: #55acee;"
        var tweetSpan = document.createElement('span')
          tweetSpan.className = 'icon is-small'

          tweetLink.append(tweetSpan, tweetI)


        var faceA = document.createElement('a')
          faceA.setAttribute('href', "https://www.facebook.com/sharer/sharer.php?u=" + catLink)
          faceA.target = "_blank"
        var faceSpan = document.createElement('span')
          faceSpan.className = 'icon is-small'

        var faceI = document.createElement('i')
          faceI.className = "icon fa fa-lg fa-facebook-square"
          faceI.style = "color: #55acee;"

          faceA.append(faceSpan, faceI)

        var linkedA = document.createElement('a')
          linkedA.setAttribute('href', "https://www.linkedin.com/shareArticle?mini=true&url=" + catLink)
          linkedA.target = "_blank"
        var linkedSpan = document.createElement('span')
          linkedSpan.className = 'icon is-small'
        var linkedI = document.createElement('i')
          linkedI.className = "icon fa fa-lg fa-linkedin"
          linkedI.style = "color: #55acee;"

          linkedA.append(linkedSpan, linkedI)


        var socialDiv = document.createElement('div')
        socialDiv.className = 'canShare'
        socialDiv.append(tweetLink, faceA, linkedA)

        favSpan.className = "icon is-small"
        favI.className = "fa fa-heart"
        // favLink.setAttribute('href', 'favs.html')
        favLink.innerText = "Add to Favorites"
        favLink.className = 'button is-danger is-outlined'
        favLink.append(favSpan, favI)
        favLink.id = 'loveBtn'

        catDiv.append(catName, catDescrip, catLink, favLink, socialDiv)
        catContent.append(catDiv)







      }

    })

  })

})




var sourForm = document.getElementById('sourceForm')

sourForm.addEventListener('submit', function(event){
  event.preventDefault()
  // console.log(event)

  var sourceInput = event.target.elements.source.value
  // console.log(sourceInput)

  var sourceURL = 'https://newsapi.org/v1/articles?apiKey=8ff32c3c49ce4b68bc809217451302ef&source=' + sourceInput
  // console.log(sourceURL)

  fetch(sourceURL)
  .then(function(response){
    return response.json()
    .then(function(sourceData){
      console.log(sourceData)

      main.innerHTML = ''


      for(var i = 0; i < sourceData.articles.length; i++){
        var artTitle = document.createElement('h2')
        artTitle.className =  "subtitle"
        // var artAuthor = document.createElement('p')
        var artDescrip = document.createElement('p')
        var artLink = document.createElement('a')

        var artDiv = document.createElement('div')
        artDiv.className = "column articleDiv"

        var favSpan = document.createElement('span')
        var favI = document.createElement('i')
        var favLink = document.createElement('a')

        var artContent = document.getElementsByClassName('is-three-quarters')[0]

        artTitle.innerText = sourceData.articles[i].title
        artDescrip.innerText = sourceData.articles[i].description

        artLink.innerText = "Read More"
        artLink.setAttribute('href', sourceData.articles[i].url)
        artLink.target = "_blank"
        artLink.className = 'button is-primary is-outlined'

        favSpan.className = "icon is-small"
        favI.className = "fa fa-heart"
        favLink.innerText = "Add to Favorites"
        favLink.className = 'button is-danger is-outlined'
        favLink.append(favSpan, favI)

        artDiv.append(artTitle, artDescrip, artLink, favLink)
        artContent.append(artDiv)


      }
    })
  })

})



$('.toggleBtn').click(function() {
  event.preventDefault()
  // console.log('clicked')

      $('#tweets').toggleClass('hide')
})




// TWITTER STUFFFFF

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));


})
