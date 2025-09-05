// heart Count
const likeCounter = document.getElementById('likeCounter');
let totalLike = 0;


document.querySelectorAll('.likeBtn').forEach(btn => {
 btn.addEventListener('click', () => {
   likeCounter.textContent = ++totalLike;
 });
});



