import React from 'react';
import PropTypes from 'prop-types';

import s from './styles.scss';

const Calc = (props) => {
  const {
    data
  } = props;

  return (
    <div className={s.calc}>
      <div className={s.calcBlock}>
        <div className={s.calcVal}>500,000 SPC</div>
        <div className={s.calcLabel}>Will be issued</div>
      </div>
      <div className={s.calcBlock}>
        <div className={s.calcVal}>300,000 SPC</div>
        <div className={s.calcLabel}>Will be sold</div>
      </div>
      <div className={s.calcBlock}>
        <div className={s.calcVal}>200,000 SPC</div>
        <div className={s.calcLabel}>Will be reserved</div>
      </div>
    </div>
  );
};

Calc.propTypes = {
  data: [
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ]
};

export default Calc;
