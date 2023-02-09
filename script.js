function pick(arr) {
  const idx = Math.floor(math.random()) * arr.length;
  return arr[idx];
}

function yourCard() {
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const suits = ["Clubs", "Spades", "Hearts", "Diamonds"];
  return { value: pick(values), suits: pick(suits) };
}
