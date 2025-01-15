const mongoose=require("mongoose");
const Listing=require("../models/listings.js");
const initData=require("./data.js");



main().then(()=>{
    console.log("i am db")
}).catch((err)=>{
    console.log(err)
})
async function main(){
    mongoose.connect('mongodb://127.0.0.1:27017/sharjeel')
}

const insertDB=(async()=>{

    await Listing.deleteMany()
    await Listing.insertMany(initData.data)
    console.log("insert data succesfully")
})

insertDB();


