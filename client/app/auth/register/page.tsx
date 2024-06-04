"use client";

import { useRouter } from "next/navigation";
import { z } from "zod";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { registerFormAction } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  registerFormSchema,
  useRegisterForm,
} from "@/hooks/form/useRegisterForm";

const RegisterForm = () => {
  const form = useRegisterForm();
  const router = useRouter();

  async function onSubmit(values: z.infer<typeof registerFormSchema>) {
    const res = await registerFormAction(values);

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
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Firstname</FormLabel>
                <FormControl>
                  <Input placeholder="Firstname" {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lastname</FormLabel>
                <FormControl>
                  <Input placeholder="Lastname" {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                  <Input type="password" placeholder="Password" {...field} />
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
          Register
        </Button>
        <div className="mx-auto">
          <Button
            type="button"
            onClick={() => {
              router.push("/auth/login");
            }}
            variant="link"
          >
            Already have an account? Login here
          </Button>
        </div>
      </div>
    </form>
  );
};

const Page = () => {
  return (
    <div className="flex grow">
      <Card className="w-[50%] mx-auto mt-[15%] max-w-[30rem] p-[1rem]">
        <CardTitle className="text-center py-[10px]">Register</CardTitle>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
