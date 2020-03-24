const farmerMaker = (farmer) => {
  let domString = '';
  domString += '<div class="col-3">';
  domString += '<div class="card">';
  domString += '<div class="card-header">';
  domString += `<h3 class="card-title"><strong>${farmer.name}</strong></h3>`;
  domString += '</div>';
  domString += '<div class="card-body">';
  domString += `<p class="card-text">Age: ${farmer.age}</p>`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { farmerMaker };
