// timer
import { DateTime } from '../node_modules/luxon/src/luxon.js';

const displayDate = () => {
  document.querySelector('.current-date').innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

export default displayDate;