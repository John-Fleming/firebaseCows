const cowMaker = (cow) => {
  let domString = '';
  domString += '<div class="col-3">';
  domString += `<div class="card mt-2" id="${cow.id}">`;
  domString += '<div class="card-header">';
  domString += `<h3 class="card-title"><strong>${cow.name}</strong></h3>`;
  domString += '</div>';
  domString += '<div class="card-body">';
  domString += `<p class="card-text">Breed: ${cow.breed}</p>`;
  domString += `<p class="card-text">Weight: ${cow.weight}</p>`;
  domString += `<p class="card-text">Location: ${cow.location}</p>`;
  domString += '<button class="btn btn-danger delete-cow"><i class="far fa-trash-alt text-center"></i></button>';
  domString += '<p class="card-text mt-2">Owner(s)</p>';
  domString += '<form>';
  cow.farmers.forEach((farmer) => {
    domString += '<div class="form-check">';
    domString += `<input type="checkbox" class="form-check-input farmer-cow-checkbox" data-farmer-uid=${farmer.uid} id=${farmer.farmerCowId} ${farmer.isChecked ? 'checked' : ''}>`;
    domString += `<label class="form-check-label" for="exampleCheck1">${farmer.name}</label>`;
    domString += '</div>';
  });
  domString += '</form>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { cowMaker };
