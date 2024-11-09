import InformacoesContatos from '../Contatos/InfomacoesContatos';

const Contatos = () => {
  const informations = [
    { text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161', 
    link: '/about' 
    },
    { text: '(85) 3051-3411', 
    link: '/about' 
    },
    ];

  return (
    <div>
      <InformacoesContatos title="Contato" informations={informations} />
    </div>
  );
};

export default Contatos;