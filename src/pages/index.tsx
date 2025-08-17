import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import {useState} from 'react';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started 📋
          </Link>
          <Link
            className="button button--primary button--lg"
            to="https://www.npmjs.com/package/docusaurus-plugin-copy-page-button">
            View on NPM 📦
          </Link>
        </div>
        <InstallSection />
      </div>
    </header>
  );
}

function InstallSection(): ReactNode {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('npm');

  const commands = [
    { manager: 'npm', command: 'npm install docusaurus-plugin-copy-page-button' },
    { manager: 'yarn', command: 'yarn add docusaurus-plugin-copy-page-button' },
    { manager: 'pnpm', command: 'pnpm add docusaurus-plugin-copy-page-button' },
    { manager: 'bun', command: 'bun add docusaurus-plugin-copy-page-button' },
  ];

  const copyToClipboard = async (command: string, manager: string) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedCommand(manager);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const activeCommand = commands.find(cmd => cmd.manager === activeTab);

  return (
    <div className={styles.installSection}>
      <div className={styles.tabContainer}>
        <div className={styles.tabHeaders}>
          {commands.map(({manager}) => (
            <button
              key={manager}
              className={`${styles.tabHeader} ${activeTab === manager ? styles.tabHeaderActive : ''}`}
              onClick={() => setActiveTab(manager)}
            >
              {manager}
            </button>
          ))}
        </div>
        <div className={styles.tabContent}>
          <div className={styles.commandWrapper}>
            <code className={styles.commandText}>{activeCommand?.command}</code>
            <button
              className={styles.copyButton}
              onClick={() => copyToClipboard(activeCommand?.command || '', activeTab)}
              title={`Copy ${activeTab} command`}
            >
              {copiedCommand === activeTab ? '✓' : '📋'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
