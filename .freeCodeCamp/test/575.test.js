const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand(0, false);

    assert(/^\s*\[\[\s+-a\s+(\.\/)?bad_file\.txt\s+\]\]\s*;\s*echo\s+\$\?\s*;?\s*$/g.test(lastCommand));
  });
});
