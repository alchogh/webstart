function main(){
  console.log('main')
}


function login(){
  console.log('login')
}

function favicon() {
  console.log("favicon");
 }
 


let handle = {} 
handle['/'] = main
handle['/login'] = login
handle["/favicon.ico"] = favicon;

exports.handle = handle 