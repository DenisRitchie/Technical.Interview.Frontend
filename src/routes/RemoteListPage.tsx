import React, { useEffect, useState } from 'react'
import Loading from '@/components/Loading'
import AvatarImg from '@/components/AvatarImg'
import type { ElementItem } from '@/types'
import { useNavigate } from 'react-router-dom'

const URL = 'https://6172cfe5110a740017222e2b.mockapi.io/elements'

export default function RemoteListPage() {
  const [items, setItems] = useState<ElementItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetch(URL)
      .then(async r => {
        if (!r.ok) throw new Error('Error ' + r.status)
        const data = await r.json()
        if (!cancelled) setItems(data)
      })
      .catch(err => !cancelled && setError(err.message ?? 'Error desconocido'))
      .finally(() => !cancelled && setLoading(false))
    return () => { cancelled = true }
  }, [])

  if (loading) return (
    <div className="container">
      <h1>Listado remoto</h1>
      <Loading />
    </div>
  )

  if (error) return (
    <div className="container">
      <h1>Listado remoto</h1>
      <p role="alert">Ocurrió un error: {error}</p>
      <button onClick={() => location.reload()}>Reintentar</button>
    </div>
  )

  return (
    <div className="container">
      <h1>Listado remoto</h1>
      <div className="buttons">
        <button onClick={() => navigate('/')} data-testid="back-home">Volver</button>
      </div>
      <ul className="list">
        {items.map(it => (
          <li key={it.id} className="list-item">
            <span>{it.name}</span>
            {(it.avatar || (it as any).image) && <AvatarImg src={(it.avatar || (it as any).image)} alt={it.name} />}
          </li>
        ))}
      </ul>
    </div>
  )
}
