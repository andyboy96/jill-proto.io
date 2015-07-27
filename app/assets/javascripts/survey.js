$(document).ready(function() {
  // Randomize the survey questions
  $('#survey-wrapper').randomize('.survey-question');
  
  // Initialize Owl Carousel
  var owl = $('#survey-wrapper');

  owl.owlCarousel({
    items: 1,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    rewindNav: false,
    rewindSpeed: 500,
    singleItem : true
  });
  // Initialize Progress Bar
  var totalQuestions = ($(".survey-question").length);
  var incrementWidth = 100 / totalQuestions;
  
  // Progress Bar Update
  $('.survey-question input').click(function() {
    setTimeout(function() {
      owl.trigger('next.owl');
      var wrapperWidth = $('#progress-wrapper').width();
      var progressWidth = $('#progress-bar').width();
      var currentWidth = (progressWidth / wrapperWidth) * 100;
      var newWidth = currentWidth + incrementWidth;
      var newWidthRounded = newWidth.toFixed();
      $('#progress-bar').css('width', newWidth + '%').attr('data-progress',newWidthRounded);
    }, 500);
    
    // generate responses
    setTimeout(function(){
      var lastSlide = $('.owl-item:last-of-type');
    	if (lastSlide.hasClass('active')){
      	var resultsContent = $('.results-items > h2 + p').text();
        // large long haired cats response
        if (resultsContent.indexOf('cats') > -1
           && resultsContent.indexOf('large') > -1
           && resultsContent.indexOf('long fur') > -1) {
  				$('.results-items > h2 + p').after('<p class="response">Lions are not great pets.</p>')
				}
        // large short haired cats response
        if (resultsContent.indexOf('cats') > -1
           && resultsContent.indexOf('large') > -1
           && resultsContent.indexOf('short fur') > -1) {
  				$('.results-items > h2 + p').after('<p class="response">Tigers are not great pets.</p>')
				}
        // large no haired cats response
        if (resultsContent.indexOf('cats') > -1
           && resultsContent.indexOf('large') > -1
           && resultsContent.indexOf('no fur') > -1) {
  				$('.results-items > h2 + p').after('<p class="response">Good luck shaving a puma.</p>')
				}
        // medium long haired cats response
        if (resultsContent.indexOf('cats') > -1
           && resultsContent.indexOf('medium') > -1
           && resultsContent.indexOf('long fur') > -1) {
  				$('.results-items > h2 + p').after('<p class="response">Snow leopards are great!</p>')
				}
        // medium short haired cats response
        if (resultsContent.indexOf('cats') > -1
           && resultsContent.indexOf('medium') > -1
           && resultsContent.indexOf('short fur') > -1) {
  				$('.results-items > h2 + p').after('<p class="response">I agree. Ocelots are particularly pretty.</p>')
				}
        // medium no haired cats response
        if (resultsContent.indexOf('cats') > -1
           && resultsContent.indexOf('medium') > -1
           && resultsContent.indexOf('no fur') > -1) {
  				$('.results-items > h2 + p').after('<p class="response">Good luck shaving a bobcat!</p>')
				}
        // small long haired cats response
        if (resultsContent.indexOf('cats') > -1
           && resultsContent.indexOf('small') > -1
           && resultsContent.indexOf('long fur') > -1) {
  				$('.results-items > h2 + p').after('<p class="response">I recommend a Maine Coon. They are amazing.</p>')
				}
        // small short haired cats response
        if (resultsContent.indexOf('cats') > -1
           && resultsContent.indexOf('small') > -1
           && resultsContent.indexOf('short fur') > -1) {
  				$('.results-items > h2 + p').after('<p class="response">Tonkanese are beautiful and even tempered.</p>')
				}
        // small no haired cats response
        if (resultsContent.indexOf('cats') > -1
           && resultsContent.indexOf('small') > -1
           && resultsContent.indexOf('no fur') > -1) {
  				$('.results-items > h2 + p').after('<p class="response">Sphinx are amazing - and <strong>very</strong> affectionate.</p>')
				}
        // large short-haired dogs response
        if (resultsContent.indexOf('dogs') > -1
           && resultsContent.indexOf('large') > -1
           && resultsContent.indexOf('short fur') > -1) {
  				$('.results-items > h2 + p').after('<p class="response">Great danes are awesome.</p>')
				}
        // large no-haired dogs response
        if (resultsContent.indexOf('dogs') > -1
           && resultsContent.indexOf('large') > -1
           && resultsContent.indexOf('no fur') > -1) {
  				$('.results-items > h2 + p').after('<p class="response">Perhaps a Mexican Hairless?</p>')
				}
        // large long-haired dogs response
        if (resultsContent.indexOf('dogs') > -1
           && resultsContent.indexOf('large') > -1
           && resultsContent.indexOf('long fur') > -1) {
  				$('.results-items > h2 + p').after('<p class="response">Well, St. Bernards are great, but they drool a lot.</p>')
				}
        // medium short-haired dogs response
        if (resultsContent.indexOf('dogs') > -1
           && resultsContent.indexOf('medium') > -1
           && resultsContent.indexOf('short fur') > -1) {
  				$('.results-items > h2 + p').after('<p class="response">Boxers are the best dogs in the world. Hands down.</p>')
				}
        // medium no-haired dogs response
        if (resultsContent.indexOf('dogs') > -1
           && resultsContent.indexOf('medium') > -1
           && resultsContent.indexOf('no fur') > -1) {
  				$('.results-items > h2 + p').after('<p class="response">American Hairless Terriers are good dogs, but hard to find.</p>')
				}
        // medium long-haired dogs response
        if (resultsContent.indexOf('dogs') > -1
           && resultsContent.indexOf('medium') > -1
           && resultsContent.indexOf('long fur') > -1) {
  				$('.results-items > h2 + p').after('<p class="response">Border Collies are very smart and fun.</p>')
				}
        // small short-haired dogs response
        if (resultsContent.indexOf('dogs') > -1
           && resultsContent.indexOf('small') > -1
           && resultsContent.indexOf('short fur') > -1) {
  				$('.results-items > h2 + p').after('<p class="response">You cannot go wrong with a beagle.</p>')
				}
        // small no-haired dogs response
        if (resultsContent.indexOf('dogs') > -1
           && resultsContent.indexOf('small') > -1
           && resultsContent.indexOf('no fur') > -1) {
  				$('.results-items > h2 + p').after('<p class="response">Chinese Cresteds are fun-looking, but a little annoying.</p>')
				}
        // small long-haired dogs response
        if (resultsContent.indexOf('dogs') > -1
           && resultsContent.indexOf('small') > -1
           && resultsContent.indexOf('long fur') > -1) {
  				$('.results-items > h2 + p').after('<p class="response">Fancy daschunds are fun little dogs.</p>')
				}
    	}
    },501)
  });
  $('#previous-question').click(function(){
    owl.trigger('prev.owl');
      var wrapperWidth = $('#progress-wrapper').width();
      var progressWidth = $('#progress-bar').width();
      var currentWidth = (progressWidth / wrapperWidth) * 100;
      var newWidth = currentWidth - incrementWidth;
      $('#progress-bar').attr('data-progress', newWidth).css('width', newWidth + '%');
  });
  
  // remove default Owl Carousel Bullets
  $('.owl-controls').remove();

  // begin survey
  $("#start-survey").click(function() {
    $(this).addClass('remove');
    $('#survey-wrapper').addClass('start');
  });

  // reset carousel and progress bar on "start over"
  $('#start-over').click(function() {
    owl.trigger('goTo.owl', [0]);
    $('#progress-bar').css('width','0%');
    setTimeout(function(){
      $('p.response').remove();
    	$('span.response-span').empty();
    },200);
  });
  
  // show previous question button once user has gotten into the quiz
  $('.owl-item:first-of-type .survey-question input').change(function(){
    $('#previous-question').fadeIn(1000);
  });
  
  // hide previous question button once user has finished the quiz
  $('.owl-item:nth-last-child(2) .survey-question input').click(function(){
    $('#previous-question').fadeOut(500);
  });
  // hide previous question button if user backtracks to first slide
  $('#previous-question').click(function(){
    var firstSlide = $('.owl-item:first-of-type');
    if ($(firstSlide).hasClass('active')){
      $(this).fadeOut(500);
    }
  });
  
  // display results 
  $('input').click(function(){
    var inputName = $(this).attr('name');
    var inputValue = $(this).attr('value');
    $('#'+inputName+'-response').html(inputValue);
  });
});

// randomize function
(function($) {

  $.fn.randomize = function(childElem) {
    return this.each(function() {
      var $this = $(this);
      var elems = $this.children(childElem);

      elems.sort(function() {
        return (Math.round(Math.random()) - 0.5);
      });

      $this.remove(childElem);

      for (var i = 0; i < elems.length; i++)
        $this.prepend(elems[i]);

    });
  }
})(jQuery);