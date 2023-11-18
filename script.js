document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector('.typing-text');
    const text = "إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا";
    let index = 0;

    function type() {
        if (index < text.length) {
            const content = text.substring(0, index + 1);
            textElement.textContent = content + '#'; 
            index++;
            setTimeout(type, 200); 
        } else {
            index = 0;
            setTimeout(type, 1000); 
        }
    }

    type(); 
});
