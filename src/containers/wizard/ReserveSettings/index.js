import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@blueprintjs/core';

import { changeStatus, changeStep, status } from '../../../redux/modules/wizard/steps';

import ToJS from '../../../components/common/ToJS';
import Calc from '../../../components/wizard/Calc';
import Reserve from '../../../components/wizard/Reserve';

import s from './styles.scss';

class ReserveSettings extends Component {
  render() {
    const {
      changeStatus,
      changeStep,
      steps
    } = this.props;

    const step = steps.find((el) => el.key === 'reserve');

    return (
      <div>
        <div className={s.calc}>
          <Calc data={[
            { label: 'Will be issued', value: '500,000 SPC' },
            { label: 'Will be sold', value: '300,000 SPC' },
            { label: 'Will be reserved', value: '200,000 SPC' }
          ]}/>
        </div>

        <div className={s.list}>
          <Reserve name="Bounty" address="0x2AE99c889ea685F314fE8Bfb80787F1E500f31D1" amount="50000" ticker="SPC"/>
          <Reserve name="Bounty" address="0x2AE99c889ea685F314fE8Bfb80787F1E500f31D1" amount="50000" ticker="SPC"/>
          <Reserve name="Bounty" address="0x2AE99c889ea685F314fE8Bfb80787F1E500f31D1" amount="50000" ticker="SPC"/>
        </div>

        <Button
          onClick={() => changeStatus({ index: 3, status: status.PASSED })}>VERIFY</Button>

        <Button
          disabled={step.status !== status.PASSED}
          onClick={() => changeStep(4)}>NEXT STEP</Button>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    steps: state.get('wizard').get('steps').get('steps')
  }),
  {
    changeStatus,
    changeStep
  }
)(ToJS(ReserveSettings));
