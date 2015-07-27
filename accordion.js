var header = $('.header');
var list = $('.links');

header.on('click', function() {
	var target = $(this).next();
	target.find('.links').slideDown();
	target.siblings().find('.links').slideUp();
	$(this).addClass("selected");
	$(this).siblings(header).removeClass("selected");
});


// add or remove class
// .selected {color:red};
// $("ul li").addClass(function ( index ) {
// 	return "item-" + index;
// });
//Add the class "selected" to the matched elements
// addClass
