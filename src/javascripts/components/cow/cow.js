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
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { cowMaker };
