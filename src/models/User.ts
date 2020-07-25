export interface IUser {
  id?: number;
  name?: string;
}

export class User implements IUser {
  constructor (public id?: number, public name?: string) {}
}
