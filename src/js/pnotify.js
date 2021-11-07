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
    text: 'We can\'t find. Try clarify your request OR \'server error\' again?',
    hide: true,
    delay: 3000
  });
}

export { onEmptyQuery, onError } 