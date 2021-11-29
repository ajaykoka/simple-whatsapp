//assigning variables

var num, msg;

function sendMsg(){
    num = document.getElementById('numb').value;
    msg = document.getElementById('message').value;

    try{
        window.open("https://wa.me/" + num + "?text=" + msg, "_blank").focus()
    } catch(e){
        //for unsupported browsers
        window.location.assign("https://wa.me/" + num + "?text=" + msg, "_blank")
    }
}