var item_offsetX, item_offsetY, drop_offsetX, drop_offsetY;

$('.item').on('dragstart', function (event) {
  var dataTransfer = event.originalEvent.dataTransfer;
  dataTransfer.effectAllowed = 'copy';
  dataTransfer.setData('Text', this.id);
});

$('.item').mousemove(function(event){
  item_offsetX = event.pageX - this.offsetLeft;
  item_offsetY = event.pageY - this.offsetTop;
});

$('.item').on('dragend', function (event) {
  var dataTransfer = event.originalEvent.dataTransfer;
  dataTransfer.dropEffect = 'copy';
  return false;
});

$('.head').on('dragover', function (event) {
  if (event.preventDefault) event.preventDefault(); // allows us to drop
  var dataTransfer = event.originalEvent.dataTransfer;
  $(this).addClass('over');
  dataTransfer.dropEffect = 'copy';
  drop_offsetX = event.originalEvent.pageX - this.offsetLeft;
  drop_offsetY = event.originalEvent.pageY - this.offsetTop;
  return false;
});

$('.stage .item_container').on('dragover', function (event) {
  if (event.preventDefault) event.preventDefault(); // allows us to drop
  var dataTransfer = event.originalEvent.dataTransfer;
  $(this).addClass('over');
  dataTransfer.dropEffect = 'copy';
  return false;
});

$('.stage .head').on('drop', function (event) {
  if (event.stopPropagation) event.stopPropagation(); // stops the browser from redirecting...why???
  var rel = $(this).attr("data-rel");
  var item = event.originalEvent.dataTransfer.getData('Text');
  var $item = $('#' + item);
  var pageX = drop_offsetX - item_offsetX;
  var pageY = drop_offsetY - item_offsetY;
  $('#' + item).appendTo('.stage .head').css("position", "absolute").css("float", "auto").css("top", pageY).css("left", pageX);  
});
$('.stage .item_container').on('drop', function (event) {

    if (event.stopPropagation) event.stopPropagation(); // stops the browser from redirecting...why???
    var rel = $(this).attr("data-rel");
    var item = event.originalEvent.dataTransfer.getData('Text');
    var $item = $('#' + item);
    pageX = event.originalEvent.pageX - item_offsetX;
    pageY = event.originalEvent.pageY - item_offsetY;

        $('#' + item).appendTo('.stage .item_container').removeAttr("style");
     
});
