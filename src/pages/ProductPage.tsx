import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/Footer";
import { products } from "@/data/products";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ExternalLink, CheckCircle, Star, Shield } from "lucide-react";

const ProductPage = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const handleCTAClick = () => {
    window.open(product.affiliateLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Helmet>
        <title>{product.metaTitle}</title>
        <meta name="description" content={product.metaDescription} />
        <meta name="keywords" content={product.keywords.join(', ')} />
        <link rel="canonical" href={`/produto/${product.slug}`} />
        <meta property="og:title" content={product.metaTitle} />
        <meta property="og:description" content={product.metaDescription} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`/produto/${product.slug}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="bg-white border-b border-border sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para produtos
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-hero text-hero-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="bg-white/20 text-hero-foreground border-white/30 mb-4">
                {product.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {product.name}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-hero-foreground/90">
                {product.description}
              </p>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-medium">100% Seguro</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium">Resultados Comprovados</span>
                </div>
              </div>

              <Button 
                variant="secondary" 
                size="lg" 
                onClick={handleCTAClick}
                className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-6 text-lg shadow-glow"
              >
                Quero Aproveitar Agora
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Benefits Section */}
          <Card className="mb-12 shadow-card border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Principais Benefícios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-success/5">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-card-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Detailed Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Tudo que você precisa saber sobre {product.name}
            </h2>
            
            <div className="text-muted-foreground leading-relaxed space-y-6">
              <p>{product.longContent}</p>
              
              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Como Funciona?</h3>
              <p>
                {product.name} foi desenvolvido com tecnologia avançada e ingredientes cuidadosamente selecionados 
                para proporcionar os melhores resultados. O produto atua de forma natural e segura, 
                oferecendo benefícios duradouros sem comprometer sua saúde.
              </p>
              
              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Principais Características</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {product.howToUse && (
                <>
                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Como Usar</h3>
                  <p>{product.howToUse}</p>
                </>
              )}
            </div>
          </div>

          {/* FAQ Section */}
          <Card className="mb-12 shadow-card border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Perguntas Frequentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {product.faqs.map((faq, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Final CTA */}
          <Card className="bg-gradient-hero text-hero-foreground text-center shadow-glow border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Não Perca Esta Oportunidade!
              </h3>
              <p className="text-lg mb-6 text-hero-foreground/90">
                Milhares de pessoas já transformaram suas vidas com {product.name}. 
                Faça parte deste grupo de sucesso!
              </p>
              
              <Button 
                variant="secondary" 
                size="lg" 
                onClick={handleCTAClick}
                className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-6 text-lg"
              >
                Comprar Agora
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
              
              <p className="text-sm mt-4 text-hero-foreground/70">
                * Clique no botão acima para ser redirecionado para a página oficial do produto
              </p>
            </CardContent>
          </Card>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProductPage;