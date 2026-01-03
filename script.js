// All your original script

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.progress').forEach(p => {
        setTimeout(() => p.style.width = p.dataset.width, 500);
    });
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, {threshold:0.1, rootMargin:'0px 0px -50px 0px'});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

const scrollTop = document.getElementById('scrollTop');
if (scrollTop) {
    window.addEventListener('scroll', () => scrollTop.style.display = window.scrollY > 300 ? 'flex' : 'none');
    scrollTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
}

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}


document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        const isOpen = answer.classList.contains('active');
        document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('active'));
        document.querySelectorAll('.faq-question').forEach(i => i.classList.remove('active'));
        if (!isOpen) {
            answer.classList.add('active');
            q.classList.add('active');
        }
    });
});

document.querySelectorAll('.timeline-item').forEach((item, i) => item.style.animationDelay = `${0.2*(i+1)}s`);

const sparkleContainer = document.querySelector('.sparkle');
if (sparkleContainer) {
    for (let i = 0; i < 25; i++) {
        const s = document.createElement('span');
        s.style.left = Math.random() * 100 + 'vw';
        s.style.top = Math.random() * 100 + 'vh';
        s.style.animationDuration = 6 + Math.random() * 4 + 's';
        sparkleContainer.appendChild(s);
    }
}

// Counter animation
const counters = document.querySelectorAll('.counter');
const speed = 100;

const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 40);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

window.addEventListener('scroll', () => {
  const statsSection = document.querySelector('.stats-section');
  if (statsSection && statsSection.getBoundingClientRect().top < window.innerHeight - 100) {
    animateCounters();
  }
});

