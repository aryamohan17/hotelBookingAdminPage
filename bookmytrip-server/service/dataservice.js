const db = require('./db')

const allHotel=()=>{
    return db.User.find().then(result=>{
         if(result){
             return{
                 statusCode:200,
                 hotels:result
             }
         }
         else{
             return{
                 statusCode:404,
                 message:"data not in database"
             }
         }
     })
 }
 const addHotel=(id,image,name,place,rate,description)=>{
    return db.User.findOne({id}).then(result=>{
        if(result){
            return{
                statusCode:400,
                message:"EMployee already exist"
            }
        }
        else{
            const newEmp=new db.User({
                id,image,name,place,rate,description
            })
            newEmp.save()
            return{
                statusCode:200,
                message:"Hotel added sucessfully"
            }
        }
    })
}
const getHotel=(id)=>{
    return db.User.findOne({id}).then(result=>{
         if(result){
             return{
                 statusCode:200,
                 hotel:result
             }
         }
         else{
             return{
                 statusCode:404,
                 message:"Hotel not present"
             }
         }
     })
 }
 const editHotel = (id,image,name,place,rate,description)=>{
    return db.User.findOne({id}).then(result=>{
        if(result){
            result.id=id
            result.image=image
            result.name=name
            result.place=place
            result.rate=rate
            result.description=description

            result.save()
            return{
                statusCode:200,
                message:"Hotel data updated"
            }
        }
        else{
            return{
                statusCode:404,
                message:"Data not exist"
            }
        }
    })
}
const deleteHotel=(id)=>{
    return db.User.deleteOne({id}).then(result=>{
        if(result){
            return{
                statusCode:200,
                message:"Hotel data sucessfully deleted"
            }
        }
        else
        {
            return{
                statusCode:400,
                message:"Hotel not exist"
            }
        }
    })
}
const register=(username,password,Email)=>{
    return db.Register.findOne({Email}).then(result=>{
        if(result){
            return{
                status:false,
                statusCode:404,
                message:"User already exist"
            }
        }
        else{
            const newUser = new db.Register({username,password,Email})
            newUser.save()
            return{
                status:true,
                statusCode:200,
                message:"Sucessfully register"
            }
        }
    })
}
const login =(Email,password)=>{
    return db.Register.findOne({Email,password}).then(result=>{
        if(result){
            return{
                status:true,
                statusCode:200,
                message:"login sucessfully"
            }
        }
        else{
            return{
                status:false,
                statusCode:404,
                message:"email id or password incorrect"
            }
        }
    })
}

const registerUser=(email,username,password)=>{
    return db.LoginUser.findOne({email,username,password}).then(result=>{
        if(result){
            return{
                status:false,
                statusCode:400,
                message:"Already user exist"
            }
        }
        else{
            const newUser = new db.LoginUser({email,username,password})
            newUser.save()
            return{
                status:true,
                statusCode:200,
                message:"User sucessfully added"
            }
        }
    })
}
const loginuser=(email,password)=>{
    return db.LoginUser.findOne({email,password}).then(result=>{
        if(result){
            currentEmail=email
            return{
                status:true,
                statusCode:200,
                message:"Login sucessfully",
                currentEmail
            }
        }
        else{
            return{
                status:false,
                statusCode:404,
                message:"User not exist ,Please register"
            }
        }
    })
}
 module.exports={
    allHotel , addHotel , getHotel ,editHotel , deleteHotel,register,login,registerUser,loginuser
}