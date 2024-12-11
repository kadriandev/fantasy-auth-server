import { createSubjects } from "@openauthjs/openauth";
import { object, string } from "valibot";

export const subjects = createSubjects({
  user: object({
    userID: string(),
    // may want to add workspaceID here if doing a multi-tenant app
    workspaceID: string(),
  }),
});
