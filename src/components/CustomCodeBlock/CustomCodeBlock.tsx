import React, { FC, useMemo, useState } from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import style from './style.module.scss';
import CodeIcon from '@site/static/img/code-icon.svg';
import Copy from '@site/static/img/copy.svg';
import { Code } from '@site/models/code';
import { Language } from '@site/models/language';

interface Props {
  codes: Code[];
}

const languageTypeGuard = (language: string): language is Language => {
  const validLanguages = ['typescript', 'javascript', 'python', 'go', 'rust'];
  return validLanguages.includes(language);
};

export const CustomCodeBlock: FC<Props> = ({ codes }) => {
  const [isShorten, setIsShorten] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState<Language>('go');
  const currentCode = useMemo(
    () => codes.find((code) => code.language === currentLanguage),
    [codes, currentLanguage],
  );
  const options = useMemo(() => codes.map(({ language }) => language), [codes]);

  return (
    <div className={style.wrapper}>
      <div className={style.heading}>
        <select
          className={style.select}
          onChange={(e) => {
            if (!languageTypeGuard(e.currentTarget.value)) return;
            setCurrentLanguage(e.currentTarget.value);
          }}
        >
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
        <div className={style.buttonWrapper}>
          {currentCode.codeShorten && (
            <button
              className={style.button}
              onClick={() => setIsShorten(!isShorten)}
            >
              <span>{isShorten ? 'Show Full Code' : 'Show Less Code'}</span>
              <CodeIcon />
            </button>
          )}
          <button className={style.button}>
            <span>Copy</span>
            <Copy />
          </button>
        </div>
      </div>
      <>
        {currentCode ? (
          <>
            {isShorten && currentCode.codeShorten ? (
              <div className={style.base}>
                <CodeBlock
                  text={currentCode.codeShorten}
                  language={currentCode.language}
                  theme={dracula}
                  codeBlock
                  showLineNumbers={false}
                />
              </div>
            ) : (
              <div className={style.base}>
                <CodeBlock
                  text={currentCode.code}
                  language={currentCode.language}
                  theme={dracula}
                  codeBlock
                  showLineNumbers={false}
                />
              </div>
            )}
          </>
        ) : (
          <>No code</>
        )}
      </>
    </div>
  );
};
