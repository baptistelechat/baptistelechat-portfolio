"use client";
import { Mail } from "lucide-react";
import * as z from "zod";
import AutoForm, { AutoFormSubmit } from "./ui/auto-form";

// Define your form schema using zod
const formSchema = z.object({
  subject: z
    .string({
      required_error: "Subject is required.",
    })
    .describe("Objet"),
  message: z
    .string({
      required_error: "Message is required.",
    })
    .describe("Message"),
});

const ContactForm = () => {
  const handleSubmit = (values: { subject: string; message: string }) => {
    const input = document.getElementById("contact-form") as HTMLAnchorElement;
    const encodedMessage = values.message.replace(/\n/g, "%0A");
    input.href = `mailto:baptistelechat@outlook.fr?subject=${values.subject}&body=${encodedMessage}`;
    input.click();
  };

  return (
    <AutoForm
      formSchema={formSchema}
      fieldConfig={{
        message: {
          fieldType: "textarea",
        },
      }}
      onSubmit={(values) => handleSubmit(values)}
    >
      <AutoFormSubmit className="w-fit bg-card hover:cursor-pointer hover:bg-accent hover:text-accent-foreground">
        <Mail className="mr-2 size-4" />Envoyé
      </AutoFormSubmit>
    </AutoForm>
  );
};

export default ContactForm;
