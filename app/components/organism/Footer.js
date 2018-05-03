import React from 'react';

const styles = {
  footer: {
    marginTop: 'auto',
    zIndex: 1,
    width: '100%',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
    color: 'white'
  },
  footerContent: {
  }
};

const Footer = (props) => {
  return (
    <header style={styles.footer}>
      <div style={styles.footerContent}>Some text that are too small that I could not read.</div>
    </header>
  );
};

export default Footer;
