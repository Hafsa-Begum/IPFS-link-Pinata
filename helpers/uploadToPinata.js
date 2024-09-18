const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');


// Replace with your Pinata API keys
const pinataApiKey = '349f53e9542c037b30b4';
const pinataSecretApiKey = '2e41778314245aeecc4c843a57e6840f659da095e767be2ef44766aac37768b7';

// Function to upload image to Pinata
async function uploadToPinata(filePath) {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  
    let data = new FormData();
    data.append('file', fs.createReadStream(filePath));
  
    const config = {
      maxBodyLength: 'Infinity', // To prevent any size limit errors
      headers: {
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        'pinata_api_key': pinataApiKey,
        'pinata_secret_api_key': pinataSecretApiKey,
      },
    };
  
    try {
      const response = await axios.post(url, data, config);
      console.log('Successfully uploaded to IPFS');
      console.log('IPFS Hash:', response.data.IpfsHash);
      console.log('IPFS Link:', `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }

  module.exports = {
    uploadToPinata
  }