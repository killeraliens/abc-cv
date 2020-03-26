import React, { useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

export default function PdfDownload ({ path }) {
  const [fileSize, setFileSize] = useState('')

  const getSize = (href) => {
    let http = new XMLHttpRequest()

    http.open('HEAD', path, true)
    http.onreadystatechange = function () {
      if (this.readyState === this.DONE) {
        if (this.status === 200) {
          const newSize = this.getResponseHeader('content-length')
          return setFileSize(newSize)
        }
      }
    }
    http.send()
  }

  useEffect(() => {
    return getSize(path)
  }, [])

  return (
    <a id="pdfLink" className="live-only" href={path} rel="noopener noreferrer" target="_blank" download>
      <FontAwesomeIcon icon={faFileDownload}></FontAwesomeIcon>
      download my CV {`(pdf ${fileSize / 1000} kb)`}
    </a>
  )
}
