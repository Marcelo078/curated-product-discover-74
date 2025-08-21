import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Melhores Produtos Selecionados - Emagrecimento, Beleza, Saúde e Mais</title>
        <meta 
          name="description" 
          content="Descubra os melhores produtos testados e aprovados para emagrecimento, beleza, saúde e produtos financeiros. Soluções comprovadas com resultados reais." 
        />
        <meta name="keywords" content="produtos selecionados, emagrecimento, beleza, saúde, produtos naturais, suplementos, resultados comprovados" />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="Melhores Produtos Selecionados - Emagrecimento, Beleza, Saúde e Mais" />
        <meta property="og:description" content="Descubra os melhores produtos testados e aprovados para emagrecimento, beleza, saúde e produtos financeiros." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Products Section */}
          <section id="produtos" className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Produtos Cuidadosamente Selecionados
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Cada produto em nossa coleção foi rigorosamente testado e aprovado. 
                  Encontre a solução perfeita para suas necessidades.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
          
          {/* Trust Section */}
          <section className="py-16 bg-gradient-secondary">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Por Que Escolher Nossos Produtos?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Testados e Aprovados</h3>
                  <p className="text-muted-foreground">Todos os produtos passam por rigorosa curadoria e testes de qualidade.</p>
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">★</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Resultados Comprovados</h3>
                  <p className="text-muted-foreground">Milhares de clientes satisfeitos e resultados reais documentados.</p>
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">🛡</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">100% Confiáveis</h3>
                  <p className="text-muted-foreground">Parcerias com marcas estabelecidas e garantia de qualidade.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
