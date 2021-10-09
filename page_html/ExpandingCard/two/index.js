const cardElem = document.querySelectorAll('.container > .card');
console.log(cardElem);
cardElem.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('show');
    Array.prototype
      .filter
      .call(item.parentElement.children, elem => elem !== item)
      .forEach(elem => elem.classList.remove('show'));
  });
});