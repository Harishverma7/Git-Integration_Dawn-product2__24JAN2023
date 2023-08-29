    $('input[type="radio"],[type="button"]').click(function(){
      let step = $(this).data("id");
      let ths = $(this);
      $(".step_list").each(function(){
        steps = $(".step_list").length;
        let sdfd = $(this),
            feild_id = sdfd.attr("id");
        if(step == feild_id){
          sdfd.show().siblings().hide();

          let fieldsetIndex = sdfd.data("index");
          var percent = parseFloat(100 / steps)*fieldsetIndex;
          animateProgressbar(percent)

          $(".submit").click(function(e){
            e.preventDefault();
            animateProgressbar(100)
          });
        }
      });


      var steps = $(".step_list").length;

      $(".previous").click(function (){
        $("#step2").hide();
        $("#step1").show();
        var percent = parseFloat(100 / steps)*0;
        animateProgressbar(percent);
      });
      $(".previous1").click(function (){
        $("#step3").hide();
        $("#step2").show();
        var percent = parseFloat(100 / steps)*1;
        animateProgressbar(percent);
        $('input:checked').removeAttr('checked','checked');
      });
      $(".previous2").click(function (){
        $("#step6").hide();
        $("#step5").show();
        $('.xaza').hide();
        $(".cxcxz").show();
        $("#id3,#id4,#id5,#id6").prop('checked', false);        
        var percent = parseFloat(100 / steps)*4;
        animateProgressbar(percent);
      });
      $(".previous3").click(function (){
        $("#step7").hide();
        $("#step6").show();
        var percent = parseFloat(100 / steps)*5;
        animateProgressbar(percent);
      });
      $(".previous4").click(function (){
        $("#id14,#id15").prop('checked', false);
        $("#step8").hide();
        $("#step6").show();
        var percent = parseFloat(100 / steps)*6;
        animateProgressbar(percent);
      });
      $(".previous5").click(function (){
        $("#id11").prop('checked', false);
        $("#step9").hide();
        $("#step8").show();
        var percent = parseFloat(100 / steps)*7;
        animateProgressbar(percent);
      });

      $(".newprevious1").click(function (){
        $("#step4").hide();
        $("#step2").show();
        var percent = parseFloat(100 / steps)*2;
        animateProgressbar(percent);
      });
      $(".newprevious2").click(function (){
        $("#step5,#step9").hide();
        $("#step4").show();
        var percent = parseFloat(100 / steps)*3;
        animateProgressbar(percent);
      });

      $(".newnext").click(function (){
        $("#step5").hide();
        $("#step6").show();
        var percent = parseFloat(100 / steps)*5;
        animateProgressbar(percent);
      });
      $(".next").click(function (){
        $("#step7").hide();
        $("#step8").show();
        var percent = parseFloat(100 / steps)*7;
        animateProgressbar(percent);
      });

      $('.uagain').click(function(){
        $("#step9").hide();
        $("#step5").show();
      });

      $(".back").click(function (){
        $("#step9").hide();
        $("#step1").show();
        $(".cxcxz").show();
//         $('input:checked').removeAttr('checked','checked');
        var percent = parseFloat(100 / steps)*0;
        animateProgressbar(percent);
      });

      function animateProgressbar(percentageCompleted)
      {
        $('#innerdiv').css('width', percentageCompleted + "%" );
      }


      let width = $(this).data("value1");


      let prescription = $(this).data("pres");
      if(prescription == "Single-vision"){
        $('.rtr13,.rtr14,.rtd10').hide();
        $('.rtr12').show();
      }else if(prescription == "Progressives"){
        $('.rtr12,.rtr14,.rtd10').hide();
        $('.rtr13').show();
      }else if(prescription == "Readers"){
        $('.rtr12,.rtr13,.rtd10,.cxcxz').hide();
        $('.rtr14').show();
      }else if(prescription == "Non-prescription"){
        $('.rtr12,.rtr13,.rtr14,.cxcxz,.uploaded_edit').hide();
        $('.rtd10').show();
        $('.previous2').addClass("newprv3");
        $('.previous2').removeClass("previous2");
        $(".newprv3").click(function(){
          $('.newprv3').addClass("previous2");
          $('.newprv3').removeClass("newprv3");
          $("#step6,#step5,#step4,#step3").hide();
          $("#step2").show();
        });
      }

      let mat = $(this).data("mat");
      if(mat == "Polycarbonate"){
        $('.rtr2').hide();
        $('.rtr11').show();
      }else if(mat == "1.67 High Index"){
        $('.rtr11').hide();
        $('.rtr2').show();
      }


      let lens_type = $(this).data("value2");
      if(lens_type == "classic"){
        $('.rtd12,.rtd13').hide();
        $('.rtd11').show();
      }else if(lens_type == "Blue-Light-filtering"){
        $('.rtd11,.rtd13').hide();
        $('.rtd12').show();
      }else if(lens_type == "light-responsive"){
        $('.rtd11,.rtd12').hide();
        $('.rtd13').show();
      }


      let lens_color = $(this).data("value3");
      if(lens_color !== undefined ){
        $('.colorresult').text(lens_color);
        $('#hidden_txt1').val(lens_color);
        $('.previous4').addClass("newprv2");
        $('.previous4').removeClass("previous4");
        $(".newprv2").click(function(){
          $("#step8").hide();
          $("#step6").hide();
          $("#step7").show();
          $('.newprv2').addClass("previous4");
          $('.previous4').removeClass("newprv2");
        });
      }


      let strength = $(this).data("value");
      if(strength !== undefined){
        $('.xaza').show();
        $('.readresult').text(strength);
        $('.newprevious1').addClass("newprv");
        $('.newprevious1').removeClass("newprevious1");
        $(".newprv").click(function(){
          $('.newprv').addClass("newprevious1");
          $('.newprv').removeClass("newprv");
          $("#step4,#step2").hide();
          $("#step3").show();
        });
      }

      let pd=$(this).data("pd");
      if(pd == "dualpd"){
        $('.fordual').show();
        $('.forsingle').hide();
      }else if(pd !== "dualpd"){
        $('.fordual').hide();
        $('.forsingle').show();
      }

      var single_option = $('#singleoption').val();
      $('.readresult1').text(single_option);
      if(single_option == "Select"){
        $('.readresult1,.hidesinglepd').hide();
      }
      else{$('.readresult1,.hidesinglepd').show();}
      
      var dualoptionleft = $('#dualoptionleft').val();
      $('.readresult2').text(dualoptionleft);

      var dualoptionright = $('#dualoptionright').val();
      $('.readresult3').text(dualoptionright);
      if(dualoptionright == "Select" || dualoptionleft == "Select"){
        $('.readresult2,.readresult3,.hidedualpdl,.hidedualpdr').hide();
      }else{$('.readresult2,.readresult3,.hidedualpdl,.hidedualpdr').show();}  

      if(single_option== "Select" && dualoptionright== "Select"){
        $('.pdhide').hide();
      }else if(single_option== "Select" && dualoptionleft == "Select"){
        $('.pdhide').hide();
      }else{$('.pdhide').show();}

      let method = $(this).data("method");
      if(method == "Email later"){
        $(".elater,.uploaded_edit").show();
        $(".uagain").hide();
        $('.previous2').addClass("newprv4");
        $('.previous2').removeClass("previous2");
        $(".newprv4").click(function(){
        $('.newprv4').addClass("previous2");
        $('.newprv4').removeClass("newprv4");
        $("#step6,#step5,#step3").hide();
        $("#step4").show();			
        });
      }else if(method == "Upload File"){
        $(".elater").hide();
        $(".uagain,.uploaded_edit").show();
        $('.previous2').addClass("newprv5");
        $('.previous2').removeClass("previous2");
        $(".newprv5").click(function(){
        $('.newprv5').addClass("previous2");
        $('.newprv5').removeClass("newprv5");
        $("#step6,#step4,#step3").hide();
        $("#step5").show();        
        });
      }

      $('.result1').html(width);
//       $('.result2').html(prescription);
//       $('.result3').html(strength);
//       $('.result5').html(lens_type);
//       $('.result6').html(lens_color);


      var sum = 0;
      $("input:checked").each(function(){
        let rewyteyr  = $(this);
        if(rewyteyr.attr("data-price")){
          let sadfsd = rewyteyr.attr("data-price");
          sum += parseInt(sadfsd);
          $('.result4').html(sum);    
          var sum1=$('.result4').html();
          $('#hidden_txt').val(sum1);
        }
      });


      $("#grey").click(function(){
        $(".img").addClass("intro");
        $(".img_brown").addClass("intro");
        $(".img_green").addClass("intro");
        $(".img_grey").removeClass("intro");
      });

      $("#brown").click(function(){
        $(".img").addClass("intro");
        $(".img_grey").addClass("intro");
        $(".img_green").addClass("intro");
        $(".img_brown").removeClass("intro");
      });

      $("#green").click(function(){
        $(".img").addClass("intro");
        $(".img_grey").addClass("intro");
        $(".img_brown").addClass("intro");
        $(".img_green").removeClass("intro");
      });

      $("#stp5").click(function(){
        $(".img_grey").addClass("intro");
        $(".img_brown").addClass("intro");
        $(".img_green").addClass("intro");
        $("#img").removeClass("intro");
      });

    });


    $('.sss').find(".hid").addClass("prdclass");   
    $(document).ready(function(){
      $('#btnn').click(function(){
        $('body').addClass('overflow_hide');
        var color2=$("input[name='Color']:checked").val();
        $('.hiddencolor').text(color2);
      });
      $('.close[type="button"]').click(function(){
        $('body').removeClass('overflow_hide');
      });
    });


    $(window).on("load",function(){

      var titll = $(".close").data("ptitle");

      var img =$(".is-active > modal-opener > div > img").attr('src');
      
      $(".submit").click(function(e){
        e.preventDefault();
        var color=$("input[name='Color']:checked").val();

        var price=$('#hidden_txt').val();

        var width=$("input[name='radioName']:checked").val();

        var prescription=$("input[name='radioName1']:checked").val();

        var strength=$("input[name='radioName2']:checked").val();

        var glass_color=$('#hidden_txt1').val();

        var glass_type = $("input[name='radioName6']:checked").data("value2");

        var material=$("input[name='radioName3']:checked").val();     

        var img_url=$('#hidnurl').text();


        $.ajax({
          type: "POST",
          // url: "http://localhost/Api/curl1.php",
          url: "https://harish-verma.000webhostapp.com/api/curl1.php",
          data: {
            "price": price,
            "width": width,
            "titll": titll,
            "img": "https:" + img,
            "color": color
          },
          dataType: "json",
          success: function(data) {
            var abc = data.product.variants[0].id;
            var product_id = data.product.id;
            
            jQuery.post('/cart/add.js', {
              quantity: 1,
              id: abc,
              properties: {
                'Frame Width': width,
                'Prescription type': prescription,
                'Magnification Strength': strength,
                'Lens Type': glass_type,
                'Lens Material': material,
                'Uploaded Image': img_url
              }
            }, function() {
              // window.location.href = "/cart";
            });
          }
        });
      });  
    });   

    $(".prv").click(function(){
      setTimeout(function(){
        var sum = 0;
        $("input:checked").each(function(){
          let rewyteyr  = $(this);
          if(rewyteyr.attr("data-price")){
            let sadfsd = rewyteyr.attr("data-price");
            sum += parseInt(sadfsd);
            $('.result4').html(sum);    
            var sum1=$('.result4').html();
            $('#hidden_txt').val(sum1);
          }
        });
      },10);
    });

 
      
    $(".next").prop('disabled', true);
    $('.grey,.brown,.green').click(function() {
      $(".next").prop('disabled', false);
    });

    $(".newnext").prop('disabled', true);

    $('.submit').click(function(){
      $('.add_to_cart_load').addClass('show');
    });

    if($('#file').click(function(){
      $('.imgmsg').hide();

    }));

    $(".prv,.ass1").click(function(){
      $(".lup").each(function(){
        let sdf = $(this);
        if(sdf.is(":checked")){
          let dfd =  sdf.attr("data-pd");
          $(".sdfgsd").each(function(){
            let dsfsds = $(this),
                dsfsds2 = dsfsds.attr("data-pf");
            if(dfd == dsfsds2){
              dsfsds.show().siblings(".sdfgsd").hide();
            }
          });
        }
      });
    });
    
    $('.lup').click(function(){
    var dsgdf=$("input[name='radioN2']:checked").val();
      if(dsgdf == "dualpd"){
        $('.sinle').html($('.sinle').html().replace('selected',''));
      }else{
        $('.dul').html($('.dul').html().replace('selected',''));
      }
    });
    
    $('.radioName2').click(function(){
	var sdsjsb=$("input[name='radioN1']:checked").val();
      if(sdsjsb =="Email later"){
      $('.dul,.sinle').html($('.dul,.sinle').html().replace('selected',''));
      }
    });








