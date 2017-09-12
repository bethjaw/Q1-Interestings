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
        // catName.className =  "subtitle"
        var catDescrip = document.createElement('p')
        var catLink = document.createElement('a')

        var catDiv = document.createElement('div')
        catDiv.className = "column is-three-quarters"

        var catContent = document.getElementsByClassName('is-three-quarters')[0]

        catName.innerText = catData.sources[i].name
        catDescrip.innerText = catData.sources[i].description
        catLink.innerText = "Browse Site"
        catLink.setAttribute('href', catData.sources[i].url)
        catLink.target = "_blank"
        catLink.className = 'button is-primary is-outlined'

        catDiv.append(catName, catDescrip, catLink)

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
        artDiv.className = "column is-three-quarters"

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




// var topForm = document.getElementById('topStoriesForm')
//
// topForm.addEventListener('submit', function(event){
//   event.preventDefault()
//   console.log(event)
//
// fetch('https://newsapi.org/v1/source?sortBy=top&apiKey=8ff32c3c49ce4b68bc809217451302ef')
// .then(function(response){
//   return response.json()
//   .then(function(topData){
//     console.log(topData)
//   })
// })
//
// })
