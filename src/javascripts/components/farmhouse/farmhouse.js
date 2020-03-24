import farmerData from '../../helpers/data/farmerData';
import farmersComponent from '../farmers/farmers';
import singleFarmer from '../single-farmer/single-farmer';
import utils from '../../helpers/utils';

const buildFarmers = () => {
  farmerData.getFarmers()
    .then((farmers) => {
      let domString = '';
      domString += '<h2 class="text-center mt-5 mb-2">Farmers</h2>';
      domString += '<div class="d-flex flex-wrap justify-content-center">';
      farmers.forEach((farmer) => {
        domString += farmersComponent.farmerMaker(farmer);
      });
      domString += '</div>';
      utils.printToDom('farmhouse', domString);
      $('body').on('click', '.farmer-card', singleFarmer.buildSingleFarmer);
    })
    .catch((err) => console.error('get farmers broke', err));
};

export default { buildFarmers };
