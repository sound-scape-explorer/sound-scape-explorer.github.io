interface Sponsor {
  slug: string;
  image: string;
  url: string;
}

const sponsors: Sponsor[] = [
  {
    slug: 'universite-jean-monnet',
    image: '/img/cse/sponsors/universite-jean-monnet.png',
    url: 'https://www.univ-st-etienne.fr/',
  },
  {
    slug: 'laboratoire-hubert-curien',
    image: '/img/cse/sponsors/laboratoire-hubert-curien.svg',
    url: 'https://laboratoirehubertcurien.univ-st-etienne.fr/',
  },
  {
    slug: 'saint-etienne-metropole',
    image: '/img/cse/sponsors/saint-etienne-metropole.png',
    url: 'https://www.saint-etienne-metropole.fr/',
  },
  {
    slug: 'office-francais-biodiversite',
    image: '/img/cse/sponsors/office-francais-biodiversite.png',
    url: 'https://www.ofb.gouv.fr/',
  },
  {
    slug: 'ecole-pratique-hautes-etudes',
    image: '/img/cse/sponsors/ecole-pratique-hautes-etudes.png',
    url: 'https://www.ephe.psl.eu/',
  },
  {
    slug: 'institut-universitaire-france',
    image: '/img/cse/sponsors/institut-universitaire-france.png',
    url: 'https://www.iufrance.fr/',
  },
  {
    slug: 'labex-celya',
    image: '/img/cse/sponsors/labex-celya.svg',
    url: 'https://celya.universite-lyon.fr/labex-celya-151124.kjsp',
  },
];

export function CseSponsors() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2em',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {sponsors.map((sponsor) => (
        <a
          href={sponsor.url}
          target={'_blank'}
          rel={'noopener noreferrer'}
          itemProp={'url'}
        >
          <img
            width={200}
            alt={sponsor.slug}
            src={sponsor.image}
          />
        </a>
      ))}
    </div>
  );
}
