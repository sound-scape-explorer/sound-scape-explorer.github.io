interface Author {
  name: string;
  image: string;
  url: string;
}

const authors: Author[] = [
  {
    name: 'Jérémy Rouch',
    image: '/img/cse/authors/jeremy-rouch.jpeg',
    url: 'https://www.researchgate.net/profile/Jeremy-Rouch',
  },
  {
    name: 'Bamdad Sabbagh',
    image: '/img/cse/authors/bamdad-sabbagh.jpeg',
    url: 'https://bamdad.fr',
  },
  {
    name: 'Lana Minier',
    image: '/img/cse/authors/lana-minier.jpeg',
    url: 'https://www.researchgate.net/profile/Lana-Minier-2',
  },
  {
    name: 'Frédéric Sèbe',
    image: '/img/cse/authors/frederic-sebe.png',
    url: 'https://celya.universite-lyon.fr/membres-de-celya/frederic-sebe--37274.kjsp',
  },
  {
    name: 'Nicolas Mathevon',
    image: '/img/cse/authors/nicolas-mathevon.jpeg',
    url: 'https://www.eneslab.com/nicolas-mathevon',
  },
  {
    name: 'Rémi Emonet',
    image: '/img/cse/authors/remi-emonet.jpg',
    url: 'https://home.heeere.com/',
  },
];

export function CseAuthors() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2em',
      }}
    >
      {authors.map((author) => (
        <div
          className="avatar"
          style={{
            display: 'grid',
            gridTemplateRows: '1fr 2em',
            gap: '1em',
            justifyItems: 'center',
            alignContent: 'center',
          }}
        >
          <img
            src={author.image}
            alt={author.name}
            className="avatar__photo"
            style={{
              width: 200,
              height: 200,
              objectFit: 'cover',
              margin: '0',
            }}
          />
          <div
            className="avatar__name"
            style={{
              fontSize: '150%',
              display: 'flex',
            }}
          >
            <a
              href={author.url}
              target={'_blank'}
              rel={'noopener noreferrer'}
              itemProp={'url'}
            >
              <span
                itemProp={'name'}
                style={{margin: '0'}}
              >
                {author.name}
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
