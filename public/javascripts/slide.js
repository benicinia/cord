var itn = $('#nx').val();
var slid = document.querySelector('#row');
var nb = document.querySelector('#nx');

$('#nxt').click(function(){
   // alert('application started');
   
   var nc = itn - (itn-1);
   var maxSizen = -370 * nc;
   
  var ncl = itn - nc
   
   slid.scrollLeft = maxSizen;
   nb.setAttribute("value", ncl);
   
   //slid.classList.remove('fsld') 
        })
       
        $('#prv').click(function(){
            // alert('application started');
            var slid = document.querySelector('#row')
           // slid.classList.remove('fsld') 
           // slid.scroll('overflow-x: scroll;') 
           
           var nc = itn - 1;
         
          var maxSize = 370 * nc;
          slid.scrollLeft = maxSize;
          nb.setAttribute("value", nc);
         
        
                }) 