

$(document).ready(function(){
  var frameSrc = "/login";

$('#openBtn').click(function(){
    $('#myModal').on('show', function () {

        $('iframe').attr("src",frameSrc);
      
  });
    $('#myModal').modal({show:true})
});
   $('a[href*=#]:not([href=#])').click(function() {
       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           $('html,body').animate({
             scrollTop: (target.offset().top - 70) // adjust this according to your content
           }, 1000);
           return false;
         }
       }
   });
 });