import utils from '../../helpers/utils';

const showEditForm = () => {
  const domString = 'edit cow';
  utils.printToDom('edit-cow', domString);
};

export default { showEditForm };
