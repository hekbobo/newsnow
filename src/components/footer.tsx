export function Footer() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        fontSize: 13,
        lineHeight: 1.6,
        color: 'rgba(255, 255, 255, 0.72)',
        textAlign: 'center',
        padding: '10px 16px 18px',
        marginTop: 12,
      }}
    >
      <a
        href={`${Homepage}/blob/main/LICENSE`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#fff',
          textDecoration: 'none',
          opacity: 0.9,
        }}
      >
        MIT LICENSE
      </a>

      <span aria-hidden="true" style={{ opacity: 0.45 }}>
        ·
      </span>

      <span>
        <span>NewsNow © 2024 By </span>
        <a
          href={Author.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#fff',
            textDecoration: 'none',
            opacity: 0.95,
          }}
        >
          {Author.name}
        </a>
      </span>

      <span aria-hidden="true" style={{ opacity: 0.45 }}>
        ·
      </span>

      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 6,
          padding: '2px 8px',
          borderRadius: 999,
          background: 'rgba(255, 255, 255, 0.06)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <span style={{ opacity: 0.9 }}>友情链接</span>
        <a
          href="https://xingzhiapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#fff',
            textDecoration: 'none',
            opacity: 0.95,
          }}
        >
          行止
        </a>
        <span aria-hidden="true" style={{ opacity: 0.5 }}>
          |
        </span>
        <a
          href="https://stillquotes.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#fff',
            textDecoration: 'none',
            opacity: 0.95,
          }}
        >
          拾言
        </a>
      </span>
    </div>
  )
}
