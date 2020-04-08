import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = (props) => {
  const { name } = props;
  return (
    <div>
      안녕하세요, 제 이름은
      {` ${name} `}
      입니다.
    </div>
  );
};

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MyComponent;
