const assert = require('assert');
const { canExecute } = require('./utils');

describe('Your script file', () => {
  it('should have executable permissions', async () => {
    const fileIsExecutable = await canExecute('../bingo.sh');

    assert(fileIsExecutable);
  });
});
