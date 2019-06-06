const Sequelize=require('sequelize')
const testModel=require('./schema/test.schema')
const Op=Sequelize.Op;


const sequelize=new Sequelize('demo', 'root', '',{
    host:'localhost',
    dialect:'mysql'
})
const Test=testModel(sequelize,Sequelize)

sequelize.authenticate().then(()=>{
    console.log("Connection established successfully")
}).catch(()=>{
    console.log("Unable to connect to database")
})

// sequelize.sync().then(()=>{
//     console.log("Table has been created successfully")
// })

module.exports={Test}
