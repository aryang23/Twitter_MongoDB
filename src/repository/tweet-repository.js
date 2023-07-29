const Tweet = require('./../models/tweet');

class TweetRepository {
    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async get(id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async getAll(offset, limit) {
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async getWithComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate({path:'comments'}).lean();
            return tweet;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async update(id, data) {
        try {
            const updatedTweet = await Tweet.findByIdAndUpdate(id, data, {new: true});
            return updatedTweet;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async destory(id) {
        try {
            await Tweet.findByIdAndRemove(id);
            return true;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    
}

module.exports = TweetRepository;