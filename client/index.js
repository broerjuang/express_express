$(document).ready(function () {
  let $description = $('#description')

  // GET DATA
  $.getJSON(`http://localhost:3000/api/books`, function (data) {
    //console.log(data)
    //let something = data.map(data => [data.id, data.title, data.price, "<br>"])
    //console.log(something)
    $description.html(`${data.map(data => data.id + " " + data.title + " " + data.price + "<br>")}`)
  })

})
