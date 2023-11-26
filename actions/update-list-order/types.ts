import { List } from ".prisma/client";
import { UpdateListOrder } from "@/actions/update-list-order/schema";
import { ActionState } from "@/lib/create-safe-action";
import { z } from "zod";

export type InputType = z.infer<typeof UpdateListOrder>;
export type ReturnType = ActionState<InputType, List[]>;
