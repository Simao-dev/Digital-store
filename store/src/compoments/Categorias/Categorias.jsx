import InformationCategoria from '../Categorias/CategoriasInformacoes';

const Cetorias = () => {
  const informations = [
    { text: 'Camisetas', 
    link: '/Camisetas' 
    },
    { text: 'Calças', 
    link: '/Calças' 
    },
    { text: 'Bonés', 
    link: '/Bonés' 
    },
    { text: 'Headphones', 
    link: '/Headphones' 
    },
    { text: 'Tênis', 
    link: '/Tênis' 
    },
    ];

  return (
    <div>
      <InformationCategoria title="Categorias" informations={informations} />
    </div>
  );
};

export default Cetorias;