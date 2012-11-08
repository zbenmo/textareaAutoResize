(function( $ ) {
	
	function resize() {
		this.height('1px');
		var newHeight = 5+this.prop('scrollHeight');
		if (newHeight < 15) newHeight = 15;
		this.height(newHeight + 'px');
	}
	
  $.fn.textAreaAutoResize = function() {
  	
  	this.on('input', function() {
  		var $this = $(this);
  		var r = resize.bind($this);
  		r();
  	});
    
    this.resize();
  };
  
})( jQuery );