console.log('hey')

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

        favSpan.className = "icon is-small"
        favI.className = "fa fa-heart"
        // favLink.className = "level-item"
        favLink.innerText = "Add to Favorites"
        favLink.className = 'button is-primary is-outlined'
        favLink.append(favSpan, favI)

        catDiv.append(catName, catDescrip, catLink, favLink)
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

        var artContent = document.getElementsByClassName('is-three-quarters')[0]

        artTitle.innerText = sourceData.articles[i].title
        // artAuthor.innerText = sourceData.articles[i].author
        artDescrip.innerText = sourceData.articles[i].description

        artLink.innerText = "Read More"
        artLink.setAttribute('href', sourceData.articles[i].url)
        artLink.target = "_blank"
        artLink.className = 'button is-primary is-outlined'


        artDiv.append(artTitle, artDescrip, artLink)

        artContent.append(artDiv)

      }
    })
  })

})




// window.twttr = (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0],
//     t = window.twttr || {};
//   if (d.getElementById(id)) return t;
//   js = d.createElement(s);
//   js.id = id;
//   js.src = "https://platform.twitter.com/widgets.js";
//   fjs.parentNode.insertBefore(js, fjs);
//
//   t._e = [];
//   t.ready = function(f) {
//     t._e.push(f);
//   };
//
//   return t;
// }(document, "script", "twitter-wjs"));
