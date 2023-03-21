function phoneList() {
    let phones = Array.from(document.querySelectorAll('.shop-list li')).map(li => li.textContent);
    let uniquePhones = new Set(phones);
    return uniquePhones;
}
console.log(phoneList()); 