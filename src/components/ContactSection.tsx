import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";


const TELEGRAM_TOKEN = "8009883144:AAHlkhUrM8SIGSSaoXpSDZjyN1OB2zUTwwU";
const CHAT_ID = "-1003288915989";

type FormValues = {
  name: string;
  email: string;
  message: string;
  phone: string;
};

const ContactSection = () => {
  const { reset, register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    let message = `<b>Message from Customer</b>\n`;
    message += `<b>Name:</b> ${data.name}\n`;
    message += `<b>Email:</b> ${data.email}\n`;
    message += `<b>Phone Number:</b> ${data.phone}\n`;
    message += `<b>Message:</b> ${data.message}\n`;
    axios
      .post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "HTML",
      })
      .then(() => {
        toast.success("Message sent successfully!");
        reset();
      })
      .catch(() => toast.error("Failed to send message!"));
  };

  return (
    <section id="contact" className="py-20 relative section-divider">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 font-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="automotive-card p-8 rounded-2xl animate-fade-in">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                  className="bg-background/50 border-border"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", { required: true })}
                  className="bg-background/50 border-border"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  {...register("phone", { required: true })}
                  className="bg-background/50 border-border"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  {...register("message", { required: true })}
                  className="bg-background/50 border-border resize-none"
                />
              </div>
              <Button className="w-full glow-orange bg-primary hover:bg-primary/90 text-white group font-semibold">
                Send Message
                <Send
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div
            className="space-y-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="space-y-6">
              <div className="automotive-card p-6 rounded-xl flex items-start gap-4 hover:scale-105 transition-transform">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href="tel:+998999889555" className="text-muted-foreground">
                    +998 99-988-95-55
                  </a>
                </div>
              </div>

              <div className="automotive-card p-6 rounded-xl flex items-start gap-4 hover:scale-105 transition-transform">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:rabinolshop@gmail.com"
                    className="text-muted-foreground"
                  >
                    rabinolshop@gmail.com
                  </a>
                </div>
              </div>

              <div className="automotive-card p-6 rounded-xl flex items-start gap-4 hover:scale-105 transition-transform">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-muted-foreground">Gulistan, Syrdarya</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="automotive-card rounded-xl overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d276.5816023778979!2d68.76552243290692!3d40.502892554010934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1762709341559!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
