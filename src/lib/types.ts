import { z } from "zod";

export const FormSchema = z.object({
  email: z
    .string()
    .describe("Email")
    .email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .describe("Password")
    .min(1, { message: "Password is required." }),
});

export const CreateWorkspaceFormSchema = z.object({
  workspaceName: z
    .string()
    .describe("Workspace Name")
    .min(1, { message: "Workspace name is required." }),
  logo: z.any(),
});
