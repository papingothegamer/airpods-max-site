import React, { ReactNode } from 'react';
import Header from '../components/Header';
import Info from '../components/Info';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import styles from '../layout.module.css';


interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Info />
      <Gallery />
      <Footer />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;