//     $('input[type="radio"],[type="button"]').click(function(){
//       let step = $(this).data("id");
//       let ths = $(this);
//       $(".step_list").each(function(){
//         steps = $(".step_list").length;
//         let sdfd = $(this),
//             feild_id = sdfd.attr("id");
//         if(step == feild_id){
//           sdfd.show().siblings().hide();

//           let fieldsetIndex = sdfd.data("index");
//           var percent = parseFloat(100 / steps)*fieldsetIndex;
//           animateProgressbar(percent)

//           $(".submit").click(function(e){
//             e.preventDefault();
//             animateProgressbar(100)
//           });
//         }
//       });

//       var steps = $(".step_list").length;

//       $(".previous").click(function (){
//         $("#step2").hide();
//         $("#step1").show();
//         var percent = parseFloat(100 / steps)*0;
//         animateProgressbar(percent);
//       });
//       $(".previous1").click(function (){
//         $("#step3").hide();
//         $("#step2").show();
//         var percent = parseFloat(100 / steps)*1;
//         animateProgressbar(percent);
//         $('input:checked').removeAttr('checked','checked');
//       });
//       $(".previous2").click(function (){
//         $("#step6").hide();
//         $("#step5").show();
//         $('.xaza').hide();
//         $(".cxcxz").show();
//         $("#id3,#id4,#id5,#id6").prop('checked', false);        
//         var percent = parseFloat(100 / steps)*4;
//         animateProgressbar(percent);
//       });
//       $(".previous3").click(function (){
//         $("#step7").hide();
//         $("#step6").show();
//         var percent = parseFloat(100 / steps)*5;
//         animateProgressbar(percent);
//       });
//       $(".previous4").click(function (){
//         $("#id14,#id15").prop('checked', false);
//         $("#step8").hide();
//         $("#step6").show();
//         var percent = parseFloat(100 / steps)*6;
//         animateProgressbar(percent);
//       });
//       $(".previous5").click(function (){
//         $("#id11").prop('checked', false);
//         $("#step9").hide();
//         $("#step8").show();
//         var percent = parseFloat(100 / steps)*7;
//         animateProgressbar(percent);
//       });

//       $(".newprevious1").click(function (){
//         $("#step4").hide();
//         $("#step2").show();
//         var percent = parseFloat(100 / steps)*2;
//         animateProgressbar(percent);
//       });
//       $(".newprevious2").click(function (){
//         $("#step5,#step9").hide();
//         $("#step4").show();
//         var percent = parseFloat(100 / steps)*3;
//         animateProgressbar(percent);
//       });

//       $(".newnext").click(function (){
//         $("#step5").hide();
//         $("#step6").show();
//         var percent = parseFloat(100 / steps)*5;
//         animateProgressbar(percent);
//       });
//       $(".next").click(function (){
//         $("#step7").hide();
//         $("#step8").show();
//         var percent = parseFloat(100 / steps)*7;
//         animateProgressbar(percent);
//       });

//       $('.uagain').click(function(){
//         $("#step9").hide();
//         $("#step5").show();
//       });

//       $(".back").click(function (){
//         $("#step9").hide();
//         $("#step1").show();
//         $(".cxcxz").show();
//         var percent = parseFloat(100 / steps)*0;
//         animateProgressbar(percent);
//       });

//       function animateProgressbar(percentageCompleted)
//       {
//         $('#innerdiv').css('width', percentageCompleted + "%" );
//       }

//       let width = $(this).data("value1");

//       let prescription = $(this).data("pres");
//       if(prescription == "Single-vision"){
//         $('.rtr13,.rtr14,.rtd10').hide();
//         $('.rtr12').show();
//       }else if(prescription == "Progressives"){
//         $('.rtr12,.rtr14,.rtd10').hide();
//         $('.rtr13').show();
//       }else if(prescription == "Readers"){
//         $('.rtr12,.rtr13,.rtd10,.cxcxz').hide();
//         $('.rtr14').show();
//       }else if(prescription == "Non-prescription"){
//         $('.rtr12,.rtr13,.rtr14,.cxcxz,.uploaded_edit').hide();
//         $('.rtd10').show();
//         $('.previous2').addClass("newprv3");
//         $('.previous2').removeClass("previous2");
//         $(".newprv3").click(function(){
//           $('.newprv3').addClass("previous2");
//           $('.newprv3').removeClass("newprv3");
//           $("#step6,#step5,#step4,#step3").hide();
//           $("#step2").show();
//         });
//       }

//       let mat = $(this).data("mat");
//       if(mat == "Polycarbonate"){
//         $('.rtr2').hide();
//         $('.rtr11').show();
//       }else if(mat == "1.67 High Index"){
//         $('.rtr11').hide();
//         $('.rtr2').show();
//       }

