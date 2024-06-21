"use client";
import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import styles from '@/components/Layout/layout.module.scss';
import { useAppSelector } from "@/store/store";
type IBackgroundLayoutProps = {
    children: ReactNode;
}

const Layout = (props: IBackgroundLayoutProps) => {
    const themeState = useAppSelector((state) => state.theme.themeState);

    return (
        <div className={`${styles.container} ${themeState ? styles.light : styles.dark}`}>
            <Navbar  />
            {props.children}
        </div>
    )
}

export default Layout;