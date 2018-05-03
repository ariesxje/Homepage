import React from 'react';

const styles = {
  header: {
    position: 'fixed',
    zIndex: 1,
    width: '100%',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.6)',
    color: 'white'
  },
  headerContentContainer: {
    width: '100%',
    maxWidth: '1200px'
  }
};

const Header = (props) => {
  return (
    <header style={styles.header}>
      <div style={styles.headerContentContainer}>Broccoli & co.</div>
    </header>
  );
};

export default Header;
