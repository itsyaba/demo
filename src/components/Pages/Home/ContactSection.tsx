import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { User, Phone, Mail, HelpCircle, PhoneCall } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactSection() {
  const [isSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit() {}

  return (
    <section className="w-full py-20 overflow-hidden relative" id="contact">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2e3549] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F47458] rounded-full translate-y-1/2 -translate-x-1/2 opacity-80" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold  mb-4">
            <span className="line"> </span>
            Get your space organized
          </h2>
          <p className="text-gray-400">I am ready to rescue your space.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Name"
                            {...field}
                            className="pl-10 py-6 bg-white border-gray-200 text-gray-700"
                          />
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Phone"
                            {...field}
                            className="pl-10 py-6 bg-white border-gray-200 text-gray-700"
                          />
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                        </div>
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
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Email"
                            {...field}
                            className="pl-10 py-6 bg-white border-gray-200 text-gray-700"
                          />
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Textarea
                            placeholder="How can we help?"
                            {...field}
                            className="pl-10 pt-4 min-h-[150px]  bg-white border-gray-200 text-gray-700"
                          />
                          <HelpCircle className="absolute left-3 top-4 text-gray-400 h-5 w-5" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-[#F47458] hover:bg-[#E56447] text-white py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>
              </form>
            </Form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="line"> </span>
                Contact Info
              </h3>
              <div className="flex items-start space-x-3 text-gray-600">
                <PhoneCall className="h-5 w-5 mt-1 text-[#F47458]" />
                <p> 443-695-7696</p>
              </div>
              <div className="flex items-start space-x-3 text-gray-600 mt-2">
                <Mail className="h-5 w-5 mt-1 text-[#F47458]" />
                <p>Email: Info@themojoeffect.com</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">
                <span className="line"> </span>
                Work Days
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span className="text-md">Mon - Sat</span>
                  <span className="text-md uppercase">09am - 03pm</span>
                </div>
                <hr className="my-4 bg-gray-600" />
                <div className="flex justify-between">
                  <span className="text-md">Sunday</span>
                  <span className="text-md text-yellowC font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
