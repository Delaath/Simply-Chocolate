document.getElementById('card-number').addEventListener('input', function() {
    const cardLogo = document.getElementById('card-logo');
    const cardNumber = this.value;
  
    // Проверка по первым цифрам карты
    if (/^4/.test(cardNumber)) {
      cardLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg';
      cardLogo.style.visibility = 'visible';
    } else if (/^5[1-5]/.test(cardNumber)) {
      cardLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg';
      cardLogo.style.visibility = 'visible';
    } else {
      cardLogo.style.visibility = 'hidden';
    }
  });
