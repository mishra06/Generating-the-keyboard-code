document.addEventListener('keydown' , (e) =>{
    // keyname
    const keyName = document.querySelector("#key-name");
    keyName.innerText = e.key;

    // keyNo

    const keyNo = document.querySelector("#key-no");
    keyNo.innerText = e.keyCode;
})