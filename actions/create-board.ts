"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

const CreateBoard = z.object({
  title: z
    .string()
    .min(3, { message: "Minimum length of 3 letters is required" }),
});

export async function create(prevState: State, formData: FormData) {
  const validateFileds = CreateBoard.safeParse({
    title: formData.get("title"),
  });

  if (!validateFileds.success) {
    return {
      errors: validateFileds.error.flatten().fieldErrors,
      title: "Missing fileds.",
    };
  }

  const { title } = validateFileds.data;

  try {
    await db.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      message: "Database Error",
    };
  }

  revalidatePath("/organization/org_2YHCj1c1cXO0qRx8ZDJppbtDD9c");
  redirect("/organization/org_2YHCj1c1cXO0qRx8ZDJppbtDD9c");
}
