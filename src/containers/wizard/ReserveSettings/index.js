import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@blueprintjs/core';

import { changeStatus, changeStep, status } from '../../../redux/modules/wizard/steps';

import ToJS from '../../../components/common/ToJS';

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
        <div>Reserve settings</div>

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
