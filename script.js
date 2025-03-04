document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let matchedPairs = 0;

    cards.forEach(card => {
        card.addEventListener("click", flipCard);
    });

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add("flipped");
        this.style.backgroundImage = `url('img/${this.dataset.food}.jpeg')`;

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
        } else {
            secondCard = this;
            checkForMatch();
        }
    }

    function checkForMatch() {
        if (firstCard.dataset.food === secondCard.dataset.food) {
            disableCards();
            matchedPairs++;
            if (matchedPairs === cards.length / 2) {
                showPromoCode();
            }
        } else {
            unflipCards();
        }
    }

    function disableCards() {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            firstCard.style.backgroundImage = "";
            secondCard.style.backgroundImage = "";
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    function showPromoCode() {
        const modal = document.getElementById("promoModal");
        modal.style.display = "flex";
    }

  2
// таймер
    function startTimer() {
        let days = 3;
        let hours = 21;
        let minutes = 30;
        let seconds = 0;
    
        const timerDays = document.querySelector('.timer_days');
        const timerHours = document.querySelector('.timer_hours');
        const timerMinutes = document.querySelector('.timer_minutes');
        const timerSeconds = document.querySelector('.timer_seconds');
    
        function updateTimer() {
            if (seconds === 0) {
                if (minutes === 0) {
                    if (hours === 0) {
                        if (days === 0) {
                            clearInterval(interval);
                            return;
                        }
                        days--;
                        hours = 23;
                    } else {
                        hours--;
                    }
                    minutes = 59;
                } else {
                    minutes--;
                }
                seconds = 59;
            } else {
                seconds--;
            }
    
            
            timerHours.textContent = String(hours).padStart(2, '0');
            timerMinutes.textContent = String(minutes).padStart(2, '0');
            timerSeconds.textContent = String(seconds).padStart(2, '0');
        }
    
        const interval = setInterval(updateTimer, 1000);
    }
    
    startTimer();

    //form
    const form = document.getElementById('form');
    const modalForm = document.querySelector('.modal_answer');

    form.addEventListener('submit', (e)=> {
        e.preventDefault();
        modalForm.classList.remove('hidden');
        setTimeout(()=> {modalForm.classList.add('hidden')},2000)
    })
});
