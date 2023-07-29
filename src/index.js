const express = require('express');

const app = express();
const connect = require('./config/database');

// const Tweet = require('./models/tweet');
const Comment = require('./models/comment');
const TweetRepository = require('./repository/tweet-repository');

app.listen(3000, async () => {
    console.log("Listening on Port 3000");
    await connect();
    console.log("DB Connected");
    // const tweet = await Tweet.create({
    //     content: "First"
    // });

    // const tweet = await Tweet.findById('64c54dc8ed1ff86438db3a53');
    // tweet.userEmail = 'b@c.com';
    // await tweet.save();

    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create({content: "First comment3"})
    // const comment = await Comment.create({content: 'New comment2'});
    // console.log(comment);
    // tweet.comments.push(comment);
    // await tweet.save();

    const tweet = await tweetRepo.getWithComments('64c56eeef2abfcbc92a0f2c1');
    console.log(tweet);
});
