const aiService = require("../services/ai.services")


module.exports.getReview = async (req, res) => {

    try {

        const code = req.body.code;

        if(!code){
            return res.status(400).send("Code is required");
        }


        const response = await aiService(code);

        res.send(response);


    } catch(error){

        console.log(error);

        res.status(500).send("AI service failed");

    }

}