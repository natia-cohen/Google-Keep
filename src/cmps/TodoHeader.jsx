import { SiGooglekeep } from "react-icons/si"

export function TodoHeader() {
  return (
    <header className="todo-header">
      <div className="header-start">
        <button className="menu-btn">☰</button>
        <div className="logo-item">
          <SiGooglekeep />
        </div>

        <h1 className="logo-text">Keep</h1>
      </div>
      <div className="header-center">
        <input className="search-input" type="text" placeholder="Search..." />
      </div>
      <div className="header-end"></div>
    </header>
  )
}
