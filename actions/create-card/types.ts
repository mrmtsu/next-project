import { Card } from ".prisma/client";
import { CreateCard } from "@/actions/create-card/schema";
import { ActionState } from "@/lib/create-safe-action";
import { z } from "zod";

export type InputType = z.infer<typeof CreateCard>;
export type ReturnType = ActionState<InputType, Card>;
