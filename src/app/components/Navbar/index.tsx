import { useCallback, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import TranslateIcon from '@mui/icons-material/Translate';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { TranslateText } from '@/app/Utils/i18n';
import { setLanguageState } from '@/store/reducers/language';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setThemeState } from "@/store/reducers/theme";
import styles from '@/app/components/Navbar/navbar.module.scss';

const Navbar = () => {
    const dispatch = useAppDispatch();
    const themeState = useAppSelector((state) => state.theme.themeState);
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null);

    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

    const titleTheme = TranslateText(themeState ? "themeDark" : "themeLight", "navbar");
    const titleLanguage = TranslateText("translate", "navbar");

    const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };

    const changeLanguage = useCallback((language: string) => {
        dispatch(setLanguageState(language))
        setOpen((previousOpen) => !previousOpen)
    }, [dispatch])

    const changeTheme = useCallback(() => {
        dispatch(setThemeState(!themeState))
    }, [themeState, dispatch]);

    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <Tooltip title={titleLanguage} aria-label={titleLanguage} placement={'left'}>
                    <TranslateIcon className={styles.icon} onClick={handleClick} aria-describedby={id} />
                </Tooltip>
                <Menu
                    id={id}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setOpen((previousOpen) => !previousOpen)}
                    MenuListProps={{ className: themeState ? styles.menuLight : styles.menuDark }}
                    PopoverClasses={{
                        paper: styles.menu
                    }}
                >
                    <Tooltip title={"PT-BR"} aria-label={'PT-BR'} placement={'left'}>
                        <MenuItem onClick={() => changeLanguage("pt")}>PT-BR</MenuItem>
                    </Tooltip>
                    <Tooltip title={"EN-US"} aria-label={'EN'} placement={'left'}>
                        <MenuItem onClick={() => changeLanguage("en")}>EN-US</MenuItem>
                    </Tooltip>
                </Menu>
                <Tooltip title={titleTheme} aria-label={titleTheme}>
                    {themeState ?
                        <DarkModeIcon onClick={changeTheme} className={styles.icon} />
                        :
                        <LightModeIcon onClick={changeTheme} className={styles.icon} />
                    }
                </Tooltip>
            </div>
        </div>
    )
}

export default Navbar;