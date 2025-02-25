/* eslint-disable no-unused-vars */

interface Customer {
  name: string;
  details?: {
    address?: {
      city: string;
      street: string;
      zip: string;
    };
    age?: number;
  };
}

const v1 = { value: 'Something' };
const v2 = '';
const v3 = undefined;
const v4 = [3, 5, 7, 9];
const v5: Customer = {
  name: 'Carl',
  details: {
    age: 82,
  },
};

// 4.i
v1 && console.log('v1 is truthy');

// 4.ii
v2 && console.log('v2 is truthy');

// 5.i
const config1 = v1 || 'default-value';

// 5.ii
const config2 = v2 || 'default-value';

// 6.
console.log('config1:', config1);
console.log('config2:', config2);

// 7.i
const cfg1 = v1 ?? 'default-value';

// 7.ii
const cfg2 = v2 ?? 'default-value';

// 7.iii
const cfg3 = v3 ?? 'default-value';

// 8.
console.log('cfg1:', cfg1);
console.log('cfg2:', cfg2);
console.log('cfg3:', cfg3);

// 9.i
const tern1 = v1 ? 'truthy' : 'falsy';

// 9.ii
const tern2 = v2 ? 'truthy' : 'falsy';

// 10.
console.log('tern1:', tern1);
console.log('tern2:', tern2);

// 11.i
const oc1 = v1?.value;

// 11.ii
const oc2 = v5?.details?.address?.city;

// 12
console.log('oc1:', oc1);
console.log('oc2:', oc2);

// 13.i
const sObj = { ...v1, foo: 'bar' };

// 14
console.log('sObj:', sObj);

// 15.i
const sArr = [100, ...v4];

// 16
console.log('sArr:', sArr);
