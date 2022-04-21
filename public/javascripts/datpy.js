$(document).ready(function(){
    //alert('application started');

    

    $('.send').click(function(){
         var phone = $("#phon").val();
         
       $.ajax({
           url:'/tap/mobile',
           method:'post',
           
           dataType:'json',
           data:{'phon':phone},
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
    

    
    
    
    function getdata(){
        $.ajax({
            url:'/task/getnm/'+phone,
            method:'get',
            async:'false',
            dataType:'json',
            //data:{phone},
            success:function(response){
                 if(response.msg=='success'){
                    $('.e').remove();
                    
                   
                    
                     if(response.fnm==undefined || response.fnm==null || response.fnm==''){
                       
                        //alert('no json');
                     }else{
                        $('.w').hide();
                       $('.mob').remove();
                       $('.send').remove();
                     $(response.fnm,function(data){
                         //var url = url+data._id;
                         //index+=1;
            $('.x').append("<div class='valid-feedback'>"+ response.fnm +","+response.lnm+"</div>");
             
            $('.q').append('<h4 style="margin-left: 0.5em; margin-top: 1em; color:#663366;">user:'+ response.fnm +'-'+response.lnm+'</h4>');
            $('.q').append('<h4 style="margin-left: 0.5em; margin-top: 1em; color:#663366;">phone#:'+ response.pnhx +'</h4>'); 
            $('.x').append('<form  name="pay" class="form ob"  action="../tap/pay" method="POST">');
            $('.ob').append('<input type="hidden" name="ccid" value='+ response.pnhx +' required="">'+'<input type="hidden" name="nme" value='+response.fnm+' required="">'+'<input type="text" name="amt" class="form-control is-valid ob" id="amt" aria-describedby="inputGroupPrepend3"  placeholder="Enter salary" required="">'+'<input type="password" name="pint" class="form-control is-valid v" id="pin" aria-describedby="inputGroupPrepend3"  placeholder="enter pin" required="">'+'<input type="hidden" name="phnt" class="form-control is-valid ob"  aria-describedby="inputGroupPrepend3"  value='+phone+' required="">'+'<button type="submit" class="btn btn-primary btn btn-success rsend">Add</button>');
            
                     });
                 }
               }
            },
            error:function(response){
               // alert('user not found!');
                $('.x').append("<div class='invalid-feedback e' style='display: block;'>User not found!</div>");
            }
        });
    }
});
    
});


