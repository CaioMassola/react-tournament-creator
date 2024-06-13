import styles from "./page.module.scss";
import BackgroundLayout from "@/app/components/BackgroundLayout";

export default function Home() {
  return (
    <BackgroundLayout>
      <div className={styles.container}>
        <p className={styles.text}>Olá Mundo</p>
      </div>
    </BackgroundLayout>
  );
}