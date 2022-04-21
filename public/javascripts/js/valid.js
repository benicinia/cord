var Validrequest= new XmlHttpRequest();
Validrequest.open('GET','');
Validrequest.onload= function () {
  var data = JSON.parse(Validrequest.responsetext);
  console.log(data[0]);
};
Validrequest.send();

var maid = '';

$(document).ready(function(){  
    alert('application started');  

    getdata();  

    $('.submit').click(function(){ 
    if (true) {
 var task = $("#email").val();
      var task = $("#email").val();
      var task = $("#uname").val();
    } 
        

       $.ajax({  
           url:'/task/addtask',  
           method:'GET',  
           dataType:'json',  
           data:{'task':task},  
           success:function(response){  
               if(response.msg=='success'){  
               var msgy = ('Email added successfully');
               var maid = '#mail';  
               getdata();  
               $('#task').val('')  
               }else{  
                   var msgn= 'Email already in use!'; 
                   var maid = '#mail';  
                   getdata(); 
               }  
           },  
           error:function(response){  
               alert('server error occured')  
           }  
       });  
    }); 

    $('.submit').click(function(){  
         var task = $("#uname").val();

       $.ajax({  
           url:'/task/addtask',  
           method:'GET',  
           dataType:'json',  
           data:{'uname':uname},  
           success:function(response){  
               if(response.msg=='success'){  
               var msgy = ('User name accepted!'); 
               var maid = '#uname';   
                 getdata();
               $('#task').val('')  
               }else{  
                   var msgn= 'This user name is already taken!';
                   var maid = '#uname';   
                   getdata(); 
               }  
           },  
           error:function(response){  
               alert('server error occured')  
           }  
       });  
    });  
    function getdata(){  
        $.ajax({  
            url:'/task/gettask',  
            method:'get',  
            dataType:'json',  
            success:function(response){  
                 if(response.msg=='success'){  
                     $('.is-invalid').hide(); 
                     $.each(response.data,function(index,data){  
                           
                         
            $('#maid').append("<div class="valid-feedback">"+ msgy +"</div>");   
                     });  
                       
                     }else{  
                        $('.is-invalid').show();  
                     $.each(response.data,function(index,data){  
                           
                         
            $('#maid').append("<div class="invalid-feedback">"+ msgn +"</div>");   
                     });  
                  
               }  
            },  
            error:function(response){  
                alert('server error');  
            }  
        });  
    }  
});  