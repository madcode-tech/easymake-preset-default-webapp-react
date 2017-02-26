import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import entry from '../entry.js';

describe('default test', function() {
  it('must be true', function() {
    expect(entry()).to.be.equal('test');
  });

  it("should call callback with correct greeting", function () {
      var cb = sinon.spy();

      entry(undefined, cb);

      expect(cb).to.have.been.calledWith(undefined);

      var a = '';
      if (a = true) {
        return a;
      }
  });
});
