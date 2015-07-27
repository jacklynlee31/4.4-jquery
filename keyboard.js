var key = $('.key');
var caps = $('.caps-toggle');
var shift = $('.shift-toggle');
var tab = $('.tab-key');
var del = $('.delete-key');
var ret = $('.return-key');
var area = $('textarea');
var space = $('.space-key');

key.on('click',function(){
	area.append(this.innerHTML);
});

space.on('click',function(){
	area.append(this.innerHTML);
});

ret.on('click',function(){
	area.append('\n');
});

tab.on('click',function(){
	area.append('     ');
});

// $('#hey').append('\n');
// disabled in the input
