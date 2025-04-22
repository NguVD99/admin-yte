
const getAdmin = (req, res) => {
    res.render('admin.ejs')
};

const getloginAdmin = (req, res) => {
    res.render('loginAdmin.ejs')
}

const getEditPassword = (req, res) => {
    res.render('editPassWord.ejs')
};

const getListUser = (req, res) => {
    res.render('listUser.ejs')
}

const getAddUser = (req, res) => {
    res.render('addUser.ejs')
}

const getHome = (req, res) => {
    res.render('home.ejs')
}

const getForm = (req, res) => {
    res.render('form.ejs')
}

module.exports = {
    getloginAdmin,
    getAdmin,
    getEditPassword,
    getListUser,
    getAddUser,
    getHome,
    getForm
}