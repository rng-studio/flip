import { PublicKey } from "@solana/web3.js";
import { serialize, deserialize } from "borsh";
import { Wager } from "./classes/Wager";
import { Type } from "./classes/Type";
import BN from "bn.js";
import bs58 from "bs58";

// Gets all pending bets from platform
const getPendingBets = async ({connection, programId, fourPlayerEnabled = false, pendingBets}) => {
  //todo: should be able to get both in one go really.
  const accounts =  await connection.getProgramAccounts(programId, {
    filters: [{ dataSize: 81 }]
  });

  const newPendingBets = accounts.reduce((total, a) => {
    const pending = deserialize(Wager.schema, Wager, a.account.data);
    return [
      ...total,
      {
        type: pending.type,
        pubkey: a.pubkey,
        better: new PublicKey(pending.better),
        amount: new BN(pending.amount),
        updated_at: new BN(pending.updated_at),
      },
    ];
  }, []);

  const sortedPending = newPendingBets.sort((a, b) => {
    return a.updated_at.lt(b.updated_at) ? 1 : -1;
  });

  return {...pendingBets, ...groupBy(sortedPending, 'type')};
};

const groupBy = (array, key) => {
  return array.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};


export default getPendingBets;
