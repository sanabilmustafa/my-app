import React from 'react'

export default function SearchModal() {
  return (
    <div
    className="modal fade search-modal"
    id="searchModal"
    tabIndex={-1}
    aria-labelledby="searchModalLabel"
    aria-hidden="true"
  >
    <button type="button" className="close" data-bs-dismiss="modal">
      <span className="flaticon-cross" />
    </button>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="search-block clearfix">
          <form>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Search Here..."
                type="text"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
