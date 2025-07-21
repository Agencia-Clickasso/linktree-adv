import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Phone, Mail, MapPin, Instagram, Linkedin, MessageCircle, Calendar, FileText, Scale, Users, Globe } from "lucide-react"

export default function LinktreePage() {
  const links = [
    {
      title: "Agendar Consulta",
      description: "Marque uma consulta jurídica",
      icon: Calendar,
      href: "#",
      primary: true,
    },
    {
      title: "WhatsApp",
      description: "Fale conosco pelo WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/551111967586911",
      color: "bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600",
    },
    {
      title: "Visite nosso site",
      description: "Conheça nossa advocacia",
      icon: Globe,
      href: "https://lucimeirexavieradvocacia.adv.br",
      color: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600",
    },
    {
      title: "Áreas de Atuação",
      description: "Conheça nossos serviços jurídicos",
      icon: Scale,
      href: "#",
    },
    {
      title: "Sobre o Escritório",
      description: "Nossa história e valores",
      icon: Users,
      href: "#",
    },
    {
      title: "Artigos Jurídicos",
      description: "Conteúdo especializado",
      icon: FileText,
      href: "#",
    },
    {
      title: "LinkedIn",
      description: "Conecte-se profissionalmente",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/lucimeire-xavier-b8b18aa0/",
      color: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600",
    },
    {
      title: "Instagram",
      description: "@dra.lucimeirexavier",
      icon: Instagram,
      href: "https://www.instagram.com/dra.lucimeirexavier",
      color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 dark:from-purple-600 dark:to-pink-600 dark:hover:from-purple-500 dark:hover:to-pink-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-amber-900/20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 max-w-md relative">
        {/* Theme Toggle */}
        <div className="absolute top-4 right-4 z-10">
          <ThemeToggle />
        </div>

        {/* Header with Logo */}
        <div className="text-center mb-8 pt-8">
          <div className="mb-6">
            <Image
              src="/logo-lucimeire-xavier.png"
              alt="Lucimeire Xavier Advocacia"
              width={300}
              height={200}
              className="mx-auto filter dark:brightness-110 dark:contrast-110"
              priority
            />
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Advocacia especializada com excelência e dedicação. Defendendo seus direitos com competência e ética.
          </p>
        </div>

        {/* Contact Info */}
        <Card className="p-4 mb-6 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-gray-800/50 dark:to-amber-900/30 border-amber-200 dark:border-amber-800/50 backdrop-blur-sm">
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Phone className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>(11) 96758-6911</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Mail className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>contato@lucimeirexavieradvocacia.adv.br</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <MapPin className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>São Paulo, SP</span>
            </div>
          </div>
        </Card>

        {/* Links */}
        <div className="space-y-3">
          {links.map((link, index) => {
            const Icon = link.icon
            return (
              <Button
                key={index}
                asChild
                variant="outline"
                className={`w-full h-auto p-4 justify-start text-left hover:scale-[1.02] transition-all duration-200 ${
                  link.primary
                    ? "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 dark:from-amber-600 dark:to-yellow-600 dark:hover:from-amber-500 dark:hover:to-yellow-500 text-white border-amber-400 dark:border-amber-500"
                    : link.color
                      ? `${link.color} text-white border-transparent`
                      : "bg-white/70 hover:bg-amber-50 dark:bg-gray-800/50 dark:hover:bg-gray-700/70 border-amber-200 hover:border-amber-300 dark:border-gray-700 dark:hover:border-amber-800/50 backdrop-blur-sm"
                }`}
              >
                <a href={link.href} className="flex items-center gap-3 w-full">
                  <Icon
                    className={`w-5 h-5 flex-shrink-0 ${
                      link.primary || link.color 
                        ? "text-white" 
                        : "text-amber-600 dark:text-amber-400"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <div className={`font-medium ${
                      link.primary || link.color 
                        ? "text-white" 
                        : "text-gray-900 dark:text-gray-100"
                    }`}>
                      {link.title}
                    </div>
                    <div className={`text-sm ${
                      link.primary || link.color 
                        ? "text-white/80" 
                        : "text-gray-500 dark:text-gray-400"
                    }`}>
                      {link.description}
                    </div>
                  </div>
                </a>
              </Button>
            )
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 pt-6 border-t border-amber-200 dark:border-amber-800/50">
          <p className="text-xs text-gray-500 dark:text-gray-400">OAB/SP 123.456 • Todos os direitos reservados</p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Advocacia com excelência desde 2010</p>
        </div>
      </div>
    </div>
  )
}
