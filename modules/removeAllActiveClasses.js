const removeAllActiveClasses = () => {
  const navLinks = document.querySelectorAll('nav ul li');
  navLinks.forEach((link) => {
    link.children[0].classList.remove('active');
  });
};
export default removeAllActiveClasses;