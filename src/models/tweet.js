class Tweet {
  constructor({ username, tweet }) {
    this.username = username;
    this.tweet = tweet;
  }

  static fromJson({ username, tweet }) {
    return Tweet({ username, tweet });
  }

  toJson() {
    const username = this.username;
    const tweet = this.tweet;
    return JSON.stringify({
      username,
      tweet,
    });
  }
}

export default Tweet;
