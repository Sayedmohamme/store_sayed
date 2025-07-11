
 





function newFunction() {
    console.log('hi');
    // This click handler opens the sign-up modal when the sign-up button is clicked
    $(".signUpButton").click(function () {
        console.log('hi from the sign up button');
        $("#signUpModal").style("display", "block");
    });

    $('#quantityOfUnicornsForm').submit(function (e) {
        e.preventDefault();
        var numberOfUnicorns = $("#quantityOfUnicorns option:selected").text();
        console.log($("#quantityOfUnicorns option:selected").text());
        $("#cartItems").text(numberOfUnicorns);
    });
}
// $('#signUpBtn').modal('hide');

                        


     