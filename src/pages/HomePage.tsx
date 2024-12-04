import { useEffect, useState } from "react";

export default function HomePage() {

  function getMovies() {
    throw new Error("Function not implemented.");
  }

  useEffect(() => {
    getMovies()
  }, [])

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


