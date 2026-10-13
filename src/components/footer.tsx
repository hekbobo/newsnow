export function Footer() {
  return (
    <>
      <a href={`${Homepage}/blob/main/LICENSE`} target="_blank" rel="noopener noreferrer">MIT LICENSE</a>
      <span>
        <span>NewsNow © 2024 By </span>
        <a href={Author.url} target="_blank" rel="noopener noreferrer">
          {Author.name}
        </a>
      </span>

      <span style={{ marginLeft: 12 }}>
        <strong>友情链接：</strong>
        <a href="https://xingzhiapp.com/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 6 }}>行止</a>
        <span style={{ margin: '0 6px' }}>|</span>
        <a href="https://stillquotes.com/" target="_blank" rel="noopener noreferrer">拾言</a>
      </span>
    </>
  )
}
