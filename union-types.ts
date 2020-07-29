//   ========= enums
enum Role {
    ADMIN = 'ADMIN',
  }
  
  const person = {
    name: 'M Ahmed Mushtaq',
    role: Role.ADMIN,
  };
  
  console.log('person is = ', person);
  
  //  =============  union types ==========
  
  // type alias
  
  type Combine = number | string;
  
  function addStringOrNumber(n1: Combine, n2: number | string, type: 'as-number' | 'as-text') {
    if (type === 'as-number') {
      return +n1 + +n2;
    } else {
      return n1.toString() + n2.toString();
    }
  }
  
  console.log('add Union number  = ', addStringOrNumber(1, 2, 'as-number'));
  
  type User = { name: string } | string;
  let u1: User = { name: 'Max' };
  u1 = 'Michael';
  
  console.log('check = ', u1);