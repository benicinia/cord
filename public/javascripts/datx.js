
    //$('.music').hide();
   // $('#bbtn').hide()
    //$('#bbtnd').show()
   // $('.me-auto').append('<input id="bbtnd"   style="height: 4em;display: flex;border: 1px solid transparent!important;margin-left: -4em;" type="image" name="submit" border="0" src="../images/btn_buynow_LG.png" alt="Buy Now" disabled>')

			/*function update() {
				var select = document.getElementById('opts');
                var qunti = document.getElementById('qunti');
				var option = select.options[select.selectedIndex];

				document.getElementById('value').value = option.value;
				document.getElementById('text').value = option.text;

                
			}

			update();*/
                
   
               
               
                $('#mnu').change(function () {
                    var selectedText = $(this).find("option:selected").text();
                    var selectedValue = $(this).val();
                 // alert("Selected Text: " + selectedText + " Value: " + selectedValue);
                   
                   if (selectedvalue ='Music') {
                    $('#stor').hide();
                   // $('#book').hide();
                   // $('#don').hide();
                   $('#musc').show();         
                } else if (selectedvalue ='store') {
                    $('#stor').show();
                   // $('#book').hide();
                   // $('#don').hide();
                   $('#musc').hide();         
                } 
                                }); 
        
                           
                                   
                                  
                                               
     
       
    

    
    
    
    

    
//});


