'use client'

export default function ShareButtons({ url, title }: { url: string, title: string }) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  return (
    <div className="flex flex-wrap gap-3">
      <a className="btn-primary" target="_blank" href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}>Compartilhar no WhatsApp</a>
      <a className="btn-ghost" target="_blank" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}>Compartilhar no LinkedIn</a>
    </div>
  )
}
