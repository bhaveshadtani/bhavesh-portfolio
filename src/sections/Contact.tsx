import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mail = "bhaveshadtani2001@gmail.com";
    const subject = encodeURIComponent(`Portfolio Contact — ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:${mail}?subject=${subject}&body=${body}`;
    toast({ title: "Thanks!", description: "Your email client is opening now." });
  };

  return (
    <section id="contact" aria-label="Contact" className="border-t border-border py-20">
      <div className="container mx-auto">
        <h2 className="mb-10 text-center font-heading text-3xl md:text-4xl">Contact</h2>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <form onSubmit={onSubmit} className="space-y-4 rounded-lg border bg-card p-6 shadow-sm">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm">Name</label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm">Email</label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm">Message</label>
              <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={6} required />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
          <div className="space-y-6">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="font-semibold">Connect</h3>
              <p className="mt-2 text-sm text-muted-foreground">Find me on professional networks</p>
              <div className="mt-4 flex gap-3">
                <a className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm hover:bg-accent" href="https://github.com/bhaveshadtani" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm hover:bg-accent" href="https://www.linkedin.com/in/bhavesh-adtani/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm hover:bg-accent" href="mailto:bhaveshadtani2001@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4" /> Email
                </a>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="font-semibold">Availability</h3>
              <p className="mt-2 text-sm text-muted-foreground">I'm currently available for freelance projects and full-time opportunities. Let's discuss how I can help bring your ideas to life!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}