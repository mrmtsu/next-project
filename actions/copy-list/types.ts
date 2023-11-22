import { List } from ".prisma/client";
import { CopyList } from "@/actions/copy-list/schema";
import { ActionState } from "@/lib/create-safe-action";
import { z } from "zod";

export type InputType = z.infer<typeof CopyList>;
export type ReturnType = ActionState<InputType, List>;
