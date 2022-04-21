$(document).ready(function(){
    //alert('application started');

    

    var dwnl = $("#phon").val();
    
         
       $.ajax({
           url:'http://127.0.0.1:8080/tk/generate.php?'+dwnl,
           method:'post',
           
           dataType:'json',
           data:{'lnk':dwnl},
           success:function(response){
            if(response.download_link){
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
            url:'http://127.0.0.1:8080/tk/generate.php?'+dwnl,
            method:'get',
            async:'false',
            dataType:'json',
            //data:dam,
            success:function(response){
                 if(response.download_link){
                    //$('.e').remove();
                    
                   
                    
                     if(response.download_link==undefined || response.download_link==null || response.download_link==''){
                       
                        alert('no json');
                     }else{
                       // $('.w').hide();
                       //$('.mob').remove();
                      // $('.send').remove();
                     $(response.download_link,function(dam){
                         //var url = url+data._id;
                         //index+=1;
            
                         
                         $('.c').append('<input type="hidden" name="lnk"  value='+ response.download_link +'/>');
            
            
                     });
                 }
               }
            },
            error:function(response){
               // alert('user not found!');
                $('.c').append("<div class='invalid-feedback e' style='display: block;'>File not found!</div>");
            }
        });
    }

    
});


