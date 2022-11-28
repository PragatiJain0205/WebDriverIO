class LoginPage{

    get username(){
    return  $('#username');
    }
    get password(){
    return   $('#password');
    }
    get signIn(){
    return   $("#signInBtn");
    }
    get alert(){
    return    $("div[class='alert alert-danger col-md-12'] strong");
    }
    get textInfo(){
    return $("//p[@class='text-center text-white']");
    }
    
    async Login(username, password){
     await this.username.setValue(username);
     await this.password.setValue(password);
     await this.signIn.click();
     }
    
      }
     module.exports=new LoginPage()