//       let lens_type = $(this).data("value2");
//       if(lens_type == "classic"){
//         $('.rtd12,.rtd13').hide();
//         $('.rtd11').show();
//       }else if(lens_type == "Blue-Light-filtering"){
//         $('.rtd11,.rtd13').hide();
//         $('.rtd12').show();
//       }else if(lens_type == "light-responsive"){
//         $('.rtd11,.rtd12').hide();
//         $('.rtd13').show();
//       }

//       let lens_color = $(this).data("value3");
//       if(lens_color !== undefined ){
//         $('.colorresult').text(lens_color);
//         $('#hidden_txt1').val(lens_color);
//         $('.previous4').addClass("newprv2");
//         $('.previous4').removeClass("previous4");
//         $(".newprv2").click(function(){
//           $("#step8").hide();
//           $("#step6").hide();
//           $("#step7").show();
//           $('.newprv2').addClass("previous4");
//           $('.previous4').removeClass("newprv2");
//         });
//       }


//       let strength = $(this).data("value");
//       if(strength !== undefined){
//         $('.xaza').show();
//         $('.readresult').text(strength);
//         $('.newprevious1').addClass("newprv");
//         $('.newprevious1').removeClass("newprevious1");
//         $(".newprv").click(function(){
//           $('.newprv').addClass("newprevious1");
//           $('.newprv').removeClass("newprv");
//           $("#step4,#step2").hide();
//           $("#step3").show();
//         });
//       }

//       let pd=$(this).data("pd");
//       if(pd == "dualpd"){
//         $('.fordual').show();
//         $('.forsingle').hide();
//       }else if(pd !== "dualpd"){
//         $('.fordual').hide();
//         $('.forsingle').show();
//       }

//       var single_option = $('#singleoption').val();
//       $('.readresult1').text(single_option);
//       if(single_option == "Select"){
//         $('.readresult1,.hidesinglepd').hide();
//       }
//       else{$('.readresult1,.hidesinglepd').show();}
      
//       var dualoptionleft = $('#dualoptionleft').val();
//       $('.readresult2').text(dualoptionleft);

//       var dualoptionright = $('#dualoptionright').val();
//       $('.readresult3').text(dualoptionright);
//       if(dualoptionright == "Select" || dualoptionleft == "Select"){
//         $('.readresult2,.readresult3,.hidedualpdl,.hidedualpdr').hide();
//       }else{$('.readresult2,.readresult3,.hidedualpdl,.hidedualpdr').show();}  

//       if(single_option== "Select" && dualoptionright== "Select"){
//         $('.pdhide').hide();
//       }else if(single_option== "Select" && dualoptionleft == "Select"){
//         $('.pdhide').hide();
//       }else{$('.pdhide').show();}

//       let method = $(this).data("method");
//       if(method == "Email later"){
//         $(".elater,.uploaded_edit").show();
//         $(".uagain").hide();
//         $('.previous2').addClass("newprv4");
//         $('.previous2').removeClass("previous2");
//         $(".newprv4").click(function(){
//         $('.newprv4').addClass("previous2");
//         $('.newprv4').removeClass("newprv4");
//         $("#step6,#step5,#step3").hide();
//         $("#step4").show();			
//         });
//       }else if(method == "Upload File"){
//         $(".elater").hide();
//         $(".uagain,.uploaded_edit").show();
//         $('.previous2').addClass("newprv5");
//         $('.previous2').removeClass("previous2");
//         $(".newprv5").click(function(){
//         $('.newprv5').addClass("previous2");
//         $('.newprv5').removeClass("newprv5");
//         $("#step6,#step4,#step3").hide();
//         $("#step5").show();        
//         });
//       }

//       $('.result1').html(width);

//       var sum = 0;
//       $("input:checked").each(function(){
//         let rewyteyr  = $(this);
//         if(rewyteyr.attr("data-price")){
//           let sadfsd = rewyteyr.attr("data-price");
//           sum += parseInt(sadfsd);
//           $('.result4').html(sum);    
//           var sum1=$('.result4').html();
//           $('#hidden_txt').val(sum1);
//         }
//       });

//       $("#grey").click(function(){
//         $(".img").addClass("intro");
//         $(".img_brown").addClass("intro");
//         $(".img_green").addClass("intro");
//         $(".img_grey").removeClass("intro");
//       });

//       $("#brown").click(function(){
//         $(".img").addClass("intro");
//         $(".img_grey").addClass("intro");
//         $(".img_green").addClass("intro");
//         $(".img_brown").removeClass("intro");
//       });

//       $("#green").click(function(){
//         $(".img").addClass("intro");
//         $(".img_grey").addClass("intro");
//         $(".img_brown").addClass("intro");
//         $(".img_green").removeClass("intro");
//       });

