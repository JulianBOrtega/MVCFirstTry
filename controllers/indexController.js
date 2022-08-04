module.exports = 
{
    index: (req, res, next) => 
    {
        return res.render('home', 
        { 
          title: 'Express',
          name: 'Testing'
        });
    },

};