//var payr = document.getElementById('pyrc').checked=false;
          
              
           
           $("#pyrc").click(function () {
            
                var payrv = $(this).val();
            
               //$('.g-5').remove();
          
            $.ajax({
                url:'/user/chk',
                method:'post',
                
                dataType:'json',
                data:{'usid':payrv,'pk':'1'},
                success:function(response){
                 if(response.msg=='success'){
                    alert('task added successfully');
                   //$('.mob').hide();
                     //$('.x').append("<div class='valid-feedback'>true</div>"); 
                   // getdata();
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
            });  })

$(document).ready(function(){

    $('#bbtn').hide()
    //$('#bbtnd').show()
    $('.me-auto').append('<input id="bbtnd"   style="height: 4em;display: flex;border: 1px solid transparent!important;margin-left: -4em;" type="image" name="submit" border="0" src="../images/btn_buynow_LG-ab.png" alt="Buy Now" disabled>')

			/*function update() {
				var select = document.getElementById('opts');
                var qunti = document.getElementById('qunti');
				var option = select.options[select.selectedIndex];

				document.getElementById('value').value = option.value;
				document.getElementById('text').value = option.text;

                
			}

			update();*/
            $(function () {
                 opt = this.opt;
                 k = this.k;
                
                if (opt) {
                    
               
                opt.forEach(op => {
                   var qnn = op[qn];
                
                }); }
                //var qunti = document.getElementByc('n');
                $("#opts").on(function () {
                    var selectedText = $(this).find("option:selected").text();
                    var selectedValue = $(this).val();
                   //alert("Selected Text: " + selectedText + " Value: " + selectedValue);
                   $('.qnty').remove();
                   if (selectedValue) {
                    var q = $("#q"+selectedValue).val();
                    var r = $("#q"+selectedText).val();
                    

                        

                    if (q == 0) {
                        $('#indx'+selectedValue).remove();
                        $('#bbtn').hide()
                        $('#bbtnd').show()
                        $('#'+selectedValue).append('<option style="color: #000;" name="{{this.nm}}-qn" selected=""  value="0"><h6 style="text-color:red!important;">Not available!</h6></option>'); 
                        //$('.me-auto').append('<input id="bbtnd"   style="height: 4em;display: flex;border: 1px solid transparent!important;margin-left: -4em;" type="image" name="submit" border="0" src="../images/btn_buynow_LG.png" alt="Buy Now" disabled>')
                        
                                   
                    } else if (q > 1) {
                        
                    
                    for (let i = 2; i <= q; i++) {
                    $('#bbtn').show()
                    $('#bbtnd').hide()
                    $('#'+selectedValue).append("<option class='qnty' style='color: #000;'  value="+i+">"+i+"</option>"); 
                   
                    }} else if(q == 1){
                        $('#bbtn').show()
                    $('#bbtnd').hide()
                    } else{
                        $('#bbtn').hide()
                    $('#bbtnd').show()  
                    } 
                    $('.qunti').hide();
                    $('#'+selectedValue).show();
                   
                       
                   if (q === "undefined") {
                    $('#bbtn').hide()
                    $('#bbtnd').show()  
                   }
                   
                
                }
                });
            });

$(document).ready(function(){
   // alert('application started');

    

    $('#qun').change(function(){
         //var ph = $("#qun").val();
         
         var qunti = document.getElementById('qunti');
           
           
            if(1==1){
                
                var buttonTextBuyNow = document.getElementById("qunt");
                if (buttonTextBuyNow) {
                    document.addListener(buttonTextBuyNow, 'change', this.ph);
                }
                document.addListener('qunn', 'change', function() {
                    BD = this.options[this.selectedIndex].value;
                    //BD_STEP1.currencyCode = this.value;
                
                var ph = $("#qunt").val();
                //var p1 = $("#qun").val();
               // alert('task added successfully');
              $('.o1').hide();
             var ss= $('select').value();
              //$('.'+p1).show();
                //$('.x').append("<div class='valid-feedback'>true</div>"); 
               
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
    });
    }
})
})        
       
    

    
    
    
    
});
    
//});


