import React from 'react';
import { Link } from 'react-router-dom';
import { Intent, Button } from '@blueprintjs/core';

import s from './styles.scss';

const Wizard = () => {
  return (
    <div>
      <div className={s.topbar}>
        <h3 className="bp3-heading">Contract wizard</h3>
        <Link className={s.link} to="/drafts"><Button minimal intent={Intent.DANGER}>BACK</Button></Link>
      </div>

      <div className={s.wizard}>
        wizard
      </div>
    </div>
  );
};

export default Wizard;
