$(function() {
    $(".change-devour").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("id");
      var isDevoured = $(this).data("devoured");
      var eat;
        console.log(id)
        if (isDevoured){
            eat = false;
        }
        else{
            eat = true;
        }
        
      var burgerState = {
        devoured: eat
      };
      console.log(burgerState)
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: burgerState
      }).then(
        function() {
          console.log("changed devoured to", burgerState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  

  });
  