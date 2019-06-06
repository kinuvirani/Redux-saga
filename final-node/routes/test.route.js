const {Router}=require('express')
const router=Router()

const {saveData,getData,deleteData,updateData} =require('../controller/test.controller')

router.post('/save',(req,res)=>{
    return saveData(req.body,(err,result)=>{
        if(err)
        {
            return res.status(400).send(err)
        }
        else
        {
            return res.status(200).send(result)
        }
    })
})

router.get('/get',(req,res)=>{
    return getData((err,result)=>{
        if(err)
        {
            return res.status(400).send(err)
        }
        else
        {
            return res.status(200).send(result)
        }
    })
})

router.delete('/data/delete/:id',(req,res)=>{
    return deleteData(req.params.id,(err,result)=>{
        if(err)
        {
            return res.status(400).json(err);
        }
        else
        {
            return res.status(200).json(result);
        }
    })
})

router.put('/update',(req,res)=>{
    return updateData(req.body,req.query.id,(err,result)=>{
        if(err){
            return res.status(400).send(err)
        }
        else
        {
            return res.status(200).send(result)
        }
    })
})

module.exports=router
