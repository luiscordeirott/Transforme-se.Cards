const majorArcana = [
      { number: "0", name: "The Fool", icon: "🃏" },
      { number: "I", name: "The Magician", icon: "🪄" },
      { number: "II", name: "The High Priestess", icon: "🔮" },
      { number: "III", name: "The Empress", icon: "👑" },
      { number: "IV", name: "The Emperor", icon: "🏛️" },
      { number: "V", name: "The Hierophant", icon: "🔑" },
      { number: "VI", name: "The Lovers", icon: "💖" },
      { number: "VII", name: "The Chariot", icon: "🛒" },
      { number: "VIII", name: "Strength", icon: "🦁" },
      { number: "IX", name: "The Hermit", icon: "🕯️" },
      { number: "X", name: "Wheel of Fortune", icon: "🎡" },
      { number: "XI", name: "Justice", icon: "⚖️" },
      { number: "XII", name: "The Hanged Man", icon: "🙃" },
      { number: "XIII", name: "Death", icon: "💀" },
      { number: "XIV", name: "Temperance", icon: "🍷" },
      { number: "XV", name: "The Devil", icon: "😈" },
      { number: "XVI", name: "The Tower", icon: "⚡" },
      { number: "XVII", name: "The Star", icon: "⭐" },
      { number: "XVIII", name: "The Moon", icon: "🌙" },
      { number: "XIX", name: "The Sun", icon: "☀️" },
      { number: "XX", name: "Judgement", icon: "📯" },
      { number: "XXI", name: "The World", icon: "🌍" }
    ];

    let drawnIndices = new Set();

    function getRandomCard() {
      if (drawnIndices.size >= majorArcana.length) {
        drawnIndices.clear(); // Reseta as cartas
      }
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * majorArcana.length);
      } while (drawnIndices.has(randomIndex));

      drawnIndices.add(randomIndex);
      return majorArcana[randomIndex];
    }

    function flipCard(cardElement) {
      if (cardElement.classList.contains('flipped')) return;

      const drawnCard = getRandomCard();
      
      // Popula o card com informações
      cardElement.querySelector('.card-number').textContent = drawnCard.number;
      cardElement.querySelector('.card-icon').textContent = drawnCard.icon;
      cardElement.querySelector('.card-title').textContent = drawnCard.name;

      // yipeeeeeeee barrel roll
      cardElement.classList.add('flipped');
    }

    function resetDeck() {
      const cards = document.querySelectorAll('.card');
      drawnIndices.clear();
      cards.forEach(card => card.classList.remove('flipped'));
    }