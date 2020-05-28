import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'churchprod', page: '/' },
  //   { label: 'Blog', page: '/' },
  //   { label: 'Contact', page: '/contact' },
  //   { label: 'Source Code', link: 'https://github.com/ijjk/notion-blog' },
]

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} churchprod</title>
        <meta name="description" content="A blog about Church Production" />
        <meta property="og:title" content="churchprod" />
        <meta
          property="og:image"
          content="https://churchprod.now.sh/og-image.png"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1170" />
        <meta name="twitter:site" content="@thatguysam" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}
