import { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <div className="home-page">
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-12">Art</div>
        </div>
      </div>
    </div>
  )
}