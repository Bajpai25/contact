function submitform(e){
    e.preventDefault();
}
function sendEmail(){
    var params={
         name:document.getElementById("name").value,
         email:document.getElementById('email').value,
         slot:document.getElementById('range').value
    }
    emailjs.send('service_9zjbdbp','template_32pvgcs',params).then(function(res){
        alert("success"+res.status);    
    })

}