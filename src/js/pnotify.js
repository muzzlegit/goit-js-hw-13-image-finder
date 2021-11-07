import { notice, error} from '@pnotify/core';

const onEmptyQuery = () => {
  notice({
    title: 'WARNING!',
    text: 'Type something',
    hide: true,
    delay: 1000
  });
}
const onError = () => {
  error({
    title: 'Oops',
    text: 'Server error again? YES!',
    hide: true,
    delay: 1000
  });
}

export { onEmptyQuery, onError } 