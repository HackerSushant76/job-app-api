const { default: mongoose } = require("mongoose");

const jobSchema = mongoose.Schema({
    company: String,
    city: String,
    location : String,
    role: String,
    level: String,
    contract: String,
    position: String,
    language: String
},{
    timestamps: {
        createdAt: 'postedAt',
        // updatedAt: 'updated_at'
    }
})
const Job = mongoose.model("job" , jobSchema)

module.exports = {Job}