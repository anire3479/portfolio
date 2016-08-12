/* $(document).ready(function() {
	$('h1, #bio').hide();
	$("img").hover(function() {
		$(this).addClass('one');
	}, function(){
		$(this).removeClass('one');
	});
	$("#red").click(function() {
		$(this).addClass('two');
		$(this).addClass('center');
       $("#blue").toggle(1000);
       $("#portfolio, #blog").fadeOut(1000);
       $("h1, #bio").fadeIn(2000);
   }); 



}); */

$('.carousel').carousel()

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#myTabs a[href="#profile"]').tab('show') // Select tab by name
$('#myTabs a:first').tab('show') // Select first tab
$('#myTabs a:last').tab('show') // Select last tab
$('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)