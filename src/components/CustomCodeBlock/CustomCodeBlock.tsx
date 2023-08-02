import React, { FC, useMemo, useState } from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import style from './style.module.scss';
import CodeIcon from '@site/static/img/code-icon.svg';
import Copy from '@site/static/img/copy.svg';
import { Code } from '@site/models/code';
import { Language } from '@site/models/language';
import IconSuccess from '@theme/Icon/Success';

interface Props {
  codes: Code[];
}

const languageTypeGuard = (language: string): language is Language => {
  const validLanguages = ['typescript', 'javascript', 'python', 'go', 'rust'];
  return validLanguages.includes(language);
};

export const CustomCodeBlock: FC<Props> = ({ codes }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isShorten, setIsShorten] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState<Language>('go');
  const currentCode = useMemo(
    () => codes.find((code) => code.language === currentLanguage),
    [codes, currentLanguage],
  );
  const languageOptions = useMemo(
    () => codes.map(({ language }) => language),
    [codes],
  );
  const codeToDisplay = useMemo(
    () =>
      currentCode?.codeShorten && isShorten
        ? currentCode?.codeShorten
        : currentCode?.code,
    [currentCode, isShorten],
  );

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(codeToDisplay)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1000);
      })
      .catch();
  };

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
          {languageOptions.map((language) => (
            <option value={language} key={language}>
              {language}
            </option>
          ))}
        </select>
        <div className={style.buttonWrapper}>
          {currentCode?.codeShorten && (
            <button
              className={style.button}
              onClick={() => setIsShorten(!isShorten)}
            >
              <span>{isShorten ? 'Show Full Code' : 'Show Less Code'}</span>
              <CodeIcon />
            </button>
          )}
          <button
            onClick={copyToClipboard}
            className={isCopied ? style.copyButtonSuccess : style.button}
          >
            <IconSuccess className={style.copyButtonSuccessIcon} />
            <span className={style.copyButtonText}>
              <span>Copy</span>
              <Copy />
            </span>
          </button>
        </div>
      </div>
      <>
        {currentCode ? (
          <div className={style.base}>
            <CodeBlock
              text={codeToDisplay}
              language={currentCode.language}
              theme={dracula}
              codeBlock
            />
          </div>
        ) : null}
      </>
    </div>
  );
};
