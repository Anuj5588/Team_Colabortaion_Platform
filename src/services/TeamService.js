import team from "../models/team.js";
import User from "../models/User.js";
import mongoose from "mongoose";

export const createTeamRepo = async (data) => {
  const newTeam = await team.create({name:data.name, createdBy:data.createdBy,members:[{
    userId:data.createdBy,
    role:"admin"
  }]});

console.log(newTeam)
  
  return await newTeam.populate([{path:"createdBy", select:"name"},{path:"members.userId", select:"name email"}])
};

export const addMemberService = async ({
  teamId,
  userId,
  role,
  loggedInUserId
}) => {

  // ✅ 1. Validate ObjectIds
  if (!mongoose.Types.ObjectId.isValid(teamId)) {
    throw new Error("Invalid teamId");
  }

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new Error("Invalid userId");
  }

  // ✅ 2. Find team
  const team = await Team.findById(teamId);
  if (!team) {
    throw new Error("Team not found");
  }

  // ✅ 3. Check if logged-in user is admin
  const isAdmin = team.members.find(
    (m) =>
      m.userId.toString() === loggedInUserId &&
      m.role === "admin"
  );

  if (!isAdmin) {
    throw new Error("Only admin can add members");
  }

  // ✅ 4. Check if user exists
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  // ✅ 5. Prevent duplicate member
  const alreadyMember = team.members.find(
    (m) => m.userId.toString() === userId
  );

  if (alreadyMember) {
    throw new Error("User already in team");
  }

  // ✅ 6. Validate role
  const validRoles = ["admin", "member"];
  const finalRole = role && validRoles.includes(role)
    ? role
    : "member";

  // ✅ 7. Add member
  team.members.push({
    userId,
    role: finalRole
  });

  await team.save();

  // ✅ 8. Populate data for response
  await team.populate([
    { path: "createdBy", select: "name" },
    { path: "members.userId", select: "name email" }
  ]);

  return team;
};
