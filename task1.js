
let name=document.getElementById("formGroupExampleInput")
let form=document.getElementById("forms");
let message1=document.getElementById("emessage");
let email=document.getElementById("exampleFormControlInput1");
let message2=document.getElementById("emailadd");
let add=document.getElementById("inputAddress");
let homes=document.getElementById("home");
let cities=document.getElementById("city");
let citys=document.getElementById("cit");
let states=document.getElementById("state");
let stay=document.getElementById("sta");
let zip=document.getElementById("zipInput");
let zips=document.getElementById("ZipError");
let phone=document.getElementById("exampleInputPhone");
let dropdowns=document.getElementById("dropdown");
let errorMessage=document.getElementById("event");
let addition=document.getElementById("exampleFormControlTextarea1");
let errorMessage3=document.getElementById("em")

form.addEventListener('submit',(e)=>
{
   
  if(name.value===""|| name.value===null)
    {
      e.preventDefault();
      emessage.innerHTML="Name field is required!!"
    }
    if(email.value==""){
        e.preventDefault();
        emailadd.innerHTML="Email field is required";

    }
    if (add.value.trim() === '') {
        homes.innerHTML = 'Address field is required.';
    } else if (add.value.length < 10) {
        homes.innerHTML = 'Address must be at least 10 characters long.';
    } 
    if(cities.value==="")
        {
            e.preventDefault();
            citys.innerHTML="City field is required";
        }
        else if(!/^[a-zA-Z0-9\s,.'-]{3,}$/.test(cities.value)) {
            cit.textContent = 'City contains invalid characters.';

}
if(states.value==="")
    {
        e.preventDefault();
        stay.innerHTML="State field is required";
    }
    else if(!/^[a-zA-Z0-9\s,.'-]{3,}$/.test(states.value)) {
        sta.textContent = 'State contains invalid characters.';

}
const zipPattern = /^\d{5}(-\d{4})?$/;
        

 if(zip.value==="")
    {
        e.preventDefault();
        zips.innerHTML="zip code field is required"
    }
                else if (!zipPattern.test(zip.value)) {
                    zips.innerHTML = 'Please enter a valid ZIP code ';
                }
  
        var phonePattern= /^\+?[1-9]\d{1,14}$/;
   
        if(phone.value==="")
            {
                number.innerHTML="Phone number field is required";
            }
   else if (!phonePattern.test(phone.value)) {
    number.innerHTML="Please enter a valid phone number"
    e.preventDefault();
  }
  else if(phone.value.length<=5)
    {
            
    }
    var dropdown = document.getElementById("dropdown");
    var selectedValue = dropdown.options[dropdown.selectedIndex].value;
   

    if (selectedValue === "Select any Hackathon Event") {
        errorMessage.innerHTML = "Please select a hackathon event.";
        errorMessage.style.color = "red";
        errorMessage.style.fontWeight="bold"
        return false;
       
    
    } 
 if(addition.value.trim()==='')
    {
        e.preventDefault();
        errorMessage3.innerHTML="Comments field is required";
    }

   
   
}

)


