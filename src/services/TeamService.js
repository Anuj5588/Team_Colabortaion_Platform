import team from "../models/team.js";

export const createTeamRepo = (data) => {
  return team.create(data);
};

// export const findTeamsByUserRepo = (userId) => {
//   return Team.find({ "members.userId": userId });
// };

// export const findTeamByIdRepo = (teamId) => {
//   return Team.findById(teamId);
// };

// export const updateTeamRepo = (teamId, update) => {
//   return Team.findByIdAndUpdate(teamId, update, { new: true });
// };
