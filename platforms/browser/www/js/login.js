document.getElementById('login_button').addEventListener('click', login);

function login() {

    $.ajax({
        url: "http://localhost:8080/Instagram_server/Login",
        type: "POST",
        data: {
            nickname: document.getElementById('inputnnlogin').value, // input  birthday del modal2
            pass: document.getElementById('inputplogin').value // input password del modal2
        },
        success: function (data) {
            console.log(data);
            data = JSON.parse(data);
            // Si no hay error
            if (!data.error) { // si el email no existe
                alert("inicio sesion");
                document.getElementById('inputnnlogin').value = "";
                document.getElementById('inputplogin').value = "";
            } else {
                var error = data.error;
                document.getElementById("register_alert2").style.display = "block";
                document.getElementById("register_alert2").innerHTML = error;
                document.getElementById('inputnnlogin').value = "";
                document.getElementById('inputplogin').value = "";
                console.log(error);
            }
        },
        error: function (err) {
            document.getElementById('inputnnlogin').value = "";
            document.getElementById('inputplogin').value = "";

        }
    });
}