const TransformRunner = require('../src/TransformRunner');

const config = require('@parcel/config-default');
const runner = new TransformRunner(config, {});

describe('TransformRunner', function () {
  it('should transform some shit', async function () {
    let dummyAsset = {
      filePath: __dirname + '/index.js',
      code: `
        function helloworld() {
          return 1 + 1;
        }

        console.log(helloworld());
      `
    };

    let result = await runner.transformAsset(dummyAsset);
    console.log(result);
  });

  it('should transform some shitty typescript', async function () {
    let dummyAsset = {
      filePath: __dirname + '/index.ts',
      code: `
        function helloworld(count: number) {
          return 1 + count;
        }

        console.log(helloworld(5));
      `
    };

    let result = await runner.transformAsset(dummyAsset);
    console.log(result);
  });
});