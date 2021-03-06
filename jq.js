
function addDivBook(books,divName){
 var index = books.length - 1;
 divName.append("");
        while(index >= 0){
          var book = books[index];
          if(books[index].amazonLink!==""){
            var link=$('<a href="'+ books[index].amazonLink + '" target="_blank"></a>')
          }else{
            var link=$('<a href="#" target="_blank"></a>')
          }
          
          var secRow=$('<div class="row divbooks"></div>');
          var thirdCol=$('<div class="col-xs-5 marg"></div>');
          var fifthCol=$('<div class="col-xs-7 marg"></div>');
          var image=$('<img src="' + books[index].bookImage + '" class="imageSize">');
          var data=$('<h3>'+ books[index].bookTitle +'</h3><h5>'+books[index].author +'<p>('+ books[index].genres +')</p></h4><p>'+ books[index].quote+'</p>');
          fifthCol.append(data);
          thirdCol.append(image);
          secRow.append(thirdCol);
          secRow.append(fifthCol);
          link.append(secRow)
          divName.append(link);
          index -= 1;
        }
}


$('document').ready(function(){
 var $showBooks = $('#showBooks');
addDivBook(streams.books,$showBooks);
           
$('#searchBtn').on('click', function () {
         var searchTxt= $("#searchTxt").val()
         var bookArr=search(searchTxt);
         if(searchTxt===""){
            $showBooks.html("")
            addDivBook(streams.books,$showBooks);
          }
         if(bookArr.length>0){
          $showBooks.html("")
          addDivBook(bookArr,$showBooks )
          }

});
$( "#searchTxt" ).keyup(function() {
 var searchTxt= $("#searchTxt").val()
         var bookArr=search(searchTxt);
         if(searchTxt===""){
            $showBooks.html("")
            addDivBook(streams.books,$showBooks);
          }
         if(bookArr.length>0){
          $showBooks.html("")
          addDivBook(bookArr,$showBooks )        
          }else{
            $showBooks.html("<h2>Sorry! there is no matched books</h2>")
          }
               
});

});

