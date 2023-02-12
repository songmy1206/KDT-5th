//if문
let name = "mys";

if(name === "smy"){
  console.log("yes");
}else{
  console.log("no");
}

name === "smy" ? console.log("yes") : console.log("no");

//3항 연산자
name === "smy" ? console.log("smy-yes") : name === "mys" ? console.log("mys-yes") : console.log("?");