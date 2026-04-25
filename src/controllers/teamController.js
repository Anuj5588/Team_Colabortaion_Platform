import { createTeamRepo,addMemberService } from "../services/TeamService.js";

class TeamController {
  async createTeam(req, res) {
    try {
      const userID = req.user.id;
      const name = req.body.name;
      const team = await createTeamRepo({ createdBy: userID, name });
      if (!team) {
        return res.json({
          Error: "Not able to create team",
        });
      }
      const formattedTeam = {
        id: team._id,
        name: team.name,
        createdBy: {
          id: team.createdBy._id,
          name: team.createdBy.name,
        },
        members: team.members.map((m) => ({
          user: m.userId,
          role: m.role,
        })),
        createdAt: team.createdAt,
      };

      return res.status(200).json({
        success: true,
        message: "Team created successfully",
        data: formattedTeam,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async addMembers(req, res){

     const teamId = req.params.id
     const userId = req.body
     const role  = req.body
     const loggedInUserId= req.user._id

    try{

      const addMembers = await ({teamId,userId,role,loggedInUserId})

      if(!addMembers){
        return res.json({
          Error:"Member not added"
        })
      }
  

      else{

        return res.status(200).json({
          Success:"-Member added successfully",
          addMembers
        })
      }




    }catch(err){
      console.log(err)
    }

  }
}

export default new TeamController();
