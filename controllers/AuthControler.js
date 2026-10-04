const User = require('../models/User')  //é necessário chamar o modulo do usuário pois iremos trabalhar com ele 

//biblioteca para descriptografia de senha e envio de hash para o banco
const bcrypt = require('bcryptjs')


module.exports = class AuthController {

    static login(req, res) {
        res.render('auth/login.handlebars')
    }

    static register(req, res) {
        res.render('auth/register.handlebars')
    }

//lógica que vai para o banco
    static async registerPost(req, res) {
        
    const { name, email, password, confirmpassword } = req.body

    // password validation, verificar se o usuario esta enviando senha correta
    if(password != confirmpassword) {
    // mensagem - flash messages, estao no middleware index.js
    req.flash('message', 'As senhas não conferem, tente novamente!')
    res.render('auth/register')

    return
    }

    //check if user exists
    const checkIfUserExists = await User.findOne({where: {email: email}})

    if(checkIfUserExists) {
         req.flash('message', 'e-mail já em uso')
         res.render('auth/register')

         return
    }

    // create a password
    const salt = bcrypt.genSaltSync(10)  //10 caracteres para complicar senha
    const hashedPassword = bcrypt.hashSync(password, salt)

    const user = {
        name,
        email,
        password: hashedPassword
    }

try {
 const createdUser = await User.create(user)

 // inicializar session
 req.session.userid = createdUser.id

 req.flash('message', 'Cadastro realizado com sucesso!') //gera criação do usuario no banco

 //garantindo que a sessão seja salve antes de redirecionar o usuário para /
 req.session.save(() => {
res.redirect('/')
 })

} catch(err) {
    console.log(err)
    }  

}
//método de logout
    static logout (req, res){
        req.session.destroy()
        res.redirect('/login')
    }
   

}


 