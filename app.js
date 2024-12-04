const box = document.querySelector('.box');
const mailInput = document.querySelector('.mailInput');
const errorMsg = document.querySelector('.errorMsg');
const blueBtn = document.querySelector('.blueBtn');

blueBtn.addEventListener('click', () => {
  if (!mailInput.value.includes('@')) {
    mailInput.value = '';
    mailInput.placeholder = 'example@email.com';
    mailInput.classList.add('error');
    mailInput.style.borderColor = 'hsl(354, 100%, 66%)';
    errorMsg.textContent = 'Please provide a valid email address';
    box.classList.add('whenError');
  } else {
    document.body.innerHTML = `
    <main style="
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 20px;
      height: 100vh;
    ">
        <h1>Good Job!</h1>
        <p>You have subscribed.</p>
        <p>Your email is ${mailInput.value}.</p>
    </main>
    `;
  }
});
