var inquirer = require('inquirer');
var qr = require('qr-image');
var fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'url',
      message: 'Enter the URL:',
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    var input_url = answers.url;

    // Append the URL to a file
    fs.appendFile('input_urls.txt', input_url + '\n', (err) => {
      if (err) {
        console.error('Error appending URL to file:', err);
        return;
      }
      console.log('URL Registered Successfully.');

      // Generate QR code and save it as SVG with a unique filename
      var timestamp = new Date().getTime(); // Use timestamp for uniqueness
      var filename = `${input_url}_${timestamp}.svg`;

      var qr_svg = qr.image(input_url, { type: 'svg' });
      qr_svg.pipe(fs.createWriteStream(filename));

      console.log('QR Generated Successfully:', filename);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
