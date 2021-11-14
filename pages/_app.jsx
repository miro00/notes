import "normalize.css"
import "$styles/global.scss"
import "$styles/form.scss"
import "$styles/notes.scss"
import "$styles/NoteLink.scss"
import "$styles/NoteGroup.scss"

export default function App({Component, pageProps}) {
  return (
    <Component {...pageProps} />
  )
}
