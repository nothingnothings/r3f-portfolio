export default function PageButtonsHub({ activePage }) {
  return (
    <div className="d-flex justify-content-end pageButtonsHubWrapper interface titilium-web">
      <div className="controls">
        <div className="section d-flex flex-column">
          <button
            className={
              'btn px-lg-4 py-lg-3 btn--ghost' +
              (activePage === 'notebook' ? ' active-button' : '')
            }
            onClick={() => useNotebook.getState().switchPage('home')}
          >
            Home
          </button>
          <button
            className={
              'btn px-lg-4 py-lg-3 btn--ghost' +
              (activePage === 'about' ? ' active-button' : '')
            }
          >
            About
          </button>
          <button
            className={
              'btn px-lg-4 py-lg-3 btn--ghost' +
              (activePage === 'skills' ? ' active-button' : '')
            }
          >
            Skills
          </button>
        </div>
      </div>
    </div>
  );
}
