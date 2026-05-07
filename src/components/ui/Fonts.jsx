const Fonts = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');
    .fr-app *{font-family:'Plus Jakarta Sans',sans-serif;box-sizing:border-box}
    .fr-syne{font-family:'Syne',sans-serif!important}
    .fr-app input,.fr-app select,.fr-app textarea{font-family:'Plus Jakarta Sans',sans-serif}
    .fr-card-hover:hover{transform:translateY(-3px);transition:transform .2s,box-shadow .2s}
    .fr-btn:hover{opacity:.88;transform:translateY(-1px)}
    .fr-stat:hover{transform:translateY(-4px);transition:transform .25s}
  `}</style>
);

export default Fonts;