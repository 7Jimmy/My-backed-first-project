const mongoose=require("mongoose");


const Schema=mongoose.Schema;


const listingSchema= new Schema({
    title: {
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:String,
        default:"https://media.istockphoto.com/id/1130761760/photo/wazir-khan-mosque-lahore-pakistan.webp?a=1&b=1&s=612x612&w=0&k=20&c=UmrbLbIf7eKOIumvrliLdQOqrZIGF8Ia-jAMeKcGv98=",
        set:(v)=>v===""?"https://media.istockphoto.com/id/1834467942/photo/badshahi-mosque-in-lahore-punjab-province-pakistan.webp?a=1&b=1&s=612x612&w=0&k=20&c=jOqWKz8ME68-eRYEMhjEtcrO_A21iXMYrK10PguHJI0=":v,
    },
    price:Number,
    location:String,
    country:String,

})
const Listing=mongoose.model("Listings",listingSchema);
module.exports=Listing;