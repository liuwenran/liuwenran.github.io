$(function(){
	var index=0;
	var imgs=$('.imgbox .img img');
	// alert(imgs.length)
	var shadeimg=$('.shade img');
	var shade=$('.shade');
	var left=$('.left');
	var right=$('.right');
	var close=$('.close');
	// var cw=$(window).outerWidth(true);
	var cw=shadeimg.outerWidth(true);
	imgs.on('click',function(){
		index=$(this.parentNode).index();
		shade.css('display','block');
		var src=$(this).attr('src')
		shadeimg.attr('src',src);
	})
	right.on('click',function(){
		index++;
		if (index==imgs.length) {
            index=0;
        };
        var src=imgs.eq(index).attr('src');
		shadeimg.attr('src',src);
		return false;
	})
	left.on('click',function(){
		index--;
		if (index<0) {
            index=imgs.length-1;
        };
        var src=imgs.eq(index).attr('src');
		shadeimg.attr('src',src);
		return false;
	})
	close.on('click',function(){
		shade.css('display','none');
	})
	shadeimg.on('click',function(e){
		var w=e.pageX;
		if (w<cw/2) {
			index--;
			if (index<0) {index=imgs.length-1};
	        var src=imgs.eq(index).attr('src');
			shadeimg.attr('src',src);
		}else{
			index++;
			if (index==imgs.length) {index=0};
	        var src=imgs.eq(index).attr('src');
			shadeimg.attr('src',src);
		}
		return false;
	})
	shade.on('click',function(){
		shade.css('display','none');
	})
})