const pdfhandeler = ()=>
{
    console.log(`this is pdf format`);
    
}

const txthandler = ()=>{
    console.log("this is txt format");
    
}

const filehandler = (cb)=>
{
    console.log("this is file_handler ");
    cb()
    
}
let value = "java.pdf"

if(value.endsWith('.pdf')){
    filehandler(pdfhandeler)
}