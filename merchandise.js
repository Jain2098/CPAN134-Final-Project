const productCard1 = document.querySelector('.product-card-1');
const productCard2 = document.querySelector('.product-card-2');
const productCard3 = document.querySelector('.product-card-3');

productCard1.addEventListener('mouseover', function() {
  this.src = './media/merch5.png';
});

productCard1.addEventListener('mouseout', function() {
  this.src = './media/merch1.png';
});



productCard2.addEventListener('mouseover', function() {
  this.src = './media/merch6.png';
});

productCard2.addEventListener('mouseout', function() {
  this.src = './media/merch2.png';
});



productCard3.addEventListener('mouseover', function() {
  this.src = './media/merch4.png';
});

productCard3.addEventListener('mouseout', function() {
  this.src = './media/merch3.png';
});