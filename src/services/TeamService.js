import Team from "../models/Team.js";

export const createTeamRepo = (data) => {
  return Team.create(data);
};

export const findTeamsByUserRepo = (userId) => {
  return Team.find({ "members.userId": userId });
};

export const findTeamByIdRepo = (teamId) => {
  return Team.findById(teamId);
};

export const updateTeamRepo = (teamId, update) => {
  return Team.findByIdAndUpdate(teamId, update, { new: true });
};
