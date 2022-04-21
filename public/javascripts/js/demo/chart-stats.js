// Set new default font family and font color to mimic Bootstrap's default styling


 
function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}



$(document).ready(function(){
  $.ajax({
    url: "../stat",
    method: "GET",
    dataType:'json', 
    //data:{'dat':data}, 
            
    success: function(datt) {
      //console.log(data);
      
      var scr = [];
      var scrt = [];
      var scrx = [];
      var scrd= [];
      for(var i in datt) {
        scr.push(datt[i]);
      }
      for(var i in datt) {
        
        var currentDate = new Date(datt[i].clickdate);
        var date = currentDate.getUTCDate();
        if (date==1) {
          var dt = 'Monday';
          scrt.push(dt);
       
        } else if(date==2) {
          var dt = 'Tuesday';
          scrt.push(dt);
       
        }
        else if(date==3) {
          var dt = 'Wednsday';
          scrt.push(dt);
       
        }else if(date==4) {
          var dt = 'Thursday';
          scrt.push(dt);
       
        }else if(date==5) {
          var dt = 'Friday';
          scrt.push(dt);
       
        }
        else if(date==6) {
          var dt = 'Saturday';
          scrt.push(dt);                
        }else if(date==7) {
          var dt = 'Sunday';
          scrt.push(dt);
       
          
        }
       
        
        
 }
 for(var i in datt) {
  
  scrx.push(datt[i].ip);
}
        
      var ctx = document.getElementById("myAreast");

      var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Mon", "Tue", "Wed", "Thrs", "Fri", "Sat", "Sun"],
   // labels: scrt,
    datasets: [{
      label: "Views",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: scr
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
         unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return value;
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' +tooltipItem.yLabel;
        }
      }
    }
  }
});

      

    }, 



    error: function(datt) {
      console.log(datt);
    }


  });


});