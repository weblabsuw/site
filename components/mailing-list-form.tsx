"use client";
 
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { config } from "@/content/config";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
});

export function MailingListForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formEndpoint = config.loopsFormEndpoint;
    const mailingListIds = config.loopsListId ?? "";
    const userGroup = "Website signups";
    const formBody = `firstName=${encodeURIComponent(values.firstName)}&lastName=${encodeURIComponent(values.lastName)}&email=${encodeURIComponent(values.email)}&mailingLists=${encodeURIComponent(mailingListIds)}&userGroup=${encodeURIComponent(userGroup)}`;
    
    if (!formEndpoint) {
      console.error("Loops form endpoint is not set.");
      return;
    }
    
    const res = await fetch(formEndpoint, {
      method: "POST",
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const result = await res.json();

    if (res.ok && result.success) {
      form.reset();
      toast.success(`You've been subscribed, ${values.firstName}! 🎉`);
    } else {
      console.error(result.message);
      toast.error("Oops! Something went wrong. 😳");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex items-center space-x-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input placeholder="Bucky" className="bg-surface" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="Badger" className="bg-surface" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="buckybadger@wisc.edu" className="bg-surface" {...field} />
              </FormControl>
              <FormDescription className="text-[0.65rem] leading-none opacity-30">
                (You can unsubscribe at any time.)
              </FormDescription>
              <FormMessage className="text-red-400 italic"/>
            </FormItem>
          )}
        />

        <div className="pt-2">
          <Button
            type="submit"
            className="px-3 py-1.5 text-sm font-bold text-onPrimary bg-primary rounded-lg"
          >
            Add me!
          </Button>
        </div>
      </form>
    </Form>
  );
}
