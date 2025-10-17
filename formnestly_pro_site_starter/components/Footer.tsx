export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-16">
      <div className="container py-10 text-sm text-muted">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p>© {new Date().getFullYear()} FormNestly Studio. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://www.pinterest.com" target="_blank" rel="noreferrer">Pinterest</a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.etsy.com/shop/FormNestlyStudio" target="_blank" rel="noreferrer">Etsy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
