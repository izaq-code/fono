$(document).ready(function () {
    $('#cadastro-google').click(function (e) {
        e.preventDefault();

        $.ajax({
            url: 'PHP/callback-cad.php',
            type: 'GET',
            success: function(response) {
                var data = JSON.parse(response);
                window.location.href = data.redirectUrl;
            },
            error: function(xhr, status, error) {
                console.error(error);
            }
        });

    });
});