$('#btnn').click(function(e){
  e.preventDefault();
  $('.qqqq').hide();
  $('.zzzz').show(); 
  });

$('.close').click(function(e){
  e.preventDefault();
  $('.qqqq').show();
  $('.zzzz').hide();
  $("#step1").show();
  $("#step5,#step4,#step3,#step2").hide();
  $('.step_list input:checked').removeAttr('checked');
  $("#file").val('');
  $(".file_uploaded_alert").text('');
});


$(document).ready(function(){

  $("#file").change(function(){
    $('.add_to_cart_load').addClass('show');
    $('.file_uploaded_alert').text();
    $('#hidnurl').val();
    $(".newnext").prop('disabled', true);
    var fd = new FormData();
    var files = $('#file')[0].files;
    console.log(files);
    if(files.length > 0 ){
      fd.append('file',files[0]);

      $.ajax({
        url: 'http://localhost/Api/upload.php',
        // url: "https://harish-verma.000webhostapp.com/api/upload.php",
        type: 'post',
        data: fd,
        contentType: false,
        processData: false,
        success: function(response){
          if(response == 0 ){
            $('.file_uploaded_alert').text('File Name Already Exits');
            $('.add_to_cart_load').removeClass('show');
          }
          else if(response == 1){
            $('.file_uploaded_alert').text('File Size Should be less than 1 MB.');
            $('.add_to_cart_load').removeClass('show');
          }
          else if(response == 2){
            $('.file_uploaded_alert').text('Sorry, only JPG, JPEG, PNG & GIF files are allowed.');
            $('.add_to_cart_load').removeClass('show');
          }
          else{
            $('.imgmsg').show();
            $(".newnext").prop('disabled', false);
            $(".div12").html(response);
            var cc1c=$('.getimg').text();
            $('#hidnurl').html(cc1c);
            $('.add_to_cart_load').removeClass('show');
			$('.file_uploaded_alert').text('File Uploaded');
          }
        }
      });
    }else{
      $('.file_uploaded_alert').text('Please Select a File');
      $('.add_to_cart_load').removeClass('show');
    }
  });
});












