import { List } from ".prisma/client";
import { CreateList } from "@/actions/create-list/schema";
import { ActionState } from "@/lib/create-safe-action";
import { z } from "zod";

export type InputType = z.infer<typeof CreateList>;
export type ReturnType = ActionState<InputType, List>;
