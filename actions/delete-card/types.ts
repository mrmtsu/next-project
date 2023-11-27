import { Card } from ".prisma/client";
import { DeleteCard } from "@/actions/delete-card/schema";
import { ActionState } from "@/lib/create-safe-action";
import { z } from "zod";

export type InputType = z.infer<typeof DeleteCard>;
export type ReturnType = ActionState<InputType, Card>;
