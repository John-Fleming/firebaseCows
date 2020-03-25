import cowData from '../../helpers/data/cowData';
import smash from '../../helpers/data/smash';
import cowComponent from '../cow/cow';
import utils from '../../helpers/utils';

const removeCow = (e) => {
  const cowId = e.target.closest('.card').id;
  console.error(cowId);
  smash.completelyRemoveCow(cowId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildCows();
      utils.printToDom('single-farmer', '');
    })
    .catch((err) => console.error('could not delete cow', err));
};

const buildCows = () => {
  cowData.getCows()
    .then((cows) => {
      let domString = '';
      domString += '<h2 class="text-center mt-5 mb-2">Pasture</h2>';
      domString += '<div class="d-flex flex-wrap justify-content-center">';
      cows.forEach((cow) => {
        domString += cowComponent.cowMaker(cow);
      });
      domString += '</div>';
      utils.printToDom('pasture', domString);
      $('body').on('click', '.delete-cow', removeCow);
    })
    .catch((err) => console.error('get cows broke', err));
};

export default { buildCows };
