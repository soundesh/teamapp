const mongoose = require('mongoose')

const IpldataSchema = new mongoose.Schema({
    team: {
        type: String,
        required: true,
        trim: true,
        default:"iplteam"
    },
    image:{
        type: String,
        default:'https://cricketaddictor.gumlet.io/wp-content/uploads/2021/03/IPL-2021-Schedule-Tickets-Auction-Teams-Venue-Starting-Date.jpg?compress=true&quality=80&w=1200&dpr=1.0'   
    },
    description:{
        type: String,
        default:"This year's IPL, which started on 9 April, filled the audience with enthusiasm. IPL 2022 matches were halted because of Corona. Now ending the specter of spectators, the BCCI has rescheduled the IPL to complete the remaining matches from 19 September.",    
    },
    match: {
        type: String,
        required: true,
        default:0
    },
    winings: {
        type: Number,
        default: 0
    },
    lose: {
        type: Number,
        default: 0
    },
    runrate: {
        type: Number,
        default: 0
    },
    totalpoints: {
        type: Number,
        default: 0
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Ipldatas', IpldataSchema)