// google map js



$('#mapid1').addClass( 'mapactive' );

$('.map_radio').click(function(){
$(this).addClass('mapactive').siblings().removeClass('mapactive');
  var map; 
  var lat;
  var lng;
  lat = $(this).attr('data-lat');
  lng = $(this).attr('data-lng');

function initialize() {
  var latLng = new google.maps.LatLng(lat,lng ); 
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: latLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
} 

function addMarker(){
  var latLng = new google.maps.LatLng(lat,lng );
  var marker = new google.maps.Marker({
    position: latLng,
    title: 'Marker',
    map: map,
    draggable: true
  });
}

  
initialize();
addMarker();
  
});

setTimeout(function () {
if ($("#mapid1").hasClass("mapactive")) {
 $('#mapid1').trigger('click');
}
}, 1500);

function newfunction(){
setTimeout(function () {
  
// var input;
// input = document.getElementById('search-input');
var input = $('#search-input')[0];
var originLatitude = document.getElementById('s_latitude');
var originLongitude = document.getElementById('s_longitude');
var originAutocomplete = new google.maps.places.Autocomplete(input);

originAutocomplete.addListener('place_changed', function(event) {
    var place = originAutocomplete.getPlace();

    if (place.hasOwnProperty('place_id')) {
        if (!place.geometry) {
                // window.alert("Autocomplete's returned place contains no geometry");
                return;
        }
        originLatitude.value = place.geometry.location.lat();
        originLongitude.value = place.geometry.location.lng();
    } 
});
}, 2010);
}
newfunction();

