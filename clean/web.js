const logoutama = document.getElementById('#home');
const animasi = document.getElementById('.logos');



const observerOpsi = {
    root : null,
    rootMargin : '0px',
    threshold : 0.5

};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const logokedua = entry.target.getAttribute('data-img'); 
            logoutama.src = logokedua;
        }
    });
}, observerOpsi);

selection.forEach(animasi => {
    observer.observe(animasi);
});