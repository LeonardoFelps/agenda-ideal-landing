/* ================= ANO AUTOMÁTICO ================= */

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* ================= FORM UX (SIMULADO) ================= */

const form = document.getElementById('contact-form');
const btn = document.getElementById('submit-btn');
const feedback = document.getElementById('form-feedback');

if (form && btn && feedback) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    btn.disabled = true;
    btn.textContent = 'Enviando...';
    feedback.textContent = '';
    feedback.classList.remove('success');

    setTimeout(() => {
      btn.textContent = 'Cadastro realizado ✓';
      feedback.textContent = 'Você entrou na lista de interessados do AgendaIdeal.';
      feedback.classList.add('success');
      form.reset();

      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = 'Enviar mensagem';
      }, 3000);
    }, 1200);
  });
}

/* ================= REVEAL ON SCROLL ================= */

const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

reveals.forEach(el => revealObserver.observe(el));

/* ================= HOW STEPS (STAGGER REAL) ================= */

const steps = document.querySelectorAll('.step');

const stepsObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        stepsObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.25,
  }
);

steps.forEach(step => stepsObserver.observe(step));

/* ================= TYPEWRITER ================= */

const typewriters = document.querySelectorAll('.typewriter');

typewriters.forEach(el => {
  const words = el.dataset.words
    ? el.dataset.words.split('|')
    : [el.textContent];

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  el.textContent = '';
  el.style.borderRight = '2px solid rgba(229,231,235,0.7)';

  const type = () => {
    const currentWord = words[wordIndex];

    if (!deleting) {
      el.textContent = currentWord.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentWord.length) {
        setTimeout(() => (deleting = true), 1600);
      }
    } else {
      el.textContent = currentWord.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    setTimeout(type, deleting ? 40 : 65);
  };

  type();
});
