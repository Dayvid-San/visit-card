import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import Link from "next/link";
import React, { CSSProperties, useEffect, useState } from "react";
import { useForm } from "@formspree/react";
import SuccessModal from "../../components/sucessModal";


export default function ContactPage() {
  
  const contactTitle = "Vamos Conversar";
  const contactSubtitle = "Estou sempre aberto a novas oportunidades e colaborações. Entre em contato comigo através dos canais abaixo.";

  const [state, handleSubmit] = useForm("mlgpprer");
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);
    }
  }, [state.succeeded]);

  const handleCloseModal = () => {
    setShowModal(false);
    window.location.reload(); 
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "santana.dayvid@outlook.com",
      href: "mailto:santana.dayvid@outlook.com",
      description: "Respondo em até 24 horas"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/dayvid-santana-jr",
      href: "https://www.linkedin.com/in/dayvid-santana-jr/",
      description: "Respondo em até 42 horas"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@Dayvid-San",
      href: "https://github.com/Dayvid-San",
      description: "Confira meus projetos"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Paraná, Brasil",
      href: null,
      description: "Disponível para trabalho remoto"
    }
  ];

  return (
    <div className="container relative px-4 py-16 md:py-24">


      {/* Contact Cards Section */}
      <section className="relative z-20 mx-auto max-w-4xl mb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{contact.label}</h3>
                      {contact.href ? (
                        <Link 
                          href={contact.href}
                          className="text-primary hover:underline mb-1 block"
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                        >
                          {contact.value}
                        </Link>
                      ) : (
                        <p className="text-muted-foreground mb-1">{contact.value}</p>
                      )}
                      <p className="text-sm text-muted-foreground">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative z-20 mx-auto max-w-2xl">
        <Card>
          <CardContent className="p-8 md:p-12">
            <h2 className="mb-6 text-3xl font-bold text-balance">
              Envie uma Mensagem
            </h2>
            <form 
              className="space-y-6"
              action="https://formspree.io/f/mlgpprer"
              method="POST"
              >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="seu.email@exemplo.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Sobre o que deseja falar?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Escreva sua mensagem aqui..."
                  required
                />
              </div>
              
              <Button 
              type="submit" 
              size="lg" 
              className="w-full" 
              disabled={state.submitting}
            >
              {state.submitting ? "Enviando..." : "Enviar Mensagem"}
            </Button>
            </form>
          </CardContent>
        </Card>
      </section>
      <SuccessModal 
        isOpen={showModal} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}
