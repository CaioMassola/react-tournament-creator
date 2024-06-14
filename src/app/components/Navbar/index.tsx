import { useMemo } from 'react';
import Tooltip from '@mui/material/Tooltip';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import styles from '@/app/components/Navbar/navbar.module.scss';

type INavbarProps = {
    lightTheme: boolean;
    getLightTheme: () => void;
}

const Navbar = ({ lightTheme, getLightTheme }: INavbarProps) => {
    const titleIcon = useMemo(() => (lightTheme ? "Modo Dark" : "Modo Light"), [lightTheme]);

    return (
        <div className={styles.container}>
            <Tooltip title={titleIcon} aria-label={titleIcon}>
                {lightTheme ?
                    <DarkModeIcon onClick={getLightTheme} className={styles.icon} />
                    :
                    <LightModeIcon onClick={getLightTheme} className={styles.icon} />
                }
            </Tooltip>
        </div>
    )
}

export default Navbar;