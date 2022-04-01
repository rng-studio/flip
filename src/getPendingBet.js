const getPendingBet = (pendingBets, wallet, index, amount, fourPlayer) => {
  const pendingByAmount = pendingBets[Boolean(fourPlayer) ? 5 : 3]
    .filter(
      (bet) =>
        bet.amount.eq(amount) &&
        wallet?.publicKey.toString() !== bet.better.toString()
    )
    .reverse();
  const pendingBet = pendingByAmount[index];
  if (pendingBet) {
    return { pubkey: pendingBet.pubkey, isSigner: false, isWritable: true };
  } else {
    //return a fill
    return { pubkey: wallet.publicKey, isSigner: false, isWritable: true };
  }
};

export default getPendingBet;