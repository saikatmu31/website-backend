const Event = require('../models/Event')

exports.addNewEvent = async (req, res) => {
    try {
        const { eventImage, eventDetails, dateofEvent, eventTitle } = req.body;

        if (!(eventImage && eventDetails && dateofEvent && eventTitle)) {
            return res.status(400).json({
                Message: "All fields are required"
            })
        }
        const event = await Event.create({
            eventImage,
            eventTitle,
            eventDetails,
            dateofEvent,
        })

        return res.status(200).json({
            Message: "Success",
            Event : event.eventTitle,
            EventDetails : event.eventTitle 
        })
 
    } catch (error) {
        return res.status(400).json({ 
            Error: "Couldn't add Event Successfully" 
        })
    }

}