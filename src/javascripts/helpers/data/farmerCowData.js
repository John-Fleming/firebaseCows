import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getFarmerCowsByFarmerUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/farmerCows.json?orderBy="farmerUid"&equalTo="${uid}"`)
    .then((response) => {
      const demFarmerCows = response.data;
      const farmerCows = [];
      Object.keys(demFarmerCows).forEach((farmerCowId) => {
        demFarmerCows[farmerCowId].id = farmerCowId;
        farmerCows.push(demFarmerCows[farmerCowId]);
      });
      resolve(farmerCows);
    })
    .catch((err) => reject(err));
});

const getFarmerCowsByCowId = (cowId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/farmerCows.json?orderBy="cowId"&equalTo="${cowId}"`)
    .then((response) => {
      const demFarmerCows = response.data;
      const farmerCows = [];
      Object.keys(demFarmerCows).forEach((farmerCowId) => {
        demFarmerCows[farmerCowId].id = farmerCowId;
        farmerCows.push(demFarmerCows[farmerCowId]);
      });
      resolve(farmerCows);
    })
    .catch((err) => reject(err));
});

const getFarmerCows = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/farmerCows.json`)
    .then((response) => {
      const demFarmerCows = response.data;
      const farmerCows = [];
      Object.keys(demFarmerCows).forEach((farmerCowId) => {
        demFarmerCows[farmerCowId].id = farmerCowId;
        farmerCows.push(demFarmerCows[farmerCowId]);
      });
      resolve(farmerCows);
    })
    .catch((err) => reject(err));
});

const addFarmerCow = (newFarmerCow) => axios.post(`${baseUrl}/farmerCows.json`, newFarmerCow);

const deleteFarmerCow = (farmerCowId) => axios.delete(`${baseUrl}/farmerCows/${farmerCowId}.json`);

export default {
  getFarmerCowsByFarmerUid,
  getFarmerCowsByCowId,
  deleteFarmerCow,
  getFarmerCows,
  addFarmerCow,
};
