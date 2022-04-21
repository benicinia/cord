$(document).ready(function(){
    //alert('application started');

    

    $('.rsend').click(function(){
         var amt = $("#amt").val();
         var pint = $("#pint").val();
       $.ajax({
           url:'/task/mobile',
           method:'post',
           dataType:'json',
           data:{'amt':amt, 'pin':pint},
           success:function(response){
            if(response.msg=='success'){
               // alert('task added successfully');
              //$('.mob').hide();
                //$('.x').append("<div class='valid-feedback'>true</div>"); 
               getdata();
               //$('#phon').val('')
                
                //if(response.data==undefined || response.data==null || response.data==''){
                //$('tbody').append("<div class='invalid-feedback'>"+ response.msg +"</div>"); 
                //$('.mob').hide();
            //}else{
               //$('.isvalid').show();
          //var fnm = data.fnm;
          //var lnm = data.lnm;
  // $('tbody').append("<div class='valid-feedback'>"+ fnm +","+lnm+"</div>"); 
           
        //}
    }
           },
           error:function(response){
               alert('server error occured')
           }
       });
    });

    $('.rsend').click(function(){
        //var id = $(this).parent().find('button.btn btn-primary btn btn-success rsend').val();
        var amt = $("#amt").val();
        var pin = $("#pint").val();
        // alert('delte',id)
        $.ajax({
            url:'/task/pay',
            method:'post',
            dataType:'json',
            data:{'amt':amt,'pint':pin},
            success:function(response){
                if(response.msg=='success'){
                    alert('data deleted');
                    //getdata();
                }else{
                    alert('data not get deleted');
                }
            },
            error:function(response){
                     alert('server error')   
            }
        });
    });
    
    
    function getdata(){
        $.ajax({
            url:'/task/getnm',
            method:'get',
            dataType:'json',
            success:function(response){
                 if(response.msg=='success'){
                    // $('tr.taskrow').remove()
                    
                   
                    
                     if(response.fnm==undefined || response.fnm==null || response.fnm==''){
                       
                        //alert('no json');
                     }else{
                        $('.w').hide();
                       $('.mob').remove();
                       $('.send').remove();
                       $('.q').remove();
                       $('.x').remove();
                     $(response.fnm,function(data){
                         //var url = url+data._id;
                         //index+=1;
            $('.x').append("<div class='valid-feedback'>"+ response.fnm +","+response.lnm+"</div>");
             
            $('.q').append('<h4 style="margin-left: 0.5em; margin-top: 1em; color:#663366;">user:'+ response.fnm +'-'+response.lnm+'</h4>');
            $('.q').append('<h4 style="margin-left: 0.5em; margin-top: 1em; color:#663366;">phone#:'+ response.pnhx +'</h4>'); 
            $('.x').append('<form  name="pay" class="form ob"  action="task/pay" method="POST">');
            $('.ob').append('<input type="text" name="amt" class="form-control is-valid ob" id="amt" aria-describedby="inputGroupPrepend3"  placeholder="enter amount to send" required="">'+'<input type="password" name="pint" class="form-control is-valid v" id="pin" aria-describedby="inputGroupPrepend3"  placeholder="enter pin" required="">'+'<button type="submit" class="btn btn-primary btn btn-success rsend">Send</button>');
            
            
                     });
                 }
               }
            },
            error:function(response){
                alert('server error');
            }
        });
    }
    
});


