import { Card } from ".prisma/client";
import { CopyCard } from "@/actions/copy-card/schema";
import { ActionState } from "@/lib/create-safe-action";
import { z } from "zod";

export type InputType = z.infer<typeof CopyCard>;
export type ReturnType = ActionState<InputType, Card>;
