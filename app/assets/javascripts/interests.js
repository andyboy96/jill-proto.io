// external js: flickity.pkgd.js

$(document).ready( function() {
  var $gallery = $('.gallery').flickity({
    cellSelector: 'img',
    imagesLoaded: true,
    percentPosition: false
  });
  var $caption = $('.caption');
  // Flickity instance
  var flkty = $gallery.data('flickity');

  $gallery.on( 'cellSelect', function() {
    // set image caption using img's alt
    $caption.text( flkty.selectedElement.alt )
  });
});