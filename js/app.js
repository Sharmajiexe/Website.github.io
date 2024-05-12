$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    
    });  
    
    
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    let  bodycontent = document.querySelector('body')
    
    hamberger.addEventListener('click', function(){
        mobileNav.classList.add('open');
    
    });
    
    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');
        
    
    });
    
    
    
    
    // $('.mobile-nav').click(function(e){
    //   e.stopPropagation(); //this call will cancel the execution bubble
    // });
    
    // $('body').click(function(){
    //   $('.mobile-nav').hide(); //hide sidebar when body is clicked
    // });
    });
    
    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      }
    
      $("#toggle").click(function() {
        var elem = $("#toggle").text();
        if (elem == "Read More") {
          //Stuff to do when btn is in the read more state
          $("#toggle").text("Read Less");
          $("#text").slideDown();
        } else {
          //Stuff to do when btn is in the read less state
          $("#toggle").text("Read More");
          $("#text").slideUp();
        }
      });
    
    
      $("#toggle-1").click(function() {
        var elem = $("#toggle-1").text();
        if (elem == "Read More") {
          //Stuff to do when btn is in the read more state
          $("#toggle-1").text("Read Less");
          $("#text-1").slideDown();
        } else {
          //Stuff to do when btn is in the read less state
          $("#toggle-1").text("Read More");
          $("#text-1").slideUp();
        }
      });
    
    
      $("#toggle-2").click(function() {
        var elem = $("#toggle-2").text();
        if (elem == "Read More") {
          //Stuff to do when btn is in the read more state
          $("#toggle-2").text("Read Less");
          $("#text-2").slideDown();
        } else {
          //Stuff to do when btn is in the read less state
          $("#toggle-2").text("Read More");
          $("#text-2").slideUp();
        }
      });
    
       