class User {
  constructor({ username, avatar }) {
    this.username = username;
    this.avatar = avatar;
  }

  static fromJson({ username, avatar }) {
    return User({ username, avatar });
  }

  toJson() {
    const username = this.username;
    const avatar = this.avatar;
    return JSON.stringify({
      username,
      avatar,
    });
  }
}

export default User;
