(function($) {

  function resize() {
    this.height('1px');
    var newHeight = 5+this.prop('scrollHeight');
    if (newHeight < 15) newHeight = 15;
    this.height(newHeight + 'px');
  }

  $.fn.textareaAutoResize = function() {

   this.on('input', function() {
      var $this = $(this);
      resize.call($this);
   });

   this.on('change', function() {
     var $this = $(this);
     resize.call($this);
   });
   
   resize.call(this);
  };

})(jQuery);