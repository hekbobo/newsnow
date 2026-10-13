import { Link } from "@tanstack/react-router"
import { NavBar } from "../navbar"

export function Header() {
  return (
    <>
      <span className="flex justify-self-start">
        <Link to="/" className="flex gap-2 items-center">
          <div className="h-10 w-10 bg-cover" title="logo" style={{ backgroundImage: "url(/icon.svg)" }} />
          <span className="text-2xl font-brand line-height-none!">
            <p>News</p>
            <p className="mt--1">
              <span className="color-primary-6">N</span>
              <span>ow</span>
            </p>
          </span>
        </Link>
        <a target="_blank" href={`${Homepage}/releases/tag/v${Version}`} className="btn text-sm ml-1 font-mono">
          {`v${Version}`}
        </a>
      </span>
      <span className="justify-self-center">
        <span className="hidden md:(inline-block)">
          <NavBar />
        </span>
      </span>
      <span className="justify-self-end" />
    </>
  )
}
