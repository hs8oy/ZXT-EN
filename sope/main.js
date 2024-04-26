function orderNow(button) {
    const productCard = button.parentElement;
    const productName = productCard.getAttribute('data-name');
    const productPrice = productCard.getAttribute('data-price');
    const productImage = productCard.getAttribute('data-code');
 
    const message = `تم طلب المنتج :
 اسم المنتج : ${productName}
 سعر المنتج : ${productPrice} ديـنـار
 كود المنتج : ${productImage}`;
 
    const encodedMessage = encodeURIComponent(message);
    const username = "hs8oy"; // معرف حسابك في تليجرام
    const url = `https://t.me/${username}?text=${encodedMessage}`;
    window.open(url);
  }
 