import { useEffect } from 'react';

const useScrollReveal = () => {
  useEffect(() => {
    const observe = () => {
      const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
            }
          });
        },
        { threshold: 0.05, rootMargin: '50px 0px -20px 0px' }
      );

      revealElements.forEach((el) => observer.observe(el));
      return observer;
    };

    // Initial observe
    let observer = observe();

    // Re-observe when hash changes (nav clicks)
    const handleHashChange = () => {
      observer.disconnect();
      // Reset elements that aren't in view, then re-observe
      setTimeout(() => {
        observer = observe();
      }, 100);
    };

    // Also listen for click on nav links to trigger reveal on target section
    const handleNavClick = () => {
      setTimeout(() => {
        const revealElements = document.querySelectorAll('.scroll-reveal:not(.revealed), .scroll-reveal-left:not(.revealed), .scroll-reveal-right:not(.revealed), .scroll-reveal-scale:not(.revealed)');
        revealElements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('revealed');
          }
        });
      }, 300);
    };

    window.addEventListener('hashchange', handleHashChange);
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', handleNavClick);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
};

export default useScrollReveal;
