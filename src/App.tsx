
import { useEffect, useState } from 'react'
import Folder from './components/folder'

function App() {
  useEffect(() => {
    const items = document.querySelectorAll('.stack-folder')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15 }
    )
    items.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const [clickedTabs, setClickedTabs] = useState<number[]>([])

  const toggleTab = (id: number) => {
    setClickedTabs((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  return (
    <div className="page">
      <header className="site-header">
        <div className="site-name">Alex Rivera</div>
        <div className="contacts">alex.rivera@email.com • (555) 123-4567 • alexrivera.art</div>
      </header>

      <main>
        {/* <Folder /> */}

        <div className="stack-wrap">
          <div className="stack">
            <div className={`stack-folder ${clickedTabs.includes(1) ? 'clicked' : ''}`}>
              <Folder
                id={1}
                onTabClick={toggleTab}
                tabClicked={clickedTabs.includes(1)}
              />
            </div>
            <div className={`stack-folder ${clickedTabs.includes(2) ? 'clicked' : ''}`}>
              <Folder
                id={2}
                onTabClick={toggleTab}
                tabClicked={clickedTabs.includes(2)}
              />
            </div>
            <div className={`stack-folder ${clickedTabs.includes(3) ? 'clicked' : ''}`}>
              <Folder
                id={3}
                onTabClick={toggleTab}
                tabClicked={clickedTabs.includes(3)}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
