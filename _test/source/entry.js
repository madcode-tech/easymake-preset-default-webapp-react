import './style.styl';

import isPlainObject from 'is-plain-object';

const sayHello = (val, cb) => {
  cb && cb(val);

  // this not work without babel-polyfill
  //"foobar".includes("foo");

  const test = ['a', 'b'];

  ['a', 'b'].map(function(a) {
    console.log(a);
    if (a = true) {
      return a;
    }
  });

  const test2 = [...test];

  if (val) {
    const test = {val};

    if (test.val) {
      return 'none';
    }

    val ? val ? val: val : val;

    if (val = true) {
      return true;
    }

    var foo = new Boolean(val);

    if (foo) {
        return val;
    }

    return 'Hello';
  } else {
    return 'test';
  }
};

console.log('test');

export default sayHello;
