$(document).ready(function() {

    $(".delBurger").on("click", function(){
        var id = $(this).data("burgerid");
  

    $.ajax("/burgers/" + id, {
        type: "PUT"
        }).then(function() {
    console.log("updated the ID " + id)
    location.reload();
    })
})



    $(".createBurger").on("click", function(){
        var newBurger = $('#newBurger').val().trim();
        $.post('/burgers', {burger: newBurger}, function(data) {
            // if(data){
            //     location.reload();
            // }
        })
    })
})


