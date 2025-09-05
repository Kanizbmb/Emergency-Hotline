// heart Count
const likeCounter = document.getElementById('likeCounter');
let totalLike = 0;


document.querySelectorAll('.likeBtn').forEach(btn => {
 btn.addEventListener('click', () => {
   likeCounter.textContent = ++totalLike;
 });
});



// Dial Button
const creditBalance = document.getElementById('creditBalance');
const dialButtons = document.querySelectorAll('.dialBtn');


dialButtons.forEach((btn, i) => {
 btn.addEventListener('click', () => {
   let coin = parseInt(creditBalance.textContent);


   if (coin < 20) return alert("Not Enough Coin!");


   const card = btn.closest('.card');
   const sName = card.querySelector('.agencyName').textContent;
   const sNumber = card.querySelector('.agencyNumber').textContent;
   alert(`📞 Calling ${sName} ${sNumber}`);
   creditBalance.textContent = coin - 20;
   const now = new Date();
   const historyList = document.getElementById('historyList');
   historyList.insertAdjacentHTML('beforeend', `
     <div class="flex justify-between bg-gray-50 p-4 rounded-lg items-center">
       <div>
         <h2 class="text-lg font-bold">${sName}</h2>
         <h3>${sNumber}</h3>
       </div>
       <div>
         <p class="text-sm font-semibold">${now.toLocaleTimeString()}</p>
       </div>
     </div>
   `);
 });
});
// Clear History
document.getElementById('resetHistory').addEventListener('click', () => {
 document.getElementById('historyList').innerHTML = "";
});


// Copy Number Button
const clipboardCount = document.getElementById('clipboardCount');
let totalCopyCount = 0;
document.querySelectorAll('.copyNumberBtn').forEach(btn => {
 btn.addEventListener('click', () => {
   const sTrim = btn.closest('.card').querySelector('.agencyNumber').textContent.trim();


   navigator.clipboard.writeText(sTrim).then(() => {
     alert(`Copied Number ${sTrim}`);
     clipboardCount.textContent = ++totalCopyCount;
   });
 });
});












