/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `UserController.login()`
   */
  login: function (req, res) {
    login: function(req, res) {
      return res.login({
        email: req.param('email'),
        password: req.param('password'),
        succesRedirect: 'web/userhome'
      })
    },

  /**
   * `UserController.logout()`
   */
  logout: function (req, res) {
    req.session.me = null;
    if (req.wantsJSON){
      return res.ok('Logged out Sucessfully!');
    }
    return res.redirect('/'); 
  },


  /**
   * `UserController.signup()`
   */
  signup: function (req, res) {

    User.signup({
      firstname: req.param('firstName'),
      lastname: req.param('lastName'),
      email: req.param('email'),
      resume: req.file('resume')

      })

    }, function(err,user) {
      if (err) return res.negotiate(err);

      req.session.me = user.id;
    }

    if (req.wantsJSON) {
      return res.ok('Signup successful!');
    }

    return res.redirect('/userhome');
    });
  }
};

