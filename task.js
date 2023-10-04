$(document).ready(function () {
    $("#inputForm").submit(function (e) {
        e.preventDefault();

        var name = $("#name").val();
        var email = $("#email").val();
        var tel =$('#tel').val();
        var date = $("#dob").val();
        var occupation = $("#occupation").val();
        var gender = $("input[name='gender']:checked").val();
        var language = new Array(); $("input[name='Language']:checked").each(function() {
			language.push(" " + this.value);
		});
        var martial = $("#martial").val (); 
        var displayValues = $("#displayValues");
        displayValues.html("<p><strong>Name:</strong> " + name + "</p>" +
                            "<p><strong>Email:</strong> " + email + "</p>" +
                            "<p><strong>Mobile No. :</strong> " + tel + "</p>" +
                            "<P><strong>Date Of Birth :</strong>" + date + "</p>" +
                            "<p><strong>Occupation:</strong> " + occupation + "</p>" +
                            "<p><strong>Gender : </strong> " + gender + "</p>" +
                            "<p><strong>Martial Status : </strong>" + martial + "</p>" +
                            "<p><strong>Language : </strong>" + language + "</p>");
        $("#inputForm")[0].reset();    
    });
});