//       $("#stp5").click(function(){
//         $(".img_grey").addClass("intro");
//         $(".img_brown").addClass("intro");
//         $(".img_green").addClass("intro");
//         $("#img").removeClass("intro");
//       });

//     });


//     $('.sss').find(".hid").addClass("prdclass");   
//     $(document).ready(function(){
//       $('#btnn').click(function(){
//         $('body').addClass('overflow_hide');
//         var color2=$("input[name='Color']:checked").val();
//         $('.hiddencolor').text(color2);
//       });
//       $('.close[type="button"]').click(function(){
//         $('body').removeClass('overflow_hide');
//       });
//     });


//     $(window).on("load",function(){
//       var titll = $(".close").data("ptitle");
//       var img =$(".is-active > modal-opener > div > img").attr('src');
//       $(".submit").click(function(e){
//         e.preventDefault();
//         var color=$("input[name='Color']:checked").val();
//         var price=$('#hidden_txt').val();
//         var width=$("input[name='radioName']:checked").val();
//         var prescription=$("input[name='radioName1']:checked").val();
//         var strength=$("input[name='radioName2']:checked").val();
//         var glass_color=$('#hidden_txt1').val();
//         var glass_type = $("input[name='radioName6']:checked").data("value2");
//         var material=$("input[name='radioName3']:checked").val();     
//         var img_url=$('#hidnurl').text();

//         $.ajax({
//           type: "POST",
//           // url: "http://localhost/Api/curl1.php",
//           url: "https://targetconstruction.ca/new/curl1.php",
//           data: {
//             "price": price,
//             "width": width,
//             "titll": titll,
//             "img": "https:" + img,
//             "color": color
//           },
//           dataType: "json",
//           success: function(data) {
//             var abc = data.product.variants[0].id;
//             var product_id = data.product.id;
//             console.log(abc);
//             setTimeout(function(){
//             jQuery.post('/cart/add.js', {
//               quantity: 1,
//               id: abc,
//               properties: {
//                 'Frame Width': width,
//                 'Prescription type': prescription,
//                 'Magnification Strength': strength,
//                 'Lens Type': glass_type,
//                 'Lens Material': material,
//                 'Uploaded Image': img_url
//               }
//             }, function() {
//               window.location.href = "/cart";
//             }
//             );
//             },350);
//           }
//         });
//       });  
//     });   

//     $(".prv").click(function(){
//       setTimeout(function(){
//         var sum = 0;
//         $("input:checked").each(function(){
//           let rewyteyr  = $(this);
//           if(rewyteyr.attr("data-price")){
//             let sadfsd = rewyteyr.attr("data-price");
//             sum += parseInt(sadfsd);
//             $('.result4').html(sum);    
//             var sum1=$('.result4').html();
//             $('#hidden_txt').val(sum1);
//           }
//         });
//       },10);
//     });

 
      
//     $(".next").prop('disabled', true);
//     $('.grey,.brown,.green').click(function() {
//       $(".next").prop('disabled', false);
//     });

//     $(".newnext").prop('disabled', true);

//     $('.submit').click(function(){
//       $('.add_to_cart_load').addClass('show');
//     });

//     if($('#file').click(function(){
//       $('.imgmsg').hide();
//     }));

//     $(".prv,.ass1").click(function(){
//       $(".lup").each(function(){
//         let sdf = $(this);
//         if(sdf.is(":checked")){
//           let dfd =  sdf.attr("data-pd");
//           $(".sdfgsd").each(function(){
//             let dsfsds = $(this),
//                 dsfsds2 = dsfsds.attr("data-pf");
//             if(dfd == dsfsds2){
//               dsfsds.show().siblings(".sdfgsd").hide();
//             }
//           });
//         }
//       });
//     });
    
//     $('.lup').click(function(){
//     var dsgdf=$("input[name='radioN2']:checked").val();
//       if(dsgdf == "dualpd"){
//         $('.sinle').html($('.sinle').html().replace('selected',''));
//       }else{
//         $('.dul').html($('.dul').html().replace('selected',''));
//       }
//     });
    
//     $('.radioName2').click(function(){
// 	var sdsjsb=$("input[name='radioN1']:checked").val();
//       if(sdsjsb =="Email later"){
//       $('.dul,.sinle').html($('.dul,.sinle').html().replace('selected',''));
//       }
//     });


// $('#btnn').click(function(e){
//   e.preventDefault();
//   $('.qqqq').hide();
//   $('.zzzz').show(); 
//   });

// $('.close').click(function(e){
//   e.preventDefault();
//   $('.qqqq').show();
//   $('.zzzz').hide();
//   $("#step1").show();
//   $("#step5,#step4,#step3,#step2").hide();
//   $('.step_list input:checked').removeAttr('checked');
//   $("#file").val('');
//   $(".file_uploaded_alert").text('');
// });


