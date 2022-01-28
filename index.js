async function getmesg(){
  try{
    const data=await fetch("https://61f2b82f2219930017f50878.mockapi.io/user",{
      method: "GET",
      headers: {
        contentType: "application/json",
      },
    });
    var mesg1=await data.json();  
  }
  catch(err){
    console.log("Error");
  }
  return mesg1;
}
async function displaymesg(){
  let mesgs=await getmesg();
  let message=document.querySelector(".mesg");
  message.innerHTML="";
  mesgs.forEach((user)=>{
    message.innerHTML+=`
    <ul type="square"><li>
    <h4>${user.subject}</h4></li>
  <li><h6>${user.mail_id}</h6></li>
  <li><p>${user.message}</p></li><ol><hr>
`
  })
}
displaymesg();

async function sendmesg(){
  const mailid=document.querySelector("#add_mail").value;
  const subject=document.querySelector("#subject").value;
  const main_message=document.querySelector("#textarea").value;
  const data=await fetch("https://61f2b82f2219930017f50878.mockapi.io/user",{
    method: "POST",
    body:JSON.stringify({
      mail_id:mailid,
      subject:subject,
      message:main_message,
      status:true,
    }),
    headers: {"Content-Type": "application/json"}
  })
  displaymesg();
  document.querySelector("#add_mail").value="";
  document.querySelector("#subject").value="";
  document.querySelector("#textarea").value="";
}

async function displayData(){
  try{
    const data=await fetch("https://61f2b82f2219930017f50878.mockapi.io/user",{
      method: "GET",
      headers: {
        contentType: "application/json",
      },
    });
    var mesg1=await data.json();  
  }
  catch(err){
    console.log("Error");
  }
  return mesg1;

  displaymesg();
}

async function getEmail(){
  try{
    const data=await fetch("https://61f2b82f2219930017f50878.mockapi.io/user",{
      method: "GET",
      headers: {
        contentType: "application/json",
      },
    });
    var mesg2=await data.json(); 
    var arr=[];
    var mesg3=mesg2.filter(function(user){
      if(user.status ===true){
        arr.push(user);
          return arr;
      }
    })
     console.log(arr);
  }
  catch(err){
    console.log("Error");
  }
  displaymesg(arr);
}
// async function displaymesg1(){
//   let mesgs1=await getEmail();
//   console.log(mesgs1);
//   let message1=document.querySelector(".mesg1");
//   message1.innerHTML="";
//   for(let user1=0;user1<mesgs1.length;user1++){
//     message1.innerHTML+=`
//     <ul type="square"><li>
//     <h4>${user1.subject}</h4></li>
//   <li><h6>${user1.mail_id}</h6></li>
//   <li><p>${user1.message}</p></li><ol><hr>
// `}
// }
// displaymesg1();
async function getdraft(){
  try{
    const data=await fetch("https://61f2b82f2219930017f50878.mockapi.io/user",{
      method: "GET",
      headers: {
        contentType: "application/json",
      },
    });
    var mesg4=await data.json(); 
    var arr=[];
    var mesg5=mesg4.filter(function(user){
      if(user.status ===false){
        arr.push(user);
          return arr;
      }
    }) 
    console.log(arr);
  }
  catch(err){
    console.log("Error");
  }
  displaymesg(arr);
}
// async function displaymesg2(arr){
//   let mesgs2=await getdraft();
//   console.log(mesgs2);
//   let message2=document.querySelector(".mesg2");
//   message2.innerHTML="";
//   for(let user=0;user<20;user++){
//     message2.innerHTML+=`
//     <ul type="square"><li>
//     <h4>${user.subject}</h4></li>
//   <li><h6>${user.mail_id}</h6></li>
//   <li><p>${user.message}</p></li><ol><hr>
// `
//   }
// };
// displaymesg2();
