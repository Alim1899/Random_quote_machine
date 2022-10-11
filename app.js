import $ from "https://cdn.skypack.dev/jquery@3.6.0";
  
let random  =  Math.floor(Math.random() * 100)


$.getJSON('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', function(data) {

        var quote = `${data.quotes[random].quote}<br>
                    `
          $(".text").html(quote);
   });

$.getJSON('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', function(data) {

  
        var author = `Author: ${data.quotes[random].author}<br>
                    `
          $(".author").html(author);
  
   });
