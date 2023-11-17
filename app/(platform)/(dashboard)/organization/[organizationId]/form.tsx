"use client";
import { useFormState } from "react-dom";

import { create } from "@/actions/create-board";
import { FormButton } from "@/app/(platform)/(dashboard)/organization/[organizationId]/form-button";
import { FormInput } from "@/app/(platform)/(dashboard)/organization/[organizationId]/form-input";

export const Form = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(create, initialState);

  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={state?.errors} />
      </div>
      <FormButton />
    </form>
  );
};
