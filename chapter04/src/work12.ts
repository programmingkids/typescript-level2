export {};

interface UserData {
  name: string;
  age: number;
}

// T型はUserDataの部分型
class User<T extends UserData> {
  userData: T;
  constructor(userData: T) {
    this.userData = userData;
  }
}

// UserDataの部分型
const u1 = new User<{
  name: string;
  age: number;
  hobby: string;
}>({
  name: 'Tom',
  age: 15,
  hobby: 'Spy',
});
console.log(u1);

// UserDataの部分型
const u2 = new User<{
  name: string;
  age: number;
  hobby: string;
  school: string;
}>({
  name: 'Indy',
  age: 15,
  hobby: 'Travel',
  school: 'Harvard University',
});
console.log(u2);
