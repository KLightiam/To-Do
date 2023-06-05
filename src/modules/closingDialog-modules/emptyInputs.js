
export default function emptyInputs(){
    let inputFields = document.querySelectorAll('dialog input');
    let textAreaFields = document.querySelectorAll('dialog textarea');
    let inputs = [...inputFields,...textAreaFields];
    for(input of inputs){
        input.value = '';
    }
    let dialog = document.querySelector('dialog');
    dialog.close();
    dialog.remove();
}