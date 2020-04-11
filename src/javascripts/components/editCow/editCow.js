import utils from '../../helpers/utils';
import cowData from '../../helpers/data/cowData';

const showEditForm = (cowId) => {
  cowData.getSingleCow(cowId)
    .then((resp) => {
      const cow = resp.data;
      let domString = '';
      domString += '<h2 class="text-center my-5">Update Cow</h2>';
      domString += `<form class="col-10 offset-1 edit-cow-form-tag" id=${cowId}>`;
      domString += '<div class="form-group">';
      domString += '  <label for="cow-name">Name</label>';
      domString += `  <input type="text" class="form-control" id="edit-cow-name" placeholder="Bessie" value=${cow.name}>`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '  <label for="cow-breed">Breed</label>';
      domString += `  <input type="text" class="form-control" id="edit-cow-breed" placeholder="Jersey" value=${cow.breed}>`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '  <label for="cow-location">Location</label>';
      domString += `  <input type="text" class="form-control" id="edit-cow-location" placeholder="On a farm" value=${cow.location}>`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '  <label for="cow-weight">Weight (lbs)</label>';
      domString += ` <input type="number" class="form-control" id="edit-cow-weight" placeholder="55" value=${cow.weight}>`;
      domString += '</div>';
      domString += '<button type="submit" id="cow-modifier-btn" class="btn btn-dark">Modify Cow</button>';
      domString += '</form>';
      utils.printToDom('new-cow', domString);
    })
    .catch((err) => console.error('could not get single cow', err));
};

export default { showEditForm };
