/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	email: {
  		type:'email',
  		required: true
  	},
  	
  	firstname: {
  		type:'string',
  		required: true
  	},

  	lastname: {
  		type:'string',
  		required: true
  	},
    
  	resume: {
  		type: 'string',
  		required: true
  	}
  },

  signup: function(inputs, cb) {
  	User.create({
  		firstname: inputs.firstname,
  		lastname: inputs.lastname,
      resume:inputs.resume,
  		email: inputs.email,
  		password: inputs.password
  	}).exec(cb);
  },

  attemptLogin: function(inputs, cb){
  	User.findOne({
  		email: inputs.email,
  		password: inputs.password
  	}).exec(cb);
  }
};

