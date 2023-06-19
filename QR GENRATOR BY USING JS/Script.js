const qrText=document.getElementById('qr-text');
const sizes=document.getElementById('sizes');
const genrateBtn=document.getElementById('genrateBtn');
const downloadBtn=document.getElementById('downloadBtn');

const qrContainer=document.querySelector('.qr-body');
let size=sizes.value;
// this code for when we click on buttons page will not be refresh // ye function submit honese rokta hain
genrateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    // if(qrText.value.length>0){
    //     genrateQRCode();
    // }else{
    //     alert("Enter Text for Genrate QR Code");
    // }
    qrText.value.length>0? genrateQRCode() :alert("Enter Text or URL for Genrate QR Code");;


});

sizes.addEventListener('change',(e)=>{
    size =e.target.value;
    isEmptyInput();
});

downloadBtn.addEventListener('click',()=>{
    let img=document.querySelector('.qr-body img');
    if(img !==null){
        let imgAtrr =img.getAttribute('src');
        downloadBtn.setAttribute("href",imgAtrr);
    }
    else{
        downloadBtn.setAttribute("href",'${document.querySelector(',canvas,').toDataURL()}');
    }
});

function isEmptyInput(){
    // if(qrText.value.length>0){
    //     genrateQRCode();
    // }else{
    //     alert("Enter Text for Genrate QR Code");
    // }
    qrText.value.length>0? genrateQRCode() :alert("Enter Text or URL for Genrate QR Code");;
}

function genrateQRCode(){
    qrContainer.innerHTML=""; // it stops repetations of qr codes
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}
