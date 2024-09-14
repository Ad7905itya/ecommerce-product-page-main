const close = document.querySelector('#close');
const menuIcon = document.querySelector('#menu-icon');
const list = document.querySelector('.list');
const cartBox = document.querySelector('.cart-box');
const cartIcon = document.querySelector('#cart-icon');
const imageBoxes = document.querySelectorAll('.image-box');
const imageLightBoxes = document.querySelectorAll('.image-lightBox');
const mainImg = document.querySelector('.main-img img');
const mainLightImage = document.querySelector('.main-light-img > img');
const cartCount = document.querySelector('.cart-count');
const addBtn = document.querySelector('.btn');
const cartContainer = document.querySelector('.cart-container');
const cartBtn = document.querySelector('.cart-btn');
const imageClose = document.querySelector('.image-close');
const parentImageLightBox = document.querySelector('.parent-image-lightBox');
const mainLightOpen = document.querySelector('#main-light-open');

menuIcon.addEventListener('click', () => {
    list.classList.toggle("show");
    prev.style.zIndex =  -1;
    next.style.zIndex = -1;
})

close.addEventListener('click', () => {
    list.classList.toggle('hide');
    list.classList.remove('hide', 'show');
    prev.style.zIndex =  0;
    next.style.zIndex = 0;
})

cartIcon.addEventListener('mouseover', () => {
    cartCount.classList.add('show');
})

cartIcon.addEventListener('mouseout', () => {
    cartCount.classList.remove('show');
})

cartIcon.addEventListener("click", () => {
    cartBox.classList.toggle('show');
    cartCount.classList.add('show');
})

document.addEventListener('click', (e) => {
    if (!list.contains(e.target) && e.target !== menuIcon) {
        list.classList.toggle('hide');
        list.classList.remove('hide', 'show');
        prev.style.zIndex =  0;
    next.style.zIndex = 0;
    }
    if (!cartBox.contains(e.target) && e.target !== cartIcon) {
        cartBox.classList.remove('show');
        cartCount.classList.remove('show');
    }
})

imageBoxes.forEach((imageBox, i) => {
    imageBox.addEventListener('click', function () {
        let current = document.querySelector('.active');
        current.className = current.className.replace(' active', '');
        mainImg.src = `images/image-product-${i + 1}.jpg`;
        this.className += ' active';
    })
})

imageLightBoxes.forEach((imageLightBox, i) => {
    imageLightBox.addEventListener('click', function () {
        let current = document.querySelector('.active-light');
        current.className = current.className.replace(' active-light', '');
        mainLightImage.src = `images/image-product-${i + 1}.jpg`;
        this.className += ' active-light';
    })
})


mainLightOpen.addEventListener("click",()=>{
    parentImageLightBox.style.display = 'flex';
})

imageClose.addEventListener('click',()=>{
    parentImageLightBox.style.display = 'none';
})


const addCartContainer = () => {
    cartContainer.innerHTML = `
    <div class='cart-item'>
    <img src='images/image-product-1-thumbnail.jpg'>
    <div class='item-detail'>
       <p>Fall Limited Edition Sneakers</p>
       <div class='rate'>
           <p>$125.00</p><span class='times'>&times; ${productCount}</span> <span id='total'>$${(125 * productCount).toPrecision(5)}</span>
       </div>
    </div>
    <img src="images/icon-delete.svg" alt="icon-delete" id='delete'>
    </div>
    <button class="btn">checkout</button>
    `
    const deleteBtn = document.querySelector('#delete');

    deleteBtn.addEventListener('click', () => {
        cartContainer.innerHTML = '<p>Your cart is empty</p>';
        cartCount.innerText = 0;
    })
}


addBtn.addEventListener('click', () => {
    if(productCount > 0){
    addCartContainer();
    cartCount.innerText = 1;
    }else{
        alert('select item Quantity one or more...');
    }
})

let productCount = 0;
cartBtn.children[0].addEventListener('click', (e) => {
    if (productCount > 0) {
        productCount--;
        cartBtn.children[1].innerHTML = productCount;
    } else {
        productCount = 0;
        cartBtn.children[1].innerHTML = productCount;
    }
})


cartBtn.children[2].addEventListener('click', () => {
    productCount++;
    cartBtn.children[1].innerHTML = productCount;
})


const imageSlider = document.querySelector('.image-slider');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let countImg = 0;

prev.addEventListener('click',()=>{
    if(countImg <= 0){
        countImg = 4;
    }
    countImg --;
    imageSlider.style.transform = `translate(-${countImg * 100}%)`;
})

next.addEventListener('click',()=>{
    countImg++;
    if(countImg >= 3){
        countImg = 0;
    }
    imageSlider.style.transform = `translate(-${countImg * 100}%)`;
})
