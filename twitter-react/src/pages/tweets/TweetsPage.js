import './TweetsPage.css'; // Importamos el archivo css

const tweets = [
    {
      content:
        "Nos hace mucha ilusión anunciar la fecha del ESTRENO de 'Eso que tu me das', documental con la última entrevista a Pau Donés. 30 DE SEPTIEMBRE, en cines de toda España. @WarnerBrosSpain Y este es el cartel definitivo, con algunas frases de críticas que ya se han publicado.",
      userId: 1,
      updatedAt: '2021-03-15T18:23:57.579Z',
      id: 1,
    },
    {
      content:
        "'Soy muy fan tuya, pero ahora no me acuerdo cómo te llamas' (Una desconocida, en la calle).",
      userId: 1,
      updatedAt: '2021-03-15T18:24:56.773Z',
      id: 2,
    },
  ];

function TweetsPage() {
    return (
    <div className="tweetsPage">
        <ul>
            {tweets.map(tweet => (
            <li key={tweet.id}>{tweet.content}</li>))}
        </ul>
    </div>
    );
}

export default TweetsPage; // La exportamos para usarla en otros modulos