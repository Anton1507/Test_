const {Schema,model}=require('mongoose');

const SiteSchema = new Schema({
    id:{type:String},
    site:{type:String},
    

})

module.exports=model('SiteSchema',SiteSchema);
