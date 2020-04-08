import farmerData from './farmerData';
import farmerCowData from './farmerCowData';
import cowData from './cowData';

const getSingleFarmerWithCows = (farmerId) => new Promise((resolve, reject) => {
  farmerData.getFarmerById(farmerId)
    .then((response) => {
      const farmer = response.data;
      farmer.id = farmerId;
      farmer.cows = [];
      farmerCowData.getFarmerCowsByFarmerUid(farmer.uid).then((farmerCows) => {
        cowData.getCows().then((allCows) => {
          farmerCows.forEach((farmerCow) => {
            const cow = allCows.find((x) => x.id === farmerCow.cowId);
            farmer.cows.push(cow);
          });
          resolve(farmer);
        });
      });
    })
    .catch((err) => reject(err));
});

const completelyRemoveCow = (cowId) => new Promise((resolve, reject) => {
  cowData.deleteCow(cowId)
    .then(() => {
      farmerCowData.getFarmerCowsByCowId(cowId).then((farmerCows) => {
        farmerCows.forEach((farmerCow) => {
          farmerCowData.deleteFarmerCow(farmerCow.id);
        });
        resolve();
      });
    })
    .catch((err) => reject(err));
});

const getCowsWithOwners = () => new Promise((resolve, reject) => {
  cowData.getCows()
    .then((cowsResponse) => {
      farmerData.getFarmers().then((farmerResponse) => {
        farmerCowData.getFarmerCows().then((farmerCowResponse) => {
          console.log('cowsResponse', cowsResponse);
          console.log('farmerResponse', farmerResponse);
          console.log('farmerCowResponse', farmerCowResponse);
          const finalCows = [];
          cowsResponse.forEach((oneCow) => {
            const cow = { farmers: [], ...oneCow };
            const farmerCowOwners = farmerCowResponse.filter((x) => x.cowId === cow.id);
            farmerResponse.forEach((oneFarmer) => {
              const farmer = { ...oneFarmer };
              const isOwner = farmerCowOwners.find((x) => x.farmerUid === farmer.uid);
              farmer.isChecked = isOwner !== undefined;
              cow.farmers.push(farmer);
            });
            finalCows.push(cow);
          });
          console.log('finalCows', finalCows);
          resolve(finalCows);
        });
      });
    })
    .catch((err) => reject(err));
});

export default { getSingleFarmerWithCows, completelyRemoveCow, getCowsWithOwners };
