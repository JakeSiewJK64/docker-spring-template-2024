"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginFormAction } from "@/actions/auth";
import { loginFormSchema, useLoginForm } from "@/hooks/form/useLoginForm";
import { z } from "zod";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const form = useLoginForm();
  const router = useRouter();

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    const res = await loginFormAction(values);

    if (res === 200) {
      router.push("/dashboard");
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-[1rem]">
        <Form {...form}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Form>
        <Button
          type="submit"
          className="w-full"
          disabled={!form.formState.isValid}
        >
          Login
        </Button>
        <div className="mx-auto">
          <Button
            type="button"
            onClick={() => {
              router.push("/auth/register");
            }}
            variant="link"
          >
            New user? Register here
          </Button>
        </div>
      </div>
    </form>
  );
};

const Page = () => {
  return (
    <div className="flex grow">
      <Card className="w-[50%] mx-auto mt-[25%] max-w-[30rem] p-[1rem]">
        <CardTitle className="text-center py-[10px]">Login</CardTitle>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