// $(document).ready(function(){
//   $("#file").change(function(){
//     $('.add_to_cart_load').addClass('show');
//     $('.file_uploaded_alert').text();
//     $('#hidnurl').val();
//     $(".newnext").prop('disabled', true);
//     var fd = new FormData();
//     var files = $('#file')[0].files;
//     console.log(files);
//     if(files.length > 0 ){
//       fd.append('file',files[0]);

//       $.ajax({
//         // url: 'http://localhost/Api/upload.php',
//         url: "https://targetconstruction.ca/new/upload.php",
//         type: 'post',
//         data: fd,
//         contentType: false,
//         processData: false,
//         success: function(response){
//           if(response == 0 ){
//             $('.file_uploaded_alert').text('File Name Already Exits');
//             $('.add_to_cart_load').removeClass('show');
//           }
//           else if(response == 1){
//             $('.file_uploaded_alert').text('File Size Should be less than 1 MB.');
//             $('.add_to_cart_load').removeClass('show');
//           }
//           else if(response == 2){
//             $('.file_uploaded_alert').text('Sorry, only JPG, JPEG, PNG & GIF files are allowed.');
//             $('.add_to_cart_load').removeClass('show');
//           }
//           else{
//             $('.imgmsg').show();
//             $(".newnext").prop('disabled', false);
//             $(".div12").html(response);
//             var cc1c=$('.getimg').text();
//             $('#hidnurl').html(cc1c);
//             $('.add_to_cart_load').removeClass('show');
// 			$('.file_uploaded_alert').text('File Uploaded');
//           }
//         }
//       });
//     }else{
//       $('.file_uploaded_alert').text('Please Select a File');
//       $('.add_to_cart_load').removeClass('show');
//     }
//   });
// });



















