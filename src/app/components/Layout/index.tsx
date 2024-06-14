"use client";
import React, { ReactNode, useCallback, useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import CircularProgress from "@mui/material/CircularProgress";
import styles from '@/app/components/Layout/layout.module.scss';

type IBackgroundLayoutProps = {
    children: ReactNode;
}

const Layout = (props: IBackgroundLayoutProps) => {
    const [lightTheme, setLightTheme] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme !== null) {
            setLightTheme(JSON.parse(theme));
        }

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const getLightTheme = useCallback(() => {
        setLightTheme((prevLightTheme: boolean) => {
            const themeStorage = !prevLightTheme;
            localStorage.setItem("theme", JSON.stringify(themeStorage));
            return themeStorage;
        });
    }, []);

    if (loading) {
        return (
            <div className={`${styles.container} ${styles.loading}`}>
                <CircularProgress style={{ height: 100, width: 100, color: "#fff" }} />
            </div>
        )
    }

    return (
        <div className={`${styles.container} ${lightTheme ? styles.light : styles.dark}`}>
            <Navbar lightTheme={lightTheme} getLightTheme={getLightTheme} />
            {props.children}
        </div>
    )
}

export default Layout;