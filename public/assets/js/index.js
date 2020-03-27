$(document).ready(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    var burger = $(this).siblings()[0];
    ($(this).parent()).animate({
      "margin-left": "100px",
      "margin-bottom": "+=10px",
      opacity: 0.5
    }, 1000, () => {
      $.ajax("/" + id, {
         type: "PUT",
         data: {id}
       }).then(() => {
         console.log("Burger Devoured");
         location.reload();
       })
      }
    );
  });
  
  $(".addBurger").on("submit", function(event) {
    event.preventDefault();
    var burger_name = $("#burger-name").val();
    $.ajax("/", {
      type: "POST",
      data: {burger_name}
    }).then(() => {
      console.log("Burger added.");
      location.reload();
    })
  })
})
