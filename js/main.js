
$('.item').on('dragstart', function (event) {
    var dataTransfer = event.originalEvent.dataTransfer;
    dataTransfer.effectAllowed = 'copy';
    dataTransfer.setData('Text', this.id);
    console.log(dataTransfer);

});

$('.item').on('dragend', function (event) {
    var dataTransfer = event.originalEvent.dataTransfer;
    dataTransfer.dropEffect = 'copy';
    return false;
});

$('.stage .head').on('dragover', function (event) {
    if (event.preventDefault) event.preventDefault(); // allows us to drop
    $(this).addClass('over');
    var dataTransfer = event.originalEvent.dataTransfer;
    dataTransfer.dropEffect = 'copy';
    console.log("over the spot to drop");

    return false;
});


$('.stage .head').on('drop', function (event) {

    if (event.stopPropagation) event.stopPropagation(); // stops the browser from redirecting...why???
    var rel = $(this).attr("data-rel");
    var item = event.originalEvent.dataTransfer.getData('Text');
    var $item = $('#' + item);
    pageX = event.originalEvent.pageX - 50;
    pageY = event.originalEvent.pageY - 50;
    
    console.log(rel);
    console.log($item);
    // $('#'+ item).fadeOut(function(){
    if (rel == "head") {
        $('#' + item).appendTo('.stage .head').css("position", "absolute").css("float", "auto").css("top", pageY).css("left", pageX);
        console.log(event.originalEvent.pageY);
        //this.appendTo('#identifier');     
        // });
        console.log(item);
        console.log("we dropped it in the square");
    } else {
        console.log("not there goon try again");
    }

});
