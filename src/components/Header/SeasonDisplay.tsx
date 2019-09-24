import React from 'react';
import { startCase } from 'lodash';

import Block from '../Block';
import Heading from '../Text/Heading';
import { Season } from '../../lib/enum';

interface Props {
  season: Season;
}

export default (props: Props) => {
  const season = startCase(props.season);
  return (
    <Block display="flex" alignItems="center">
      <Heading size={600} text={season} />
    </Block>
  );
};
