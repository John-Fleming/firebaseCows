import cowData from '../../helpers/data/cowData';
import cowComponent from '../cow/cow';
import utils from '../../helpers/utils';

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
    })
    .catch((err) => console.error('get cows broke', err));
};

export default { buildCows };
