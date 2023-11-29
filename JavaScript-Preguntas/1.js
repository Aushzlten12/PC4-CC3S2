let User = function (usuario, password) {
  this.usuario = usuario;
  this.password = password;
  this.checkPassword = function(password) {
    if (password.length === 0) {
      throw new Error("Invalid password")
    }
  } 
};

let user1 = new User("root", "root");
console.log(user1);
