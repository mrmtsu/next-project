import { Card } from ".prisma/client";
import { UpdateCardOrder } from "@/actions/update-card-order/schema";
import { ActionState } from "@/lib/create-safe-action";
import { z } from "zod";

export type InputType = z.infer<typeof UpdateCardOrder>;
export type ReturnType = ActionState<InputType, Card[]>;
