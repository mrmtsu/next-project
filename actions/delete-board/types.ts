import { Board } from ".prisma/client";
import { DeleteBoard } from "@/actions/delete-board/schema";
import { ActionState } from "@/lib/create-safe-action";
import { z } from "zod";

export type InputType = z.infer<typeof DeleteBoard>;
export type ReturnType = ActionState<InputType, Board>;
