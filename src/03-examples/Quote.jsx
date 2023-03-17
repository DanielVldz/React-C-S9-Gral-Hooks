import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({name, id}) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({width: 0, height: 0})
  useLayoutEffect(() => {
    const {width, height} = pRef.current.getBoundingClientRect();
    setBoxSize({width, height})
  }, [name])
  return (
      <>
        <blockquote 
          className="blockquote text-left"
          style={{display: 'flex'}}>
            <p ref={pRef} className="mb-1">{name}</p>
            <footer className="blockquote-footer">{id}</footer>
        </blockquote>
        {/* <code>{JSON.stringify(boxSize)}</code> */}
      </>
  )
}
