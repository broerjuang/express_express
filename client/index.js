'use strict'

$(document).ready(() => {
  let $description = $('.description')
  $.getJSON('http://localhost:3000/books', (data) => {
    console.log(data);
  })
})
