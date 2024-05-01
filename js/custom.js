
  (function ($) {
  
  "use strict";

    

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

    $('#btn_feedback').click(function (){
      console.log('clicked')
      let feedback_id = $('#feedback_id').val()
      let feedback_comment = $('#feedback_comment').val()
      let employee_name = $('#employee_name').val()
      console.log('id:' + feedback_id)
      console.log('comment:' + feedback_comment)
      Swal.fire({
        icon: "info",
        title: "Are you sure?",
        text: "You are about to submit yung concern to LMC members",
        showCancelButton: true,
        confirmButtonText: 'Yes proceed',
        cancelButtonText: 'No, Please wait'
      }).then((result) => {
        if(result.isConfirmed){

          $.ajax({
            type:'POST',
            url: './php/functions.php',
            cache: false,
            data:{
              employee_id: feedback_id,
              employee_name: employee_name,
              comment: feedback_comment,
              pn: 2
            },
            success: function (res){
              if(res == 1){
                Swal.fire("Email send!","","success")
                $('#feedback_id').val('')
                $('#feedback_comment').val('')
                $('#employee_name').val('')
                $('#btn_feedback').prop('disabled',true)
              }else{
                Swal.fire('Oopps', res, "error")
              }
            }
          })
          
        }else{
          Swal.fire("Canceeld", "", "info")
        }
      })
      
    })
  
  })(window.jQuery);


