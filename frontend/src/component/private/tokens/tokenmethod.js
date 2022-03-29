class token{
 static settoken(token){
 sessionStorage.setItem("token",token);
 }
 static gettoken(){
  return sessionStorage.getItem("token");
 }
 static removetoken(){ 
  sessionStorage.clear();
 }
}

module.exports = token;