document.addEventListener('DOMContentLoaded', function() {
  // Helper functions
  function $(selector) {
    return document.querySelectorAll(selector);
  }

  function addClass(element, className) {
    if (element.length) {
      element.forEach(el => el.classList.add(className));
    } else {
      element.classList.add(className);
    }
  }

  function removeClass(element, className) {
    if (element.length) {
      element.forEach(el => el.classList.remove(className));
    } else {
      element.classList.remove(className);
    }
  }

  function toggleClass(element, className) {
    if (element.length) {
      element.forEach(el => el.classList.toggle(className));
    } else {
      element.classList.toggle(className);
    }
  }

  function hasClass(element, className) {
    return element.classList.contains(className);
  }

  function show(element) {
    element.style.display = 'block';
  }

  function hide(element) {
    element.style.display = 'none';
  }

  function hideAll(elements) {
    elements.forEach(el => hide(el));
  }

  function animateProgressbar(percentageCompleted) {
    document.getElementById('innerdiv').style.width = percentageCompleted + "%";
  }

  // Main event listener for radio buttons and buttons
  document.addEventListener('click', function(event) {
    const target = event.target;
    if (target.matches('input[type="radio"], input[type="button"]')) {
      const step = target.dataset.id;
      const steps = document.querySelectorAll(".step_list").length;

      document.querySelectorAll(".step_list").forEach(function(stepList) {
        const fieldId = stepList.id;
        if (step == fieldId) {
          show(stepList);
          stepList.parentNode.querySelectorAll(".step_list").forEach(sibling => {
            if (sibling !== stepList) hide(sibling);
          });

          const fieldsetIndex = stepList.dataset.index;
          const percent = parseFloat(100 / steps) * fieldsetIndex;
          animateProgressbar(percent);

          document.querySelector(".submit")?.addEventListener('click', function(e) {
            e.preventDefault();
            animateProgressbar(100);
          });
        }
      });

      // Previous button handlers
      document.querySelector(".previous")?.addEventListener('click', function() {
        hide(document.getElementById("step2"));
        show(document.getElementById("step1"));
        const percent = parseFloat(100 / steps) * 0;
        animateProgressbar(percent);
      });

      document.querySelector(".previous1")?.addEventListener('click', function() {
        hide(document.getElementById("step3"));
        show(document.getElementById("step2"));
        const percent = parseFloat(100 / steps) * 1;
        animateProgressbar(percent);
        document.querySelectorAll('input:checked').forEach(input => input.removeAttribute('checked'));
      });

      document.querySelector(".previous2")?.addEventListener('click', function() {
        hide(document.getElementById("step6"));
        show(document.getElementById("step5"));
        hideAll(document.querySelectorAll('.xaza'));
        show(document.querySelector(".cxcxz"));
        document.querySelectorAll("#id3,#id4,#id5,#id6").forEach(el => el.checked = false);
        const percent = parseFloat(100 / steps) * 4;
        animateProgressbar(percent);
      });

      document.querySelector(".previous3")?.addEventListener('click', function() {
        hide(document.getElementById("step7"));
        show(document.getElementById("step6"));
        const percent = parseFloat(100 / steps) * 5;
        animateProgressbar(percent);
      });

      document.querySelector(".previous4")?.addEventListener('click', function() {
        document.querySelectorAll("#id14,#id15").forEach(el => el.checked = false);
        hide(document.getElementById("step8"));
        show(document.getElementById("step6"));
        const percent = parseFloat(100 / steps) * 6;
        animateProgressbar(percent);
      });

      document.querySelector(".previous5")?.addEventListener('click', function() {
        document.getElementById("id11").checked = false;
        hide(document.getElementById("step9"));
        show(document.getElementById("step8"));
        const percent = parseFloat(100 / steps) * 7;
        animateProgressbar(percent);
      });

      // New previous handlers
      document.querySelector(".newprevious1")?.addEventListener('click', function() {
        hide(document.getElementById("step4"));
        show(document.getElementById("step2"));
        const percent = parseFloat(100 / steps) * 2;
        animateProgressbar(percent);
      });

      document.querySelector(".newprevious2")?.addEventListener('click', function() {
        hide(document.getElementById("step5"));
        hide(document.getElementById("step9"));
        show(document.getElementById("step4"));
        const percent = parseFloat(100 / steps) * 3;
        animateProgressbar(percent);
      });

      // Next button handlers
      document.querySelector(".newnext")?.addEventListener('click', function() {
        hide(document.getElementById("step5"));
        show(document.getElementById("step6"));
        const percent = parseFloat(100 / steps) * 5;
        animateProgressbar(percent);
      });

      document.querySelector(".next")?.addEventListener('click', function() {
        hide(document.getElementById("step7"));
        show(document.getElementById("step8"));
        const percent = parseFloat(100 / steps) * 7;
        animateProgressbar(percent);
      });

      // Other button handlers
      document.querySelector('.uagain')?.addEventListener('click', function() {
        hide(document.getElementById("step9"));
        show(document.getElementById("step5"));
      });

      document.querySelector(".back")?.addEventListener('click', function() {
        hide(document.getElementById("step9"));
        show(document.getElementById("step1"));
        show(document.querySelector(".cxcxz"));
        const percent = parseFloat(100 / steps) * 0;
        animateProgressbar(percent);
      });

      // Prescription type handling
      const prescription = target.dataset.pres;
      if (prescription === "Single-vision") {
        hideAll(document.querySelectorAll('.rtr13,.rtr14,.rtd10'));
        show(document.querySelector('.rtr12'));
      } else if (prescription === "Progressives") {
        hideAll(document.querySelectorAll('.rtr12,.rtr14,.rtd10'));
        show(document.querySelector('.rtr13'));
      } else if (prescription === "Readers") {
        hideAll(document.querySelectorAll('.rtr12,.rtr13,.rtd10,.cxcxz'));
        show(document.querySelector('.rtr14'));
      } else if (prescription === "Non-prescription") {
        hideAll(document.querySelectorAll('.rtr12,.rtr13,.rtr14,.cxcxz,.uploaded_edit'));
        show(document.querySelector('.rtd10'));
        addClass(document.querySelector('.previous2'), "newprv3");
        removeClass(document.querySelector('.previous2'), "previous2");
        
        document.querySelector(".newprv3")?.addEventListener('click', function() {
          addClass(document.querySelector('.newprv3'), "previous2");
          removeClass(document.querySelector('.newprv3'), "newprv3");
          hideAll(document.querySelectorAll("#step6,#step5,#step4,#step3"));
          show(document.getElementById("step2"));
        });
      }

      // Material handling
      const mat = target.dataset.mat;
      if (mat === "Polycarbonate") {
        hide(document.querySelector('.rtr2'));
        show(document.querySelector('.rtr11'));
      } else if (mat === "1.67 High Index") {
        hide(document.querySelector('.rtr11'));
        show(document.querySelector('.rtr2'));
      }

      // Lens type handling
      const lensType = target.dataset.value2;
      if (lensType === "classic") {
        hideAll(document.querySelectorAll('.rtd12,.rtd13'));
        show(document.querySelector('.rtd11'));
      } else if (lensType === "Blue-Light-filtering") {
        hideAll(document.querySelectorAll('.rtd11,.rtd13'));
        show(document.querySelector('.rtd12'));
      } else if (lensType === "light-responsive") {
        hideAll(document.querySelectorAll('.rtd11,.rtd12'));
        show(document.querySelector('.rtd13'));
      }

      // Lens color handling
      const lensColor = target.dataset.value3;
      if (lensColor !== undefined) {
        document.querySelector('.colorresult').textContent = lensColor;
        document.getElementById('hidden_txt1').value = lensColor;
        addClass(document.querySelector('.previous4'), "newprv2");
        removeClass(document.querySelector('.previous4'), "previous4");
        
        document.querySelector(".newprv2")?.addEventListener('click', function() {
          hide(document.getElementById("step8"));
          hide(document.getElementById("step6"));
          show(document.getElementById("step7"));
          addClass(document.querySelector('.newprv2'), "previous4");
          removeClass(document.querySelector('.previous4'), "newprv2");
        });
      }

      // Strength handling
      const strength = target.dataset.value;
      if (strength !== undefined) {
        show(document.querySelector('.xaza'));
        document.querySelector('.readresult').textContent = strength;
        addClass(document.querySelector('.newprevious1'), "newprv");
        removeClass(document.querySelector('.newprevious1'), "newprevious1");
        
        document.querySelector(".newprv")?.addEventListener('click', function() {
          addClass(document.querySelector('.newprv'), "newprevious1");
          removeClass(document.querySelector('.newprv'), "newprv");
          hide(document.getElementById("step4"));
          hide(document.getElementById("step2"));
          show(document.getElementById("step3"));
        });
      }

      // PD handling
      const pd = target.dataset.pd;
      if (pd === "dualpd") {
        show(document.querySelector('.fordual'));
        hide(document.querySelector('.forsingle'));
      } else if (pd !== "dualpd") {
        hide(document.querySelector('.fordual'));
        show(document.querySelector('.forsingle'));
      }

      // Single option handling
      const singleOption = document.getElementById('singleoption').value;
      document.querySelector('.readresult1').textContent = singleOption;
      if (singleOption === "Select") {
        hide(document.querySelector('.readresult1'));
        hide(document.querySelector('.hidesinglepd'));
      } else {
        show(document.querySelector('.readresult1'));
        show(document.querySelector('.hidesinglepd'));
      }

      // Dual option handling
      const dualOptionLeft = document.getElementById('dualoptionleft').value;
      document.querySelector('.readresult2').textContent = dualOptionLeft;

      const dualOptionRight = document.getElementById('dualoptionright').value;
      document.querySelector('.readresult3').textContent = dualOptionRight;
      
      if (dualOptionRight === "Select" || dualOptionLeft === "Select") {
        hideAll(document.querySelectorAll('.readresult2,.readresult3,.hidedualpdl,.hidedualpdr'));
      } else {
        showAll(document.querySelectorAll('.readresult2,.readresult3,.hidedualpdl,.hidedualpdr'));
      }

      if (singleOption === "Select" && dualOptionRight === "Select") {
        hide(document.querySelector('.pdhide'));
      } else if (singleOption === "Select" && dualOptionLeft === "Select") {
        hide(document.querySelector('.pdhide'));
      } else {
        show(document.querySelector('.pdhide'));
      }

      // Method handling
      const method = target.dataset.method;
      if (method === "Email later") {
        show(document.querySelector(".elater"));
        show(document.querySelector(".uploaded_edit"));
        hide(document.querySelector(".uagain"));
        addClass(document.querySelector('.previous2'), "newprv4");
        removeClass(document.querySelector('.previous2'), "previous2");
        
        document.querySelector(".newprv4")?.addEventListener('click', function() {
          addClass(document.querySelector('.newprv4'), "previous2");
          removeClass(document.querySelector('.newprv4'), "newprv4");
          hideAll(document.querySelectorAll("#step6,#step5,#step3"));
          show(document.getElementById("step4"));
        });
      } else if (method === "Upload File") {
        hide(document.querySelector(".elater"));
        show(document.querySelector(".uagain"));
        show(document.querySelector(".uploaded_edit"));
        addClass(document.querySelector('.previous2'), "newprv5");
        removeClass(document.querySelector('.previous2'), "previous2");
        
        document.querySelector(".newprv5")?.addEventListener('click', function() {
          addClass(document.querySelector('.newprv5'), "previous2");
          removeClass(document.querySelector('.newprv5'), "newprv5");
          hideAll(document.querySelectorAll("#step6,#step4,#step3"));
          show(document.getElementById("step5"));
        });
      }

      // Width handling
      const width = target.dataset.value1;
      document.querySelector('.result1').innerHTML = width;

      // Calculate sum of checked items
      let sum = 0;
      document.querySelectorAll("input:checked").forEach(function(checkedInput) {
        if (checkedInput.dataset.price) {
          sum += parseInt(checkedInput.dataset.price);
          document.querySelector('.result4').innerHTML = sum;
          const sum1 = document.querySelector('.result4').innerHTML;
          document.getElementById('hidden_txt').value = sum1;
        }
      });

      // Color selection handlers
      document.getElementById("grey")?.addEventListener('click', function() {
        addClass(document.querySelector(".img"), "intro");
        addClass(document.querySelector(".img_brown"), "intro");
        addClass(document.querySelector(".img_green"), "intro");
        removeClass(document.querySelector(".img_grey"), "intro");
      });

      document.getElementById("brown")?.addEventListener('click', function() {
        addClass(document.querySelector(".img"), "intro");
        addClass(document.querySelector(".img_grey"), "intro");
        addClass(document.querySelector(".img_green"), "intro");
        removeClass(document.querySelector(".img_brown"), "intro");
      });

      document.getElementById("green")?.addEventListener('click', function() {
        addClass(document.querySelector(".img"), "intro");
        addClass(document.querySelector(".img_grey"), "intro");
        addClass(document.querySelector(".img_brown"), "intro");
        removeClass(document.querySelector(".img_green"), "intro");
      });

      document.getElementById("stp5")?.addEventListener('click', function() {
        addClass(document.querySelector(".img_grey"), "intro");
        addClass(document.querySelector(".img_brown"), "intro");
        addClass(document.querySelector(".img_green"), "intro");
        removeClass(document.getElementById("img"), "intro");
      });
    }
  });

  // Initialize product class
  document.querySelectorAll('.sss .hid').forEach(el => addClass(el, "prdclass"));

  // Modal handling
  document.getElementById('btnn')?.addEventListener('click', function() {
    addClass(document.body, 'overflow_hide');
    const color2 = document.querySelector("input[name='Color']:checked")?.value;
    if (color2) document.querySelector('.hiddencolor').textContent = color2;
  });

  document.querySelectorAll('.close[type="button"]').forEach(btn => {
    btn.addEventListener('click', function() {
      removeClass(document.body, 'overflow_hide');
    });
  });

  // Form submission handling
  window.addEventListener('load', function() {
    const titll = document.querySelector(".close")?.dataset.ptitle;
    const img = document.querySelector(".is-active .modal-opener div img")?.src;
    
    document.querySelector(".submit")?.addEventListener('click', function(e) {
      e.preventDefault();
      const color = document.querySelector("input[name='Color']:checked")?.value;
      const price = document.getElementById('hidden_txt')?.value;
      const width = document.querySelector("input[name='radioName']:checked")?.value;
      const prescription = document.querySelector("input[name='radioName1']:checked")?.value;
      const strength = document.querySelector("input[name='radioName2']:checked")?.value;
      const glassColor = document.getElementById('hidden_txt1')?.value;
      const glassType = document.querySelector("input[name='radioName6']:checked")?.dataset.value2;
      const material = document.querySelector("input[name='radioName3']:checked")?.value;
      const imgUrl = document.getElementById('hidnurl')?.textContent;

      fetch("https://targetconstruction.ca/new/curl1.php", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price: price,
          width: width,
          titll: titll,
          img: "https:" + img,
          color: color
        })
      })
      .then(response => response.json())
      .then(data => {
        const abc = data.product.variants[0].id;
        const productId = data.product.id;
        console.log(abc);
        
        setTimeout(function() {
          fetch('/cart/add.js', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              quantity: 1,
              id: abc,
              properties: {
                'Frame Width': width,
                'Prescription type': prescription,
                'Magnification Strength': strength,
                'Lens Type': glassType,
                'Lens Material': material,
                'Uploaded Image': imgUrl
              }
            })
          })
          .then(() => {
            window.location.href = "/cart";
          });
        }, 350);
      });
    });
  });

  // Recalculate sum when navigating back
  document.querySelectorAll(".prv").forEach(el => {
    el.addEventListener('click', function() {
      setTimeout(function() {
        let sum = 0;
        document.querySelectorAll("input:checked").forEach(function(checkedInput) {
          if (checkedInput.dataset.price) {
            sum += parseInt(checkedInput.dataset.price);
            document.querySelector('.result4').innerHTML = sum;
            const sum1 = document.querySelector('.result4').innerHTML;
            document.getElementById('hidden_txt').value = sum1;
          }
        });
      }, 10);
    });
  });

  // Enable/disable next buttons based on selection
  document.querySelectorAll(".next").forEach(btn => btn.disabled = true);
  document.querySelectorAll('.grey,.brown,.green').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll(".next").forEach(btn => btn.disabled = false);
    });
  });

  document.querySelectorAll(".newnext").forEach(btn => btn.disabled = true);

  // Show loading indicator on submit
  document.querySelectorAll('.submit').forEach(btn => {
    btn.addEventListener('click', function() {
      addClass(document.querySelector('.add_to_cart_load'), 'show');
    });
  });

  // File upload handling
  document.getElementById('file')?.addEventListener('change', function() {
    addClass(document.querySelector('.add_to_cart_load'), 'show');
    document.querySelector('.file_uploaded_alert').textContent = '';
    document.getElementById('hidnurl').value = '';
    document.querySelectorAll(".newnext").forEach(btn => btn.disabled = true);
    
    const fd = new FormData();
    const files = document.getElementById('file').files;
    
    if (files.length > 0) {
      fd.append('file', files[0]);

      fetch("https://targetconstruction.ca/new/upload.php", {
        method: 'POST',
        body: fd
      })
      .then(response => response.text())
      .then(response => {
        if (response == 0) {
          document.querySelector('.file_uploaded_alert').textContent = 'File Name Already Exits';
          removeClass(document.querySelector('.add_to_cart_load'), 'show');
        } else if (response == 1) {
          document.querySelector('.file_uploaded_alert').textContent = 'File Size Should be less than 1 MB.';
          removeClass(document.querySelector('.add_to_cart_load'), 'show');
        } else if (response == 2) {
          document.querySelector('.file_uploaded_alert').textContent = 'Sorry, only JPG, JPEG, PNG & GIF files are allowed.';
          removeClass(document.querySelector('.add_to_cart_load'), 'show');
        } else {
          show(document.querySelector('.imgmsg'));
          document.querySelectorAll(".newnext").forEach(btn => btn.disabled = false);
          document.querySelector(".div12").innerHTML = response;
          const cc1c = document.querySelector('.getimg').textContent;
          document.getElementById('hidnurl').innerHTML = cc1c;
          removeClass(document.querySelector('.add_to_cart_load'), 'show');
          document.querySelector('.file_uploaded_alert').textContent = 'File Uploaded';
        }
      });
    } else {
      document.querySelector('.file_uploaded_alert').textContent = 'Please Select a File';
      removeClass(document.querySelector('.add_to_cart_load'), 'show');
    }
  });

  // Modal open/close handlers
  document.getElementById('btnn')?.addEventListener('click', function(e) {
    e.preventDefault();
    hide(document.querySelector('.qqqq'));
    show(document.querySelector('.zzzz'));
  });

  document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      show(document.querySelector('.qqqq'));
      hide(document.querySelector('.zzzz'));
      show(document.getElementById("step1"));
      hideAll(document.querySelectorAll("#step5,#step4,#step3,#step2"));
      document.querySelectorAll('.step_list input:checked').forEach(input => input.checked = false);
      document.getElementById("file").value = '';
      document.querySelector(".file_uploaded_alert").textContent = '';
    });
  });

  // PD selection handling
  document.querySelectorAll(".prv,.ass1").forEach(el => {
    el.addEventListener('click', function() {
      document.querySelectorAll(".lup").forEach(input => {
        if (input.checked) {
          const dfd = input.dataset.pd;
          document.querySelectorAll(".sdfgsd").forEach(el => {
            const dsfsds2 = el.dataset.pf;
            if (dfd == dsfsds2) {
              show(el);
              el.parentNode.querySelectorAll(".sdfgsd").forEach(sibling => {
                if (sibling !== el) hide(sibling);
              });
            }
          });
        }
      });
    });
  });

  // Radio button change handlers
  document.querySelectorAll('.lup').forEach(input => {
    input.addEventListener('change', function() {
      const dsgdf = document.querySelector("input[name='radioN2']:checked")?.value;
      if (dsgdf == "dualpd") {
        document.querySelector('.sinle').innerHTML = document.querySelector('.sinle').innerHTML.replace('selected', '');
      } else {
        document.querySelector('.dul').innerHTML = document.querySelector('.dul').innerHTML.replace('selected', '');
      }
    });
  });

  document.querySelectorAll('.radioName2').forEach(input => {
    input.addEventListener('change', function() {
      const sdsjsb = document.querySelector("input[name='radioN1']:checked")?.value;
      if (sdsjsb == "Email later") {
        document.querySelector('.dul').innerHTML = document.querySelector('.dul').innerHTML.replace('selected', '');
        document.querySelector('.sinle').innerHTML = document.querySelector('.sinle').innerHTML.replace('selected', '');
      }
    });
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













// <button class="ad_to_cart_coll">addddd </button>

// $('.copy_footer').click(function(){  
//     var varint = '47602040373580';
//        $.ajax({
//         type: "POST",
//         url: "/cart/add.js",
//         data: {
//           id:varint,
//           quantity:1
//         },
//         dataType: "json",
//         success: function(data) {
//             var itemqty = data.quantity;
//             var qtyText = itemqty > 0 ? itemqty : '';
//             $('.hicon__value span').text(qtyText);
//             document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
//                 bubbles: true  // this code is for Prestige theme, to refresh the cart
//             }));
//             document.querySelector("#sidebar-cart").setAttribute("aria-hidden", "false")
//         }, 
//       });
// })

