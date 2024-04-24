const form = document.querySelector(".form"),
clock = document.querySelector('.clock'),
clockBth = document.querySelector('.clock-Active'),
bird = document.querySelector('.bird'),
separation =document.querySelector('.separation')

function clockActive(){
    clockBth.classList.toggle('hade')  
    document.querySelector('.clockImg').classList.toggle('img-active')
}
function clockBthActive(e){
    clockActive()
    document.querySelector('.clock-text').textContent =e.target.textContent
    if(e.target.textContent=='PM'){
document.querySelector('.clockIcon').style="margin-top:40px"
    }else{
        document.querySelector('.clockIcon').style="margin-top:0"
    }  
}
let counter =4 
bird.addEventListener('click',()=>{
counter++
document.querySelector('.peopleCount').textContent =counter
})

  separation.addEventListener('click',()=>{
    if(counter>3){
      document.querySelector('.peopleCount').textContent =counter--
    
    }

})

clockBth.addEventListener('click',clockBthActive)
clock.addEventListener('click',clockActive)

function validation(e) {
    let count =0
    e.preventDefault();
    const name = document.querySelector("#name"),
    email = document.querySelector("#email"),
    date = document.querySelectorAll(".dateNumber");
    input = document.querySelectorAll('.inputs'),
    time = document.querySelectorAll('.time')
  if (name.value == "" || name.value.length < 3) {
    name.classList.add("errorInput");
    name.nextElementSibling.textContent = "This field is incomplete";
  } else {
    name.classList.remove("errorInput");
    name.nextElementSibling.textContent = "";
    count ++
  }
  if (
    email.value == "" ||
    (!email.value.includes("@") && !email.value.includes("."))
  ) {
    email.classList.add("errorInput");
    email.nextElementSibling.textContent = "This field is incomplete";
  } else {
    email.classList.remove("errorInput");
    email.nextElementSibling.textContent = "";
    count ++
  }

  //date validation
  let newDate = new Date(),
  month =newDate.getMonth()+1

  let dateArr = [];
  if (date[0].value == "" || date[0].value > 12 || Number(date[0].value) <month ||Number(date[0].value) <=0) {
    dateArr.push(false);

  }if(date[1].value == "" || date[1].value > 31|| date[1].value <=0) {
    dateArr.push(false);
   }if (+date[2].value !== newDate.getFullYear()||date[2].value =="") {
     dateArr.push(false)
}
    else {
    dateArr.push(true);
    count++
  }
  let result =dateArr.every((item)=>item==1);
 if(result){
    date.forEach(item=>{
        item.classList.remove("errorInput")
    })
    document.querySelector('.dateError').textContent =""
    document.querySelector('.inputTitle').style="color:black;"
 }else{
    date.forEach(item=>{
        item.classList.add("errorInput")
    })
    document.querySelector('.dateError').textContent ="This field is incomplete"
    document.querySelector('.inputTitle').style="color:red"

 }
//time validation
if(time[0].value ==""||+time[0].value >12||+time[0].value <0||time[1].value ==""||+time[1].value >59||+time[1].value <0){
  time.forEach(item=>{
    item.classList.add("errorInput")
  })
  document.querySelector('.timeError').textContent = "This field is incomplete";
  document.querySelector('.timeTitle').style="color:red;"
}else{
    time.forEach(item=>{
        item.classList.remove("errorInput")
      })
   
    document.querySelector('.timeError').textContent = ""; 
    document.querySelector('.timeTitle').style="color:black;"
    count++
}
if(count ==4){
    e.preventDefault()
    document.querySelector('.peopleCount').textContent =4
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
      input.forEach(item=>{
        item.value =""
      })
}

}   
form.addEventListener("submit",validation);
