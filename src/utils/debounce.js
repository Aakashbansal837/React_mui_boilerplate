import { debounce, isFunction } from 'lodash';

const defaultDelay = 400; //in milisecond

export default (apiFxn, delay = defaultDelay) => {
  if (isFunction(apiFxn)) {
    return null;
  }
  if (isNaN(delay) || delay === null) {
    delay = defaultDelay;
  }
  return debounce(apiFxn, delay);
}