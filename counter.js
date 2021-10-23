 //<!--Counter mit Java Script-->

 // Set the date we're counting down to
 var countDownDate = new Date("Oct 17, 2021 10:00:00").getTime();

 // Update the count down every 1 second
 var x = setInterval(function () {

     // Get todays date and time
     var now = new Date().getTime();

     // Find the distance between now an the count down date
     var distance = countDownDate - now;

     // Time calculations for days, hours, minutes and seconds
     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

     // Output the result in an element with id="tagezaehler"
     //document.getElementById("tagezaehler").innerHTML = days + " Tage, " + hours + " Stunden, " +
     //    minutes + " Minuten,    " + seconds + "   " + "       Sekunden bis zum Start !!! ";

     //neu 
     document.getElementById("tage").innerHTML = days + " Tage, ";

     document.getElementById("stunden").innerHTML = hours + " Stunden, ";


     document.getElementById("minuten").innerHTML =
         minutes + " Minuten,    ";

     document.getElementById("sekunden").innerHTML = seconds + "   " + "       Sekunden! ";

     //Ende neu



     // If the count down is over, write some text 
     if (distance < 0) {
         clearInterval(x);
         document.getElementById("tage").innerHTML = "Wir hoffen, der Lauf hat Ihnen gefallen!";
     }
 }, 1000);



 $(document).ready(function () {
     // Add smooth scrolling to all links in navbar + footer link
     $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
         // Make sure this.hash has a value before overriding default behavior
         if (this.hash !== "") {
             // Prevent default anchor click behavior
             event.preventDefault();

             // Store hash
             var hash = this.hash;

             // Using jQuery's animate() method to add smooth page scroll
             // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
             $('html, body').animate({
                 scrollTop: $(hash).offset().top
             }, 900, function () {

                 // Add hash (#) to URL when done scrolling (default click behavior)
                 window.location.hash = hash;
             });
         } // End if
     });

     $(window).scroll(function () {
         $(".slideanim").each(function () {
             var pos = $(this).offset().top;

             var winTop = $(window).scrollTop();
             if (pos < winTop + 600) {
                 $(this).addClass("slide");
             }
         });
     });
 })