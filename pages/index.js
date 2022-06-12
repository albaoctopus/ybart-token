import {
  useAddress,
  useDisconnect,
  useMetamask,
  useTokenDrop,
} from "@thirdweb-dev/react";
//import TokenHolders from "../components/TokenHolders";
import Claim from "../components/Claim";
import Transfer from "../components/Transfer";
import truncateAddress from "../lib/truncateAddress";
import styles from "../styles/Home.module.css";

export default function Home() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  const tokenDropContract = useTokenDrop(
    "0xA30A60aaf65879fc98ef5Fe073444c95421227A8"
  );

  return (
    <div className={styles.container}>
      {address ? (
        <>
          <a onClick={disconnectWallet} className={styles.secondaryButton}>
            Disconnect Wallet
          </a>
          <p>Your address: {truncateAddress(address)}</p>

          <hr className={styles.divider} />

          <h2>Claim Fan Token YBART Yaroslava Bartashevich</h2>
          <h4>ONE YBART = 0.1 MATIC</h4>
          <Claim tokenDropContract={tokenDropContract} />

          <hr className={styles.divider} />

          <h2>Transfer Fan Token YBART</h2>
          <Transfer tokenDropContract={tokenDropContract} />
        </>
      ) : (
        <button className={styles.mainButton} onClick={connectWithMetamask}>
          Connect Wallet
        </button>
      )}

     
    </div>
  );
}
