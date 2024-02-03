import {Fragment} from 'react';

interface Sponsor {
  slug: string;
  image: string;
  url: string;
}

export const sponsors: Sponsor[] = [
  {
    slug: 'universite-jean-monnet',
    image: '/img/cse/sponsors/universite-jean-monnet.png',
    url: 'https://www.univ-st-etienne.fr/',
  },
  {
    slug: 'enes-lab',
    image: '/img/cse/sponsors/enes-lab.jpg',
    url: 'https://www.eneslab.com/',
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

function Container({children}) {
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
      {children}
    </div>
  );
}

export function CseSponsors() {
  return (
    <Container>
      {sponsors.map((sponsor) => (
        <a
          key={sponsor.slug}
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
    </Container>
  );
}

export function CseSponsorsInline() {
  return (
    <Fragment>
      <Container>
        {sponsors.slice(0, 3).map((sponsor) => (
          <a
            key={sponsor.slug}
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
      </Container>
      <Container>
        {sponsors.slice(3).map((sponsor) => (
          <a
            key={sponsor.slug}
            href={sponsor.url}
            target={'_blank'}
            rel={'noopener noreferrer'}
            itemProp={'url'}
          >
            <img
              width={100}
              alt={sponsor.slug}
              src={sponsor.image}
            />
          </a>
        ))}
      </Container>
    </Fragment>
  );
}
