const bcrypt = require('bcryptjs')
const data = {
    users: [
        {   
            name: "Seid",
            email: "Seid@gmial.com",
            password: bcrypt.hashSync('12345'),
            isAdmin: true
        },
        {
            name: "Ilkin",
            email: "Ilkin@gmial.com",
            password: bcrypt.hashSync('12345'),
            isAdmin: false
        }
    ]
}
export default data