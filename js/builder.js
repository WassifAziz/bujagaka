$(window).load(function() {

    $('#droparea table').click(function(e) {
        e.preventDefault();
    });

    $('a').click(function(e) {
        e.preventDefault();
    });

    var width = 700;
    var column_width = 20;
    var main_column_width = 700;


    //        var width=prompt("Set email width");
    $('.main_container_table').attr('width', width);
    //
    //         var column_width=prompt("Set column width");
    $('.margin_column').attr('width', column_width);
    //
    //        var total_column_width = column_width*2;
    //        var main_column_width = width - total_column_width;
    //        //alert(new_container_width);
    $('.main_column').attr('width', main_column_width);


    $(function() {
        var tbdiv = $('.popout-menu.block img'); //was #draggable table
        $(tbdiv).draggable({
            connectToSortable: ".sortable",
            helper: "clone",
            revert: "invalid"
        });

        $(".sortable").sortable({
            revert: true,
            receive: function(event, ui) {
                var html = [];
            }
        });

    });

    //allow contents in builder table to be dragged outside of container div
    $('.builder-table').draggable({
        appendTo: 'body'
    });

    setInterval(function() {

        $('.main_row').each(function() {

            var TabIn = $('.sortable').find('table').length;

            if (TabIn >= 1) {
                //console.log('has ' + TabIn);

                //$(".sortable").sortable('refresh');

                $(this).removeClass('main_row');

                $(this).find('td').removeClass('sortable');

                $(this).find('td').removeClass('ui-sortable');

                //                $(this).draggable({disabled:true});

                $('.editable').each(function(index) {//give tr a tabindex attribute in order to count them
                    $(this).attr('tabindex', index)
                });

                $(this).after('<tr class="main_row editable"><td bgcolor="#FFFFFF" class="sortable" id=""></td></tr>');

                $(".sortable").sortable({
                    revert: true,
                    receive: function(event, ui) {
                        var html = [];
                    }
                });

            } else {
                //console.log('no table');
            }

        });
        



        $('.editable').on('click', function() {

            $('.editable').removeClass("click2edit");
            var TrTotal = $(this).attr('tabindex');

            console.log('clicked ' + TrTotal);


            /*if ($(this, 'td:contains("some text")').length > 1) {
                //alert ("I have text");
                console.log('has text');
            }*/


            if (!$(this, "td").text().trim().length) {
                console.log('no text');//if td doesn't have text
            }
            else{
                console.log('HAS text');// if td HAS text
                $(this).addClass('click2edit');

                //$('.editable').removeClass('trumbowyg closable');
            }

            //$(this, "td").addClass('trumbowyg closable');


            //editor functions
            /*$('.trumbowyg.closable').trumbowyg({
                closable: true
            });

            $("#droparea td").on('click', this, function () {

                $(this, "td").addClass('trumbowyg closable');

                $('.trumbowyg.closable').trumbowyg({
                    closable: true
                });

            });*/

        });


        $('.editable td .WC_buttons.black').replaceWith('<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#FBF8F3"><tr><td valign="top"><table width="308" border="0" cellspacing="0" cellpadding="0" align="left" class="table"><tr><td><a href="http://www.thewhitecompany.com/the-little-white-company/baby-new-arrivals/?ProGrpCode=Z1T01&amp;utm_source=Email&amp;utm_medium=new-trans-collection-11Aug&amp;utm_campaign=little_white_banner&amp;CM_MMC=Email-_-new-trans-collection-11Aug-_-HTML-_-little_white_banner" target="_blank"><img src="images/WC_transc_aug_09.jpg" alt="Knitted Biker Cardigan" style="display:block;" border="0" width="308" height="333"></a></td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="352" align="right" class="table"><tr><td valign="top" bgcolor="#FBF8F3" style="line-height:1px;font-size:1px;"><a href="http://www.thewhitecompany.com/the-little-white-company/baby-new-arrivals/?ProGrpCode=Z1T01&amp;utm_source=Email&amp;utm_medium=new-trans-collection-11Aug&amp;utm_campaign=little_white_banner&amp;CM_MMC=Email-_-new-trans-collection-11Aug-_-HTML-_-little_white_banner" target="_blank"><img src="images/WC_transc_aug_10.gif" width="352" alt="Meet your hero pieces" class="img_mob" style="display:block;" border="0"></a></td></tr><tr><td align="center" style="font-family: Times New Roman, Times, Baskerville, Georgia, serif;font-size:1px;line-height:1px;color:#030303;" bgcolor="#FBF8F3"><a href="http://www.thewhitecompany.com/the-little-white-company/baby-new-arrivals/?ProGrpCode=Z1T01&utm_source=Email&utm_medium=new-trans-collection-11Aug&utm_campaign=little_white_banner&CM_MMC=Email-_-new-trans-collection-11Aug-_-HTML-_-little_white_banner" target="_blank" style="text-decoration:none;color:#030303;"><span style="font-size: 18px;line-height:100%;">Made from the finest wool and<br/>cotton to keep them cuddly <br/>andcomfy 100% of the time</span><br></a></td></tr><tr><td height="15" valign="top" style="font-family: Times New Roman, Times, Baskerville, Georgia, serif;font-size: 1px;line-height:1px;color:#000001;" bgcolor="#FBF8F3"><img src="images/spacer.gif" width="1" height="15" alt=""></td></tr><tr><td height="20" align="center" valign="top" style="font-family: Times New Roman, Times, Baskerville, Georgia, serif;font-size: 1px;line-height:1px;color:#231f20;" bgcolor="#FBF8F3"><img src="images/spacer.gif" width="1" height="20" style="display:block"></td></tr><tr><td align="center" style="font-family: Times New Roman, Times, Baskerville, Georgia, serif;font-size: 1px;line-height:1px;color:#231f20;padding-bottom: 10px" bgcolor="#FBF8F3" class="h50" valign="top"><table cellpadding="0" cellspacing="0" border="0" width="180" height="32" style="background-color:#000;"><tbody><tr><td align="center"><img src="images/32.gif" alt="" style="display: block;border: 0" width="1" height="32"></td><td valign="middle" style="font-family: Arial, &#39;Lucida Grande&#39;, sans-serif;font-size:15px;" align="center"><a href="http://www.thewhitecompany.com/the-little-white-company/baby-new-arrivals/?ProGrpCode=Z1T01&amp;utm_source=Email&amp;utm_medium=new-trans-collection-11Aug&amp;utm_campaign=little_white_banner&amp;CM_MMC=Email-_-new-trans-collection-11Aug-_-HTML-_-little_white_banner" target="_blank" style="color:#FFFFFF;display: inline-block;text-decoration: none;text-transform: uppercase;">SHOP BABY</a></td></tr></tbody></table></td></tr></table></td></tr></table>');

    }, 1000);

    



    /* $('.editable').on('click', function() {
        //console.log('clicked ' + TrTotal);
        var TrTotal = $(this).attr('tabindex');
        //console.log('hello');
        console.log('clicked ' + TrTotal);

        $(this, "td").addClass('trumbowyg closable');


    });
*/
        

    //download HTML functions
    var a = document.body.appendChild(
        document.createElement("a")
    );
    a.download = "export.html";
    a.innerHTML = "[Export conent]";

    $('#droparea').bind("DOMSubtreeModified",function(){
        a.href = "data:text/html," + document.getElementById("droparea").innerHTML;   
    });    

////////////////////CLICK 2 EDIT SCRIPT, ONLY WORKS IN CONSOLE RIGHT NOW???////////////////////////////////
//    var edit = function() {
//        $('.click2edit').summernote({focus: true});
//    };
//
//    var save = function() {
//        var aHTML = $('.click2edit').code(); //save HTML If you need(aHTML: array).
//        $('.click2edit').destroy();
//    };
//    
    
    
    //add edit class to clicked TD
    $('#email_table tbody tr td table tbody tr td').on('click', function() {

        if (!$(this, "td").text().trim().length) {
            alert();
        }
        else{
            $('td').removeClass("editable text");
            $(this).addClass("editable text");
        }

    });
    
    
    //slide out nav
    $('.section-text.block').click(function() {
        $( ".popout-menu.block" ).toggle( "slide" );
    });

    $('.section-text.styles').click(function() {
        $( ".popout-menu.styles" ).toggle( "slide" );
    });


    //Code for font-sslider
    $(function() {
        var aFontsSizeArray = new Array('5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '24', '26', '28', '30', '33', '36', '39', '42', '45', '48', '55');
        $('#slider').slider({
            value: 7,
            min: 1,
            max: 28,
            step: 1,
            slide: function(event, ui) {
                var sFontSizeArray = aFontsSizeArray[ui.value];
                $('#font_size').val(sFontSizeArray + ' px');
                $('.editable.text').css('font-size', sFontSizeArray + 'px' );
            }
        });
        $('#font_size').val((aFontsSizeArray[$('#slider').slider('value')]) + ' px');
    });

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //insert BR on enter press
//    $(document).keypress(function(e) {
//        if(e.which == 13) {
//            var pos = $('.trumbowyg-editor').caret()
//            alert(pos);
//            
//        }
//    });


    //double click to insert
    //    $(".builder-table").click(function(){
    //
    //        var value = $(this).parent().html();
    //        value = value.trim();
    //        $(value).appendTo(".main_row td");
    //
    //    });


    //DELETE ROW
    //    $('#droparea').on('click', 'tr', function() { 
    //        if (confirm('Are you sure you delete this section?')) {
    //            $(this).parents("tr").remove()  
    //        } else {
    //            // Do nothing!
    //        }
    //    });
    //    


    //trumbowyg EDITOR
    //    $(".trumbowyg.closable").on("click", function() {
    //            
    //        $('.trumbowyg.closable').trumbowyg({
    //            closable: true
    //        });
    //        $('.trumbowyg').parent("tr").parent("tbody").parent("table").removeClass("ui-draggable");
    //
    //    
    //    });
    //    






    /*$("#droparea td").on('click', this, function () {

        $(this, "td").addClass('trumbowyg closable');

            $('.trumbowyg.closable').trumbowyg({
                closable: true
            });

    });*/

    /*$("#droparea td").each(function(){
        var TrTotal = $('#droparea tr.editrow').length;
        //var TrTotal = setInterval($('#droparea tr.editrow').length, 1000);

        $("#droparea td").on('click', this, function () {

           console.log('clicked' + TrTotal);

        });
    });*/

    //onclick close button, reenable draggable
    //    $(".trumbowyg-close-button").on('click', function() {
    //        alert();
    //    });







    //////DELETE BUTTONS ON CLICK
    $('#droparea td').on('click', function() { 

        $(this).append('<p class="delete" style="display:block;">Delete?</p>');

        $('#droparea > table > tbody > tr').each(function(){

            $(this).addClass("current_selected");

        });

    });
    
    $('.delete').on('click', function(){
       
        $('.delete').remove();
        
    });

    




    //        var originalLeave = $.fn.popover.Constructor.prototype.leave;
    //        $.fn.popover.Constructor.prototype.leave = function(obj){
    //        var self = obj instanceof this.constructor ?
    //        obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)
    //        var container, timeout;
    //
    //        originalLeave.call(this, obj);
    //
    //        if(obj.currentTarget) {
    //        container = $(obj.currentTarget).siblings('.popover')
    //        timeout = self.timeout;
    //        container.one('mouseenter', function(){
    //          //We entered the actual popover – call off the dogs
    //          clearTimeout(timeout);
    //          //Let's monitor popover content instead
    //          container.one('mouseleave', function(){
    //            $.fn.popover.Constructor.prototype.leave.call(self, self);
    //          });
    //        })
    //        }
    //        };



    /*$('.loader').on('click', function(){
        $('.generated').load('week.html');
    });*/



    //    $(".builder-table").click(function(){
    //        
    //        var value = $(this).html();
    //        value = value.replace(/\s+/g, '');
    //        (value).appendTo(".main_row td");
    //        
    //    });









}); //END LOAD FUNCTION