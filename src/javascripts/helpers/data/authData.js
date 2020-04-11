import firebase from 'firebase/app';
import 'firebase/auth';
import pasture from '../../components/pasture/pasture';
import farmhouse from '../../components/farmhouse/farmhouse';

const authDiv = $('#auth');
const pastureDiv = $('#pasture');
const farmerDiv = $('#farmhouse');
const singleFarmerDiv = $('#single-farmer');
const newCowDiv = $('#new-cow');
const editCowDiv = $('#edit-cow');
const logoutButton = $('#google-auth');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      authDiv.addClass('hide');
      pastureDiv.removeClass('hide');
      farmerDiv.removeClass('hide');
      singleFarmerDiv.removeClass('hide');
      newCowDiv.removeClass('hide');
      editCowDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      pasture.buildCows();
      pasture.pastureEvents();
      farmhouse.buildFarmers();
    } else {
      // person is not logged in
      authDiv.removeClass('hide');
      pastureDiv.addClass('hide');
      farmerDiv.addClass('hide');
      singleFarmerDiv.addClass('hide');
      newCowDiv.addClass('hide');
      editCowDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
