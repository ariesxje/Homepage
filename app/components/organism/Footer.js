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
    color: 'white',
    fontSize: '0.8em'
  },
  footerContent: {
  }
};

const Footer = (props) => {
  return (
    <div style={styles.footer}>
      <div style={styles.footerContent}>Some text that are too small that I could not read.</div>
    </div>
  );
};

export default Footer;
