import dynamic from "next/dynamic";
import { FC, ReactNode } from 'react';
import Layout from '@/app/components/Layout';
import './globals.scss';

const ReduxProvider = dynamic(() => import("@/store/redux-provider"), {
  ssr: false
});

type LayoutWrapperProps = {
  children: ReactNode;
};

const LayoutWrapper: FC<LayoutWrapperProps> = ({ children }) => (
  <html lang="en">
    <body>
      <ReduxProvider>
        <Layout>{children}</Layout>
      </ReduxProvider>
    </body>
  </html>
);

export default LayoutWrapper;