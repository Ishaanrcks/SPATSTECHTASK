let jobdes,jobdes1,stip,type,city,data;
let upload=document.getElementById("submit");
let fetch=document.getElementById("fetch");

function load()
{
    jobdes=document.getElementById("jobdesc");
    stip=document.getElementById("stipend");
    type=document.getElementById("type");
    city=document.getElementById("city");
    if(city.value=="" || stip.value=="" || jobdes.value=="")
    {
     alert("Please!Fill Up All Entries.");
    }
    else{
    data='<div class="newupload"><div class="about">'+jobdes.value+'</div><div class="type">'+type.value+'</div><div class="pay">STIPEND<br>'+stip.value+'</div><div class="city">'+city.value+'</div></div>';
    fetch.innerHTML+=data;
    alert("The Data Is Uploaded.")
  
    jobdes.value="Please Enter Job Description";
    stip.value=null;
    type.value="Full-Time";
    city.value=null;}
}

upload.addEventListener("click",load);
jobdes1=document.getElementById("jobdesc");
function erase()
{

    jobdes1.value=null;
}
jobdes1.addEventListener("click",erase);
