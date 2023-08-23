function sign(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value

  if (username === "" || password === "" || email ==="") {
      alert("Vui lòng điền đầy đủ thông tin!"); 
      return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  localStorage.setItem("email", email);

  alert("Đăng ký thành công!");

  window.location = "index.html";
}

function login() {

    let username = document.querySelector(".login input[type='text']").value;
    let password = document.querySelector(".login input[type='password']").value;
    
    if (username === "" || password === "") {
      alert("Bạn chưa điền thông tin!");
      return;
    }
    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");
      if (username === storedUsername && password === storedPassword) {
        window.location = "/hunre/home-hunre.html";  
      }else{
      alert("Sai tài khoản hoặc mật khẩu!");
      }
    }
  document.querySelector(".login button").addEventListener("click", login); 
