import {ERole} from 'src/types/user/ERole';

export interface RoleInterface {
  name: ERole
}

export interface UserLoginInterface {
  username: string | null;
  password: string | null;

}

export class UserLogin implements UserLoginInterface {
  password: string | null;
  username: string | null;

  constructor(password?: string, username?: string) {
    this.password = password || null;
    this.username = username || null;
  }
}

export interface UserInterface {
  id?: number | null,
  username?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  middleName?: string | null,
  roles?: RoleInterface[] | null,
  chairman?: UserInterface | null
  password?: string | null;
}

export class User implements UserInterface {
  get password(): string | null {
    return this._password;
  }

  set password(value: string | null) {
    this._password = value;
  }
  get chairman(): User | null {
    return this._chairman;
  }

  set chairman(value: User | null) {
    this._chairman = value;
  }

  get firstName(): string | null {
    return this._firstName;
  }

  set firstName(value: string | null) {
    this._firstName = value;
  }

  get id(): number | null {
    return this._id;
  }

  set id(value: number | null) {
    this._id = value;
  }

  get lastName(): string | null {
    return this._lastName;
  }

  set lastName(value: string | null) {
    this._lastName = value;
  }

  get middleName(): string | null {
    return this._middleName;
  }

  set middleName(value: string | null) {
    this._middleName = value;
  }

  get roles(): RoleInterface[] {
    return this._roles;
  }

  set roles(value: RoleInterface[]) {
    this._roles = value;
  }

  private _id: number | null;

  get username(): string | null {
    return this._username;
  }

  set username(value: string | null) {
    this._username = value;
  }

  private _username: string | null;
  private _firstName: string | null;
  private _lastName: string | null;
  private _middleName: string | null;
  private _roles: RoleInterface[];
  private _chairman: User | null;
  private _password: string | null;

  constructor(id?: number | null, username?: string | null, password?: string|null, firstName?: string | null,
              lastName?: string | null, middleName?: string | null, roles?: RoleInterface[], chairman?: User | null) {
    this._id = id ? id : null;
    this._firstName = firstName ? firstName : null;
    this._lastName = lastName ? lastName : null;
    this._middleName = middleName ? middleName : null;
    this._roles = roles ? roles : [];
    this._username = username ? username : null
    this._chairman = chairman? chairman : new User()
    this._password = password? password : null
  }


}
