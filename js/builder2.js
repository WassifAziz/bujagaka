var allThumbs;
var getThumbNo;
var allTrs;
var currentNumber;
var currentTr;

$(window).load(function() {

    var allThumbs = $('#Thumbs img');

    var n = 0;

    /*Code based on http://jsbin.com/ucopun/11/edit*/

    //Remove row on class trigger
    $("#myTable").on('click', '.remove', function(event) {

        //$(this).parent().parent().remove();
        $(this).parent().remove();

    });


    allThumbs.each(function(i) {
        i = i + 1;
        $(this).addClass('Thumbnail_' + i);
    });

    allThumbs.click(function() {

        //split class name to get the current number
        var getThumbNo = this.className.split(/[_\ ]/g);

        //get current number and log it!
        var currentNumber = getThumbNo[1];

        //Remove content HTML
        var removeDiv = '<div class="remove">X</div>';

        //console.log(currentNumber);

        //var currentTr = $('.tableRow_' + currentNumber).html();
        var currentTr = $('.tableRow_' + currentNumber)[0].outerHTML;

        $(currentTr).appendTo($('#myTable > tbody')).append('<div class="remove">X</div>');

        //Assign class to each TD that has text
        /*$('#myTable > tbody > tr td').each(function() {
            if ($(this).text().trim().length > 0) {
                console.log('has text');
                $(this).addClass("TEXT").parent('td').removeClass('TEXT');
                //this).parent('td').removeClass('TEXT');
            } else {
                console.log('no text');
                $(this).addClass("NOTEXT");
            }
        });*/


        //Add class to TD if it has text, to edit later in editor
        /*$('#myTable td').each(function() {

            if (!$(this).text().trim().length > 0) {
                $(this).addClass("foo");
            }

        });*/


        /*$('#myTable td').on('click', function() {


            if ($(this).text().trim().length > 0) {
                console.log('has text');
                //$(this).trumbowyg();
            } else {
                console.log('no text');
            }

        });*/

        //disable all links in build table
        $('#myTable a').click(function(e) {
            e.preventDefault();
            //do other stuff when a click happens
        });

    });


    $('#addSpace').on('click', function() {

        var spacerTr = $('#spacerTr > tbody').html();

        $(spacerTr).appendTo($('#myTable > tbody')).append('<div class="remove">X</div>');

    });


    


    //WYSIWYG Editor functions
    /*$('td').on('click', function(){
        $(this).jqte();
    });*/

    //$('td').jqte();


    //Render created table
    $("#Result").click(function() {

        //Sort composed table in variable
        var table = $("#myTable").html();

        console.log(table);

        //Output HTMl in container
        $(".Result").html(table);

        //Remove unwanted elements
        $('.Result .remove').remove();


    });

    
    
    
    
jQuery(function($){
    $('#myTable').bind("DOMSubtreeModified",function(){

        // REST OF THE CODE HERE

        $('#Render [class^="tableRow"] td table tr td:first-child+td').on('click', function() {
            if (!$(this).text().trim().length) {
                console.log('no text');
            } else {
                console.log('has text');
                $(this).addClass('editable');
                $( "#myTable > tbody" ).sortable( "disable" );

//            $('.trumbowyg.closable').trumbowyg({
//                closable: true
//            });
                
                $('.editable').editable({inlineMode: false})
                
            
  
                
//            $('.trumbowyg-close-button').each(function() {
//                $(this).click(function() {
//                    $( "#myTable > tbody" ).sortable( "enable" );
//                });
//            });
                
                
                $(".editorTest").click(function() {
                    $('.editable').editable("destroy");
                
                    $('td').removeClass('editable');
                    $( "#myTable > tbody" ).sortable( "enable" );
                 

                });

                
            }

        });
        
    });
    

});
    
    
});//END LOAD FUNCTION




$(document).ready(function() {

    //var getThumbNo = allThumbs.className.split(/[_\ ]/g);

    console.log("ready!");

    $('#loadHere').load('rbs_FINAL.html');

    $('#Thumbs img').on('click', function() {
        $('#Thumbs img').removeClass('active');
        $(this).addClass('active');
    });


    //var allThumbs = $('#Thumbs img');

    //buymber all images in the tools section - then link them to their respective TR inside the email template

    //var allTrs = $('.rbsTable > tbody').children('tr');

    //Get current TR and transform it into a variable

    //$('.editorTest').editable()
    //$('.editorTest').trumbowyg();
    
    
    
    /*********ADD CLASS TO TD***/


//    $(this).on("click", "td", function (event) {
//        $(this).addClass("TESTTTTTTTTTTTTTTTTTTTTTTTTTTTT");
//        event.stopPropagation();
//    });
//    

//
    var defined_class;
    $("#select_class").change(function() {
        defined_class = $(this).val();
        /*$('.editable').addClass(defined_class);
        
        var used_classes = $('.editable').attr('class');
        console.log(used_classes);*/
        
        console.log(defined_class);
        
        //defined_class.split(/[_\ ]/g);
        
        $('.editable').attr('class', defined_class);
        
        
        $(defined_class).each(
            function( intIndex, objValue ){

                // Create a new LI HTML element out of the
                // current value (in the iteration) and then
                // add this value to the list.
                console.log(objValue );
            }
        );
        
        
//        $(defined_class).each(function() {
//            console.log(this);
//            // Do work with the current element
//        });
//        
        
    }).change();
    
    var link = $('#editor');
    $(function(){
        $('.editable').editable({inlineMode: false, buttons: ['bold', 'italic', 'subscript', 'superscript', 'formatBlock', 'alert', 'clear', 'image', 'add'], blockTags: ['p'], customButtons: {
            alert: {
                title: 'Alert',
                icon: {
                    type: 'font',
                    value: 'fa fa-info'
                },
                callback: function () {
                    alert ('Hello!')
                    link.addClass('froala-boxagdsgsdgsdgsdgsdg');
                },
                refresh: function () {
                    console.log ('do alert refresh');
                }
            }
        }
                            })
    });

});//DOCUMENT READY END

