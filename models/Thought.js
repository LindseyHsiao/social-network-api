const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./Reaction')


const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: "Please leave a thought", 
        minlength: 1,
        maxlength: 280
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      },
      username: { //the user that created this thought
        type: String,
        required: true,
      },
      // use ReactionSchema to validate data for a reaction
      reactions: [reactionSchema]
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
    }
  );

const Thought = model('Thought', thoughtSchema);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

module.exports = Thought;