$('#search-input').change(function() {
  setTimeout(function () {
var map; 
  var lat;
  var lng;
  lat = $('#s_latitude').val();
  lng = $('#s_longitude').val();
  function initialize() {
  var latLng = new google.maps.LatLng(lat,lng );
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: latLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
} 

function addMarker(){
  var latLng = new google.maps.LatLng(lat,lng );
  var marker = new google.maps.Marker({
    position: latLng,
    title: 'Marker',
    map: map,
    draggable: true
  });
}
   initialize();

addMarker(); 
}, 2000);

  
});





// currencyFormSubmit

// class LocalizationForm extends HTMLElement {
//   constructor() {
//     super();
//     this.elements = {
//       input: this.querySelector('input[name="language_code"], input[name="country_code"]'),
//       button: this.querySelector('button'),
//       panel: this.querySelector('ul'),
//     };
//     this.elements.button.addEventListener('click', this.openSelector.bind(this));
//     this.elements.button.addEventListener('focusout', this.closeSelector.bind(this));
//     this.addEventListener('keyup', this.onContainerKeyUp.bind(this));

//     this.querySelectorAll('a').forEach(item => item.addEventListener('click', this.onItemClick.bind(this)));
//   }

//   hidePanel() {
//     this.elements.button.setAttribute('aria-expanded', 'false');
//     this.elements.panel.setAttribute('hidden', true);
//   }

