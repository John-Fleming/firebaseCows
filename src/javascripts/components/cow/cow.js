const cowMaker = (cow) => {
  let domString = '';
  domString += '<div class="col-3">';
  domString += '<div class="card">';
  domString += '<div class="card-header"';
  domString += `<h3>${cow.name}</h3>`;
  domString += '</div>';
  domString += '<div class="card-body"';
  domString += `<p>${cow.breed}</p>`;
  domString += `<p>${cow.weight}</p>`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { cowMaker };
