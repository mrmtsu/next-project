import { Board } from ".prisma/client";
import { UpdateBoard } from "@/actions/update-board/schema";
import { ActionState } from "@/lib/create-safe-action";
import { z } from "zod";

export type InputType = z.infer<typeof UpdateBoard>;
export type ReturnType = ActionState<InputType, Board>;
