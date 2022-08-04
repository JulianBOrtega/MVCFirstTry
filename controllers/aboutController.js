module.exports = 
{
    about: (req, res, next) => 
    {
        return res.render('about', 
        { 
          title: 'Express',
          name: 'Testing'
        });
    },

};