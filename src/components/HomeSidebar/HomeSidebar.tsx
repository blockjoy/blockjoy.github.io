import DocSidebar from '@site/src/theme/DocSidebar/index';
import React, { FC } from 'react';
import styles from './styles.module.scss';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';

export const HomeSidebar: FC = () => {
  const {
    siteConfig: { themeConfig },
  } = useDocusaurusContext();
  const { pathname } = useLocation();

  return (
    <aside>
      <div className={styles.sidebarViewport}>
        <DocSidebar
          sidebar={themeConfig.sidebar || []}
          path={pathname}
          onCollapse={() => {}}
          isHidden={false}
        />
      </div>
    </aside>
  );
};
