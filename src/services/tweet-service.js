const { TweetRepository } = require('./../repository/index');

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
    }

    async create(data) {
        const content = data.content;
        const tags = content.match(/#[A-Za-z0-9_]+/g); //this regex extracts hashtags
        tags = tags.map(tag => tag.substring(1));
        console.log(tags);
        const tweet = await this.tweetRepository.create(data);
        //todo create hashtags and add here
        /*
        1. Bulk create in mongoose
        2. Filter title of hashtags based on multiple tags
        3. How to add tweetId inside all hashtags
        */
        return tweet;
    }
}

module.exports = TweetService;