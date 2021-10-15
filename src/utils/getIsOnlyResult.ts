import getOptionProperty from './getOptionProperty';

import { AllowNew, Option } from '../types';

interface Props {
  allowNew: AllowNew;
  highlightOnlyResult: boolean;
  results: Option[];
}

function getIsOnlyResult(props: Props): boolean {
  const { allowNew, highlightOnlyResult, results } = props;

  if (!highlightOnlyResult) {
    return false;
  }

  return (results.length === 1 || (results.length === 2 && allowNew)) && !getOptionProperty(results[0], 'disabled');
}

export default getIsOnlyResult;
