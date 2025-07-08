document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.focus();
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name) {
    alert('Please enter your name.');
    form.name.focus();
    return;
  }
  if (!email || !validateEmail(email)) {
    alert('Please enter a valid email address.');
    form.email.focus();
    return;
  }
  if (!message) {
    alert('Please enter your message.');
    form.message.focus();
    return;
  }

  alert('Thank you for your message!');
  form.reset();
});

function validateEmail(email) {
  const re = /^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/;
  return re.test(email.toLowerCase());
}
