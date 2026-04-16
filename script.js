
function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');

  const buttons = document.querySelectorAll('.nav-btn');
  const tabOrder = ['home', 'students', 'events'];
  const index = tabOrder.indexOf(tabId);
  if (index !== -1) {
    buttons[index].classList.add('active');
  }
}

function openModal() {
  document.getElementById('modal').classList.remove('hidden');
  document.getElementById('overlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
  document.getElementById('overlay').classList.add('hidden');
  document.body.style.overflow = '';
}

function submitForm(event) {
  event.preventDefault();
  closeModal();

  const notice = document.createElement('div');
  notice.textContent = '✅ Заявка отправлена! Мы скоро свяжемся с вами.';
  notice.style.cssText = `
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    background: #2e7d32;
    color: white;
    padding: 14px 28px;
    border-radius: 50px;
    font-weight: 700;
    font-size: 1rem;
    z-index: 9999;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    animation: fadeIn 0.3s ease;
  `;
  document.body.appendChild(notice);

  setTimeout(() => {
    notice.remove();
  }, 3000);
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});