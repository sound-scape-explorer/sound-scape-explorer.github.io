import {Highlight, themes} from 'prism-react-renderer';

interface Props {
  code: string;
  language: string;
}

export function CodeBlock({code, language}: Props) {
  return (
    <Highlight
      theme={themes.github}
      code={code}
      language={language}
    >
      {({style, tokens, getTokenProps}) => (
        <pre style={style}>
          {tokens.map((line, i) => (
            <div key={i}>
              {line.map((token, key) => (
                <span
                  key={key}
                  {...getTokenProps({token: token})}
                />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
