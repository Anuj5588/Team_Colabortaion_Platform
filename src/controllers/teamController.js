import { createTeamRepo } from "../services/TeamService.js";

class TeamController {
  async createTeam(req, res) {
    try {
      const userID = req.user.id;
      console.log("----->>>",req.user.id)
      const name = req.body.name;

      const createTeam = await createTeamRepo({ createdBy:userID, name });
      if (!createTeam) {
        return res.json({
          Error: "Not able to create team",
        });
      }

      return res.status(200).json({
        Success: "Team is created",
        createTeam,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export default new TeamController();
