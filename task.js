$(document).ready(function () {
    $("#inputForm").submit(function (e) {
        e.preventDefault();

        var name = $("#name").val();
        var email = $("#email").val();
        var tel =$('#tel').val();
        var occupation = $("#occupation").val();
        var displayValues = $("#displayValues");
        displayValues.html("<p><strong>Name:</strong> " + name + "</p>" +
                            "<p><strong>Email:</strong> " + email + "</p>" +
                            "<p><strong>Mobile No. :</strong> " + tel + "</p>" +
                            "<p><strong>Occupation:</strong> " + occupation + "</p>");
        $("#inputForm")[0].reset();  
    });
});