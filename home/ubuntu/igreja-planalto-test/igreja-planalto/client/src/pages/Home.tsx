import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Footer from "@/components/Footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Image Background and Integrated Navbar */}
      <section className="relative h-screen flex flex-col overflow-hidden">
        {/* Church Image Background */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/hero-church.png"
            alt="Igreja Adventista do Sétimo Dia"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Navbar - Integrated within Hero */}
        <nav className="relative z-10 bg-transparent">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              {/* Logo/Brand */}
              <Link href="/" className="text-white font-bold text-lg hover:text-primary transition-colors">
                <img src="/logo-iasd-planalto.png" alt="IASD Planalto Logo" className="h-20 w-auto" />
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-white hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/sobre" className="text-white hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
                <Link href="/ministerios" className="text-white hover:text-primary transition-colors">
                  Ministérios
                </Link>
                <Link href="/galeria" className="text-white hover:text-primary transition-colors">
                  Galeria
                </Link>
                <Link href="/contato" className="text-white hover:text-primary transition-colors">
                  Contato
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white p-2"
                aria-label="Toggle menu"
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden py-4 space-y-3 border-t border-white/10">
                <Link 
                  href="/" 
                  className="block text-white hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/sobre" 
                  className="block text-white hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre Nós
                </Link>
                <Link 
                  href="/ministerios" 
                  className="block text-white hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ministérios
                </Link>
                <Link 
                  href="/galeria" 
                  className="block text-white hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Galeria
                </Link>
                <Link 
                  href="/contato" 
                  className="block text-white hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-white mb-2">
              <span className="block text-3xl md:text-4xl font-light tracking-widest mb-2">IASD</span>
              <span className="block text-6xl md:text-8xl font-bold tracking-tight">Setor Planalto</span>
              <span className="block text-2xl md:text-4xl font-light mt-4">Itumbiara - GO</span>
            </h1>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <i className="fas fa-chevron-down text-white text-2xl opacity-70"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section - Two Column Layout */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text and CTA */}
            <div className="lg:pr-12">
              <img 
                src="/logo-welcome-section.png" 
                alt="Logo Igreja Adventista" 
                className="h-32 mb-6 object-contain"
              />
              <h2 className="text-5xl md:text-7xl font-extrabold text-foreground font-montserrat mb-6 leading-tight">
                Sua Jornada de Fé Começa Aqui.
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Mais do que um lugar, somos uma **família** em Itumbiara - GO, unida pelo propósito de viver e compartilhar o amor transformador de Jesus Cristo. Encontre aqui adoração genuína, comunhão autêntica e o apoio para o seu crescimento espiritual.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <i className="fas fa-arrow-right mr-3"></i>
                  Conheça Nossa História
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 px-10 py-7 text-lg font-medium transition-all duration-300"
                >
                  <i className="fas fa-calendar-alt mr-3"></i>
                  Ver Horários de Culto
                </Button>
              </div>
            </div>

            {/* Right Column - Visual Placeholder */}
            <div className="hidden lg:block">
              <img 
                src="/new-welcome-logo.png" 
                alt="Logo de Boas-Vindas" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Grid Layout */}
      <section className="py-32 bg-card relative">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground font-montserrat mb-6">
              Nossa Missão
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto"></div>
          </div>

          {/* Three Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Card 1 - Refined */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 md:p-10">
                {/* Icon with subtle background */}
                <div className="mb-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                    <i className="fas fa-bible text-4xl text-primary"></i>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-montserrat">
                  Estudo da Bíblia
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Aprofunde seu conhecimento das Escrituras através de estudos bíblicos semanais, grupos de discussão e seminários temáticos que enriquecem a fé.
                </p>
              </div>
              {/* Subtle bottom border on hover */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            </div>

            {/* Card 2 - Refined */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 md:p-10">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                    <i className="fas fa-users text-4xl text-primary"></i>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-montserrat">
                  Comunhão
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Construa relacionamentos significativos com irmãos em Cristo em um ambiente acolhedor, familiar e verdadeiramente inclusivo.
                </p>
              </div>
              {/* Subtle bottom border on hover */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            </div>

            {/* Card 3 - Refined */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 md:p-10">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                    <i className="fas fa-hand-holding-heart text-4xl text-primary"></i>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-montserrat">
                  Serviço
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Coloque sua fé em ação através de projetos sociais e comunitários que demonstram o amor de Cristo de forma prática.
                </p>
              </div>
              {/* Subtle bottom border on hover */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Bible Study Section - Refactored */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Books Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
                <img 
                  src="/livros-estudo-biblico.png" 
                  alt="Livros de Estudo Biblico" 
                  className="relative w-full max-w-md h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:pl-12 order-1 lg:order-2">
              <div className="mb-8">
                <h3 className="text-5xl md:text-6xl font-extrabold text-foreground font-montserrat mb-4 leading-tight">
                  Quer um Estudo Biblico?
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 p-8 rounded-2xl shadow-lg mb-8 border-l-4 border-primary backdrop-blur-sm">
                <p className="text-xl text-foreground italic font-light mb-4 leading-relaxed">
                  "Bem-aventurado aquele que le, e bem-aventurados aqueles que ouvem as palavras desta profecia..."
                </p>
                <p className="text-sm text-primary font-semibold uppercase tracking-widest">
                  Apocalipse 1:3
                </p>
              </div>

              <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-light">
                Aprofunde seu conhecimento da Palavra de Deus atraves de nossos estudos biblicos personalizados. Nos oferecemos materiais de qualidade e orientacao espiritual para ajuda-lo em sua jornada de fe.
              </p>

              <a href="https://wa.me/5564999999999?text=Ola! Gostaria de solicitar um estudo biblico." target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-7 text-lg font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <i className="fab fa-whatsapp mr-3 text-2xl"></i>
                  Solicitar Estudo Biblico
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground font-montserrat mb-6">
              Nossos Ministérios
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto"></div>
          </div>

          {/* Ministries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Ministry Card 1: Heróis da Fé */}
            <div className="text-center p-8 transition-all duration-300">
              <img src="/herois-da-fe-logo.png" alt="Heróis da Fé Logo" className="w-64 h-64 object-contain mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground font-montserrat mb-3">Heróis da Fé</h3>
              <p className="text-muted-foreground">Nosso Pequeno Grupo de estudo e comunhão. Um lugar para crescer na fé e construir amizades verdadeiras.</p>
            </div>

            {/* Ministry Card 2: Sons do Céu */}
            <div className="text-center p-8 transition-all duration-300">
              <img src="/sons-do-ceu-logo.png" alt="Sons do Céu Logo" className="w-64 h-64 object-contain mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground font-montserrat mb-3">Sons do Céu</h3>
              <p className="text-muted-foreground">Ministério de Louvor e Adoração. Conduz a igreja à presença de Deus através da música e do cântico.</p>
            </div>

            {/* Ministry Card 3: Impacto Jovem Adventista */}
            <div className="text-center p-8 transition-all duration-300">
              <img src="/impacto-jovem-logo.png" alt="Impacto Jovem Adventista Logo" className="w-64 h-64 object-contain mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground font-montserrat mb-3">Impacto Jovem Adventista</h3>
              <p className="text-muted-foreground">Movimento Jovem focado em discipulado, evangelismo e serviço comunitário, transformando o mundo ao nosso redor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-card relative">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground font-montserrat mb-6">
              Galeria de Momentos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto"></div>
          </div>

          {/* Placeholder for Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Batismos */}
            <div className="aspect-square rounded-xl shadow-lg overflow-hidden">
              <img src="/galeria-5.jpg" alt="Batismo na Piscina" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="aspect-square rounded-xl shadow-lg overflow-hidden">
              <img src="/galeria-8.jpg" alt="Batismo no Batistério" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="aspect-square rounded-xl shadow-lg overflow-hidden">
              <img src="/galeria-4.jpg" alt="Abraço após o Batismo" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            {/* Outras Fotos */}
            <div className="aspect-square rounded-xl shadow-lg overflow-hidden">
              <img src="/galeria-1.jpg" alt="Comunhão" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="aspect-square rounded-xl shadow-lg overflow-hidden">
              <img src="/galeria-2.jpg" alt="Culto" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="aspect-square rounded-xl shadow-lg overflow-hidden">
              <img src="/galeria-3.jpg" alt="Louvor" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="aspect-square rounded-xl shadow-lg overflow-hidden">
              <img src="/galeria-6.jpg" alt="Grupo" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="aspect-square rounded-xl shadow-lg overflow-hidden">
              <img src="/galeria-7.jpg" alt="Desbravadores" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Novo Tempo Section - Improved Design */}
      <section className="py-32 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground font-montserrat mb-6">
              Transmissão ao Vivo
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto"></div>
          </div>

          {/* YouTube Embed Placeholder */}
          <div className="max-w-4xl mx-auto aspect-video bg-black rounded-xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-center h-full">
              <p className="text-white/50">Placeholder para o player do YouTube</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-muted-foreground mb-6">
              Acompanhe nossos cultos e programas ao vivo todos os Sábados e Quartas-feiras.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              <i className="fab fa-youtube mr-3"></i>
              Acessar Canal do YouTube
            </Button>
          </div>
        </div>
      </section>

{/* Novo Tempo Section */}
      <section className="py-32 bg-gray-100 dark:bg-gray-900 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground font-montserrat mb-6">
              Nossa Mídia
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Logo and Text */}
            <div>
              <img src="/logo-novo-tempo.png" alt="TV Novo Tempo" className="w-64 h-auto mb-8 mx-auto lg:mx-0" />
              <p className="text-xl text-muted-foreground mb-8">
                A TV Novo Tempo é uma janela de luz em meio ao cotidiano, compartilhando fé, esperança e propósito. Sua programação une estudo, inspiração e valores cristãos, convidando cada pessoa a encontrar conforto, direção e renovação na Palavra. É um espaço onde o coração descansa, onde a mente aprende e onde a vida encontra novos horizontes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://ntplay.com/home/index.html" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                    <i className="fas fa-tv mr-3"></i>
                    Assistir Agora
                  </Button>
                </a>
                <a href="https://www.novotempo.com/tv/#onde-assistir" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="px-10 py-7 text-lg font-medium border-2 border-primary/30 hover:border-primary hover:bg-primary/5">
                    <i className="fas fa-info-circle mr-3"></i>
                    Mais Informações
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column - Channel Info */}
            <div className="lg:pl-12">
              <h3 className="text-4xl font-bold text-foreground font-montserrat mb-6 text-center lg:text-left">
                Canais de TV por Assinatura
              </h3>
              <div className="space-y-6 text-center lg:text-left">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-1">Net/Claro</p>
                  <p className="text-4xl text-primary font-extrabold tracking-tight">184 e 684</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-1">Sky</p>
                  <p className="text-4xl text-primary font-extrabold tracking-tight">33 e 433</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-1">Oi</p>
                  <p className="text-4xl text-primary font-extrabold tracking-tight">214</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-32 bg-card relative">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground font-montserrat mb-6">
              Nos Visite
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Google Maps Embed */}
            <div className="aspect-video lg:aspect-auto h-96 rounded-xl shadow-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.632285544425!2d-49.238125800000006!3d-18.409579300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a10d040f6107e1%3A0x9f8433db0858172a!2sR.%20Sumar%C3%A9%2C%20628%20-%20St.%20Planalto%2C%20Itumbiara%20-%20GO%2C%2075533-250%2C%20Brazil!5e0!3m2!1sen!2sus!4v1764279564289!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-12">
              <h3 className="text-4xl font-bold text-foreground font-montserrat mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <i className="fas fa-map-marker-alt text-primary text-3xl mt-1"></i>
                  <div>
                    <p className="text-lg font-semibold text-foreground">Endereço</p>
                    <p className="text-muted-foreground">Rua Sumaré, 628, Setor Planalto, Itumbiara - GO</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <i className="fas fa-phone text-primary text-3xl mt-1"></i>
                  <div>
                    <p className="text-lg font-semibold text-foreground">Telefone</p>
                    <p className="text-muted-foreground">(64) 99999-9999</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <i className="fas fa-envelope text-primary text-3xl mt-1"></i>
                  <div>
                    <p className="text-lg font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">contato@iasdplanalto.com.br</p>
                  </div>
                </div>

                {/* Service Times */}
                <div className="flex items-start gap-4">
                  <i className="fas fa-clock text-primary text-3xl mt-1"></i>
                  <div>
                    <p className="text-lg font-semibold text-foreground">Horários de Culto</p>
                    <p className="text-muted-foreground">Sábados: 9h00 (Escola Sabatina) e 10h30 (Culto Divino)</p>
                    <p className="text-muted-foreground">Quartas-feiras: 20h00 (Culto de Oração)</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a href="https://www.google.com/maps/dir/?api=1&destination=Rua+Sumar%C3%A9,+628,+Setor+Planalto,+Itumbiara+-+GO" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                    <i className="fas fa-map-marker-alt mr-3"></i>
                    Como Chegar
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="px-10 py-7 text-lg font-medium border-2 border-primary/30 hover:border-primary hover:bg-primary/5">
                  <i className="far fa-calendar-alt mr-3"></i>
                  Ver Programação
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
