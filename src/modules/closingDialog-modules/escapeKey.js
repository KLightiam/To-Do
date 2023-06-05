// import emptyInputs from "./emptyInputs";

export default function escapeKey(event){
    // console.log(this);
    if(event.key.toLowerCase()==='escape'){
        event.preventDefault();
        // emptyInputs();
        this.remove();
        // console.log(event.key.toLowerCase());
    }
}