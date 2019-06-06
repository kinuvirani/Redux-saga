const {Test}=require('../sequelize')

exports.saveData=(body,done)=>{
    let test=new Test(body)
    test.save().then((doc)=>{
        done(null,doc)
    }).catch((err)=>{
        done(err,null)
    })
}

exports.getData=(done)=>{
    Test.findAll().then((doc)=>{
        done(null,doc)
    }).catch((err)=>{
        done(err,null)
    })
}

exports.deleteData=(id,done)=>{
    let id1=parseInt(id)
    return Test.destroy({where:{id:id1}}).then((doc)=>{
        return done(null,doc)
    }).catch((err)=>{
        return done(err,null)
    })
}

exports.updateData=(body,id,done)=>{
    let test=new Test(body)
    test.id=id
    Test.update(test.dataValues,{where:{id:id}}).then((doc)=>{
        Test.findAll({where:{id:id}}).then((data)=>{
            done(null,data)
        }).catch((err)=>{
            done(err,null)
        })
    }).catch((err)=>{
        done(err,null)
    })
}

