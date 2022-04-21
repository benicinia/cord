$(document).ready(function(){
  $.ajax({
    url: "http://localhost:1337/Analytics.js",
    method: "GET",
    dataType:'json',
    data:{msg:'success',dat:data},
    success:function(response){  
                if(response.msg=='success'){  
                    alert('data recieved'); 
                    console.log(dat); 
               // var chartData = [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000];    
//var chartData = [];

      for (var i = 0; i < 12; i++)
            chartData.push((dat[i].balance) );

                }else{  
                    alert('data not recieved');  
                }  
            },  
            error:function(response){  
                     alert('server error')     
            
      
      

      }
})

});