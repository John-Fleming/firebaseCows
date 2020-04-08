import cowData from '../../helpers/data/cowData';
import smash from '../../helpers/data/smash';
import cowComponent from '../cow/cow';
import newCowComponent from '../newCow/newCow';
import utils from '../../helpers/utils';
import farmerCowData from '../../helpers/data/farmerCowData';

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

const makeACow = (e) => {
  e.preventDefault();
  const newCow = {
    name: $('#cow-name').val(),
    breed: $('#cow-breed').val(),
    location: $('#cow-location').val(),
    weight: $('#cow-weight').val() * 1,
  };
  cowData.addCow(newCow)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildCows();
      utils.printToDom('new-cow', '');
    })
    .catch((err) => console.error('could not add cow', err));
};

const farmerCowController = (e) => {
  e.preventDefault();
  if (e.target.checked) {
    const newFarmerCow = {
      cowId: e.target.closest('.card').id,
      farmerUid: e.target.dataset.farmerUid,
    };
    farmerCowData.addFarmerCow(newFarmerCow)
      .then(() => {
        // eslint-disable-next-line no-use-before-define
        buildCows();
        utils.printToDom('new-cow', '');
        utils.printToDom('single-farmer', '');
      })
      .catch((err) => console.error('could not create a farmer cow', err));
  } else {
    const farmerCowId = e.target.id;
    farmerCowData.deleteFarmerCow(farmerCowId)
      .then(() => {
        // eslint-disable-next-line no-use-before-define
        buildCows();
        utils.printToDom('new-cow', '');
        utils.printToDom('single-farmer', '');
      })
      .catch((err) => console.error('could not delete farmer cow', err));
  }
};

const buildCows = () => {
  smash.getCowsWithOwners()
    .then((cows) => {
      let domString = '';
      domString += '<h2 class="text-center mt-5 mb-2">Pasture</h2>';
      domString += '<button id="show-add-cow-form" class="btn btn-success mb-2"><i class="fas fa-plus"></i></button>';
      domString += '<div class="d-flex flex-wrap justify-content-center">';
      cows.forEach((cow) => {
        domString += cowComponent.cowMaker(cow);
      });
      domString += '</div>';
      utils.printToDom('pasture', domString);
      $('#show-add-cow-form').click(newCowComponent.showForm);
    })
    .catch((err) => console.error('get cows broke', err));
};

const pastureEvents = () => {
  $('body').on('click', '.delete-cow', removeCow);
  $('body').on('click', '#cow-creator-btn', makeACow);
  $('body').on('click', '.farmer-cow-checkbox', farmerCowController);
};

export default { buildCows, pastureEvents };
