import { ReactNode } from "react";
import styles from './backgroundLayout.module.scss';

type IBackgroundLayoutProps = {
    children: ReactNode;
}

const BackgroundLayout = (props: IBackgroundLayoutProps) => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

export default BackgroundLayout;