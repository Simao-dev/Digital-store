import InformacaoComponente from './InformationComponent';


const Informacoes = () => {
  const informations = [
    { text: 'Sobre Drip Store', 
    link: '/about' 
    },
    { text: 'Segurança', 
    link: '/Segurança' 
    },
    { text: 'Wishlist', 
    link: '/Wishlist' 
    },
    { text: 'Blog', 
    link: '/blog' 
    },
    { text: 'Trabalhe conosco', 
    link: '/Trabalhe conosco' 
    },
    { text: 'Meus Pedidos', 
    link: '/Meus Pedidos' 
    },
    ];

  return (
    <div>
      <InformacaoComponente title="Informações Úteis" informations={informations} />
    </div>
  );
};

export default Informacoes;