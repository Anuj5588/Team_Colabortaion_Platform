import { createTeamRepo } from "../services/TeamService.js"


class TeamController{
    async  createTeam(req,res){
         try{
            const userID = req.body.userId;
            const name  = req.body.name;

            const createTeam = await  createTeamRepo({userID, name})
            
console.log(createTeam)


         }catch(err){
            console.log(err)
         }
    }

}

export default new TeamController()