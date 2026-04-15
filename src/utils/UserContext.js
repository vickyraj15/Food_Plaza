import { createContext } from "react";

const UserContext = createContext({
    user: { name: "vicky", email: "vickyraj15@gmail.com" },
});
export default UserContext;
UserContext.displayName = "UserContext";
