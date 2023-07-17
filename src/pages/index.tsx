import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.scss';
import DocSidebar from '../theme/DocSidebar/index';
import Image from '@site/src/theme/IdealImage';
import { FeaturedPosts } from '../components/FeaturedPosts/FeaturedPosts';
import { BlogList } from '../components/BlogList/BlogList';

const FEATUED_DUMMY_POSTS_ONE = [
  {
    title: 'Web3: The Next Step in Internet Evolution',
    description:
      'Unveil the transformative potential of decentralized technologies: A comprehensive guide to understanding and exploring the Web3 landscape',
    path: '',
  },
  {
    title: 'Smart Contracts: The Backbone of Web3',
    description:
      'The power of trustless agreements: An in-depth exploration of smart contracts and their pivotal role in the Web3 ecosystem',
    path: '',
  },
  {
    title: 'Programming the Web3: Tools and Techniques',
    description:
      'A step-by-step guide to mastering the essential tools and techniques in Web3 programming',
    path: '',
  },
];
const FEATUED_DUMMY_POSTS_TWO = [
  {
    title: 'Web3: The Next Step in Internet Evolution',
    description:
      'Unveil the transformative potential of decentralized technologies: A comprehensive guide to understanding and exploring the Web3 landscape',
    path: '',
  },
  {
    title: 'The DAO Revolution: Power to the People in the Modern Era of Web3',
    description:
      'The DAO Revolution: Power to the People in the Modern Era of Web3',
    path: '',
  },
  {
    title: 'NFTs and the Digital Art Explosion: A Web3 Phenomenon',
    description:
      'The canvas of innovation: Explore how Non-Fungible Tokens (NFTs) are revolutionizing the world of digital art and creative expression in the Web3 paradigm.',
    path: '',
  },
];

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Homepage | Blockjoy`}
      description="Description will go into a meta tag in <head />"
    >
      <div className={styles.sidebar}>
        <DocSidebar
          sidebar={[
            { type: 'link', href: '/myCustomPage', label: 'My Custom Page' },
            {
              type: 'link',
              href: '/anotherCustomPage',
              label: 'Another Custom Page',
            },
          ]}
          path="/"
          onCollapse={() => {}}
          isHidden={false}
        />
      </div>
      <main className={styles.main}>
        <p className={styles.breadcrumb}>Home</p>
        <h1 className={styles.title}>{siteConfig.title}</h1>
        <div className={styles.documentation}>
          <h2 className={styles.documentation__title}>
            BlockJoy Documentation
          </h2>
          <p className={styles.documentation__intro}>
            We believe that people should be able to easily run their own web3
            infrastructure (blockchain nodes) anywhere they want.
          </p>
          <p className={styles.documentation__description}>
            Web3 represents a fundamental evolution of the internet built upon
            blockchain architectures. Moving from centralized control and
            capitalization to a decentralized network where the capital is
            distributed between the operators and consumers. Whether running a
            consumer{' '}
            <a href="" className="link">
              staking-as-a-service company
            </a>
            .
          </p>
        </div>
        <Image
          img={require('@site/static/img/video.jpg')}
          className={styles.documentation__img}
        />
        <div className={styles['featured-posts__col-one']}>
          <FeaturedPosts title="Start here" items={FEATUED_DUMMY_POSTS_ONE} />
        </div>
        <div className={styles['featured-posts__col-two']}>
          <FeaturedPosts title="Popular" items={FEATUED_DUMMY_POSTS_TWO} />
        </div>
        <h3 className={styles.suggested__title}>
          Learn more, our <span>SUGGESTED</span> articles
        </h3>
        <p className={styles.suggested__description}>
          In terms of digital identity and privacy, Web 3.0 offers solutions
          that allow users to manage their identities securely and selectively
          share data, reducing the risk of data breaches and unauthorized
          access.
        </p>
        <div className={styles.suggested__articles}>
          <BlogList
            blogs={[
              {
                name: 'Add Integrations',
                description:
                  'Connect services like Google Groups, AWS IAM, Okta and more',
                path: 'mdx-blog-post',
              },
              {
                name: 'Add Integrations',
                description:
                  'Learn more about reviewing access from the web or directly inside of Slack. Connect services like Google Groups.',
                path: 'mdx-blog-post',
              },
              {
                name: 'Add Integrations',
                description:
                  'Connect services like Google Groups, AWS IAM, Okta and more',
                path: 'mdx-blog-post',
              },
              {
                name: 'Add Integrations',
                description:
                  'Learn more about reviewing access from the web or directly inside of Slack. Connect services like Google Groups, AWS IAM, Okta and more.',
                path: 'mdx-blog-post',
              },
            ]}
          />
        </div>
      </main>
    </Layout>
  );
}
