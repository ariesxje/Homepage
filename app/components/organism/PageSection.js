import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

const styles = {
  parallax: {
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
  }
};

const PageSection = (props) => {
  const getStyle = () => {
    if (props.backgroundImageUrl) {
      return R.merge({
        backgroundImage: `url(${props.backgroundImageUrl})`
      },styles.parallax)
    }
    return styles.parallax;
  };

  return (
    <section>
      <div style={getStyle()}>
        {props.children}
      </div>
    </section>
  );
};

PageSection.propTypes = {
  backgroundImageUrl: PropTypes.string
};

export default PageSection;