//   onContainerKeyUp(event) {
//     if (event.code.toUpperCase() !== 'ESCAPE') return;

//     this.hidePanel();
//     this.elements.button.focus();
//   }

//   onItemClick(event) {
//     event.preventDefault();
//     const form = this.querySelector('form');
//     this.elements.input.value = event.currentTarget.dataset.value;
//     if (form) form.submit();
//   }

//   openSelector() {
//     this.elements.button.focus();
//     this.elements.panel.toggleAttribute('hidden');
//     this.elements.button.setAttribute('aria-expanded', (this.elements.button.getAttribute('aria-expanded') === 'false').toString());
//   }

//   closeSelector(event) {
//     const shouldClose = event.relatedTarget && event.relatedTarget.nodeName === 'BUTTON';
//     if (event.relatedTarget === null || shouldClose) {
//       this.hidePanel();
//     }
//   }
// }

// customElements.define('localization-form', LocalizationForm);






// addonproduct




// var varid = [];
// $('.getvarid:checked').each(function(){
// let thus = $(this);
// varid.push(thus.attr("data-varid"));
// $('.quantity1').attr("data-value", varid);
// });



// // $('.addon').each(function(){
// // $('.quantity1').change(function(){
// //   var id=$('.quantity1).val();
// //   alert(id);
// // });
// // });

// var myarray= [] ;
// $('.quantity1').each(function(){
// $(this).change(function(){
// // qtynum = $(this).val();
// // qtynum1.push(thus.attr("data-varid"));
// myarray.push($(this).val());
//   console.log(myarray);
// });
// });



// function addon(){

//       $.ajax({
//         type: "POST",
//         url: "/cart/add.js",
//         data: {
//           id: varid,
//           quantity:qtynum
//         },
//         dataType: "json",
//         success: function(){
//                alert();  
//         }  
//       });
// } 



//     var varint = [42243166175410,42240159023282];
//     var qty = [1,5];
//       $.ajax({
//         type: "POST",
//         url: "/cart/add.js",
//         data: {
//           id:varint,
//           quantity:qty
//         },
//         dataType: "json",
//         success: function(){
// alert();
//         }  
//       });





// mapping = {
//    100: 123,
//    200: 456,
//    300: 789
// }


// var obj = {}
// $(".getvarid:checked").each(function(){

//     $selection_id=[42243166175410,42240159023282];
//     $swatch_id=[2,5];
//     obj[$selection_id] = $swatch_id;
// });
// console.log(obj);

// var options = { "quantity" : "value1", "quantity" : "value2"};
// jQuery.post('/cart/add.js', {
  // items: [
  //   {
  //     quantity: 3,
  //     id: 42243166175410
  //   },
  //   {
  //     quantity: 5,
  //     id: 42240159023282
  //   }
  // ]
// });




