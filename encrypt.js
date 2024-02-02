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

  alert('Texto copiado al portapapeles');

}















