import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isFound = false;
    this._isDefined = false;
    this._users = {};
    this._userName = "";
    this._repos = [];
    this._page = 1;
    this._limit = 5;
    makeAutoObservable(this);
  }

  setUser(user) {
    this._users = user;
  }

  setUserName(name) {
    this._userName = name;
  }

  setUserIsFound(bool) {
    this._isFound = bool;
  }

  setUserIsDefined(bool) {
    this._isDefined = bool;
  }

  setRepos(repos) {
    this._repos = repos;
  }

  get users() {
    return this._users;
  }

  get userName() {
    return this._userName;
  }

  get repos() {
    return this._repos;
  }

  get isFound() {
    return this._isFound;
  }

  get isDefined() {
    return this._isDefined;
  }

  get pageR() {
    return this._page;
  }

  get limit() {
    return this._limit;
  }

  setPage(page) {
    this._page = page;
  }
}
