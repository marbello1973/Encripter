// const textareaId = document.getElementById('textareaId');
// const buttonEncrypter = document.getElementById('ButtonEncripter');
// const buttonDecripter = document.getElementById('ButtonDecripter');
// const result = document.getElementById('result');



const encript = () => {
    const textareaId = document.getElementById('textareaId');
    const resultElement = document.getElementById('result');
    const copiarButton = document.getElementById('ButtonCopiar');
  
    const text = textareaId.value;
    const encryptedText = btoa(text);
  
    if (text.length === 0 ) {
      resultElement.innerHTML = 'No hay texto para encriptar';
      document.getElementById('Imagen').style.display = 'block';
        copiarButton.style.display = 'none';
    } else {
      resultElement.innerHTML = encryptedText;
      document.getElementById('Imagen').style.display = 'none';
        copiarButton.style.display = 'block';
    }
  
    textareaId.value = '';
  }

  const decript = () => {
    const textareaId = document.getElementById('textareaId');
    const resultElement = document.getElementById('result');
    const copiarButton = document.getElementById('ButtonCopiar');
  
    let text = textareaId.value.trim();
    let decryptedText = '';
  
    if (text.length === 0) {
        resultElement.innerHTML = 'No hay texto para desencriptar';
        document.getElementById('Imagen').style.display = 'block';
        copiarButton.style.display = 'none';
        if (window.innerWidth < 768) {
        resultElement.innerHTML = 'No hay texto para desencriptar';
      }
    } else {
        decryptedText = atob(text);
        resultElement.innerHTML = decryptedText;
        document.getElementById('Imagen').style.display = 'none';
        copiarButton.style.display = 'block';
    }
  
    textareaId.value = '';
  }

  const buttonCopiar = () => {
    const resultElement = document.getElementById('result');
    const range = document.createRange();
    const selection = window.getSelection();

    range.selectNode(resultElement);
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand('copy');
    selection.removeAllRanges();

    alert('Texto copiado al portapapeles', resultElement);

  }






// const decript = () => { 
//     if(screen.width < 768) document.getElementById('result').innerHTML = 'No hay texto para encriptar';
//     let text = textareaId.value.trim();          
//     let decryptedText = atob(text);
//     textareaId.value = decryptedText || '';
//     if(textareaId.value.length === 0){
//         document.getElementById('result').innerHTML = 'No hay texto para encriptar';
//         document.getElementById('Imagen').style.display = 'block';
//         if(screen.width < 768) document.getElementById('result').innerHTML = 'No hay texto para encriptar';
//     }else {
//         document.getElementById('result').innerHTML = decryptedText;
//         document.getElementById('Imagen').style.display = 'none';    
//     }

//     textareaId.value = '';
// }





// const encript = () => {
//     const textareaId = document.getElementById('textareaId');  
//     if(screen.width < 768) document.getElementById('result').innerHTML = 'No hay texto para encriptar';
//     const text = textareaId.value.trim();
//     // console.log(text);
//     const encryptedText = Crypto.AES.encrypt(text, 'password');
//     console.log(encryptedText);
//     // let pass = 'password'
//     // let key = CryptoJS.enc.Utf8.parse(pass);
//     // let encryptedText = CryptoJS.AES.encrypt(textareaId, key).toString();
//     // console.log(encryptedText);
//     // let text = document.getElementById('result').innerHTML = encryptedText;
//     textareaId.value = '';
// }


// const encript = () => {  

//     // if(screen.width < 768) document.getElementById('result').innerHTML = 'No hay texto para encriptar';
//     const text = result.value;    
//     const encryptedText = btoa(text);
//     result.value = encryptedText;     
//     if(textareaId.value.length === 0 && window.innerWidth < 768){
//         document.getElementById('result').innerHTML = 'No hay texto para encriptar';
//         document.getElementById('Imagen').style.display = 'block';       
//         // if(screen.width < 768) document.getElementById('result').innerHTML = 'No hay texto para encriptar';
//     }else {
//         document.getElementById('result').innerHTML = encryptedText;
//         document.getElementById('Imagen').style.display = 'none';    
//     }

//     textareaId.value = '';
// }


