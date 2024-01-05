"use client";

import { Form } from "@/components/ui/form";
import { FormSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { actionSignupUser } from "@/lib/server-actions/auth-actions";

const SignUpFormSchema = z
  .object({
    email: z.string().describe("Email").email({ message: "Invalid Email" }),
    password: z
      .string()
      .describe("Password")
      .min(6, "Password must be minimum 6 characters"),
    confirmPassword: z
      .string()
      .describe("Confirm Password")
      .min(6, "Password must be minimum 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ["confirmPassword"],
  });

const Signup = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [submitError, setSubmitError] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  const codeExchangeError = useMemo(() => {
    if (!searchParams) return "";
    return searchParams.get("error_description");
  }, [searchParams]);

  const confirmationAndErrorStyles = useMemo(
    () =>
      clsx("bg-primary", {
        "bg-red-500/10": codeExchangeError,
        "border-red-500/50": codeExchangeError,
        "text-red-700": codeExchangeError,
      }),
    [codeExchangeError]
  );

  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async ({ email, password }: z.infer<typeof FormSchema>) => {
    const { error } = await actionSignupUser({ email, password });
    if (error) {
      setSubmitError(error.message);
      form.reset();
      return;
    }
    setConfirmation(true);
  };

  return (
    <Form {...form}>
      <form
        onChange={() => {
          if (submitError) setSubmitError("");
        }}
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full sm:justify-center sm:w-[400px]
        space-y-6 flex
        flex-col
        "
      ></form>
    </Form>
  );
};

export default Signup;
