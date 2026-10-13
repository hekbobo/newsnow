const footerLink = "text-white/90 no-underline cursor-pointer transition-colors duration-200 hover:text-white"
const friendLink = "text-white/90 no-underline cursor-pointer px-1.5 py-0.5 rounded-md transition-all duration-200 hover:(text-white bg-primary/20)"

export function Footer() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        fontSize: 13,
        lineHeight: 1.6,
        color: "rgba(255, 255, 255, 0.72)",
        textAlign: "center",
        padding: "10px 16px 18px",
        marginTop: 12,
      }}
    >
      <a
        href={`${Homepage}/blob/main/LICENSE`}
        target="_blank"
        rel="noopener noreferrer"
        className={footerLink}
      >
        MIT LICENSE
      </a>

      <span aria-hidden="true" style={{ opacity: 0.45 }}>
        ·
      </span>

      <span>NewsNow © 2024</span>

      <span aria-hidden="true" style={{ opacity: 0.45 }}>
        ·
      </span>

      <span className="inline-flex items-center gap-1">
        <span className="op-70">友情链接</span>
        <a
          href="https://xingzhiapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={friendLink}
        >
          行止
        </a>
        <span aria-hidden="true" className="op-40">
          ·
        </span>
        <a
          href="https://stillquotes.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={friendLink}
        >
          拾言
        </a>
      </span>
    </div>
  )
}
