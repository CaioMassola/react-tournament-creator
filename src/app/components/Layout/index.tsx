"use client";
import React, { ReactNode, useCallback, useState } from "react";
import Navbar from "@/app/components/Navbar";
import styles from '@/app/components/Layout/layout.module.scss';
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