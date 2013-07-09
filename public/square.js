$(document).ready(function() {
  how_many_forms = $('form').length;

  console.log(how_many_forms);
});

$('select').change(function () {
  console.log("The times, they are a-changin' ");
});


// grab the select elements' container.
// 'form' will do nicely in this case
 // `on` lets us specify 3 things:
  // the event we are watching for ('change'),
  // the element we are watching on ('select'), and
  // the function to call when our the element changes (our anonymous function, here)
var total = 0 
$('form').on('change', 'select', function(){
    // alert("my my, how you've changed");
    //  alert($('select').first().html());
   var menu = $('select').first().html();
   $('form').append('<select>' + menu + '</select>');
    // alert($(this).val()); 
   var drink_numbers = $('select').length-1
   $('#drinks').text(drink_numbers);
   drinks_array = $('select')
   total = total + Number($(this).find(':selected').attr('data-price')); 
   $('#cost').text("$"+(total/100).toFixed(2))

  });


$('#form').submit(function() {
 alert("Thanks! Your order will be ready in 10 minutes.");
 event.preventDefault(); 
 $.post('/shop',total, function(response) {
 // alert('Success!');
 $('#form').append("<br><br>"+response);
 });

}); 

// alert($('select'));
// function calculateTotal {

// $('select').each(function() {
//  var selection = $(this).find(":selected"); 
//  var total_cost = total_cost + Number($(selection).attr("data-price"))); 
//  var my_price = Number($(selection).attr("data-price")));
//  console.log("Selection:" + my_price)
//  console.log("Total_Cost:" + total_cost)
//  console.log(total_cost); 
// });

// total_cost = total_cost/100; 
// total_cost = (total_cost).toFixed(2);
// }

   // $('select').each function () {
   //   selection = $(this).find(":sele")
   // }); 


  // console.log($('form').append($('select').first().html()));

  


