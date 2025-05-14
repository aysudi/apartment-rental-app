export class User {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  role: string;
  profileImage: string;
  balance: number;
  hostRequest: boolean;
  isBanned: boolean;
  deleted: boolean;
  constructor(
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    role = "client",
    profileImage: string = "",
    balance: number = 0,
    hostRequest: boolean = false,
    isBanned: boolean = false,
    deleted: boolean = false
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
    this.profileImage = profileImage;
    this.balance = balance;
    this.hostRequest = hostRequest;
    this.isBanned = isBanned;
    this.deleted = deleted;
  }
}
