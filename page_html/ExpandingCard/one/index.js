const cardElmList = document.querySelectorAll('.container > .card');
// console.log(cardElmList);
const handleClick = item => () => {
  item.classList.add('show');
  Array.prototype
    .filter
    .call(item.parentElement.children, el => el !== item)
    .forEach(el => el.classList.remove('show'));
};
cardElmList.forEach(item => {
  item.addEventListener('mouseover', handleClick(item));
});