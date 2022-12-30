import React, { useState } from 'react'
import Menu from './Menu'
import items from './data'


const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>¡Conoce Nuestro Menú!</h2>
          <div className="underline"></div>
        </div>
        <br /><br />
        <Menu items={menuItems} />
        <br /><br />
        <div className="title">
          <h2>¡Reserva con Nosotros!</h2>
          <div className="underline"></div>
        </div>
      </section>
    </main>
  )
